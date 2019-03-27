import EXIF from 'exif-js';
import { Toast } from 'antd-mobile';

//上传图片函数
export function selectFileImage(file: any, callBack: (arg0: any) => void) {

    //如果有图片
    if (!!file) {
        Toast.info('正在上传', 0);
        var rFilter = /^(image\/jpeg|image\/png|image\/gif)$/i; // 检查图片格式 

        if (!rFilter.test(file.type)) {
            Toast.hide()
            Toast.info('请选择正确的图片格式', 3);
        } else {
            //iOS重力感应图片旋转90°处理
            EXIF.getData(file, function (this: any) {
                var allEXIF = EXIF.getAllTags(this);
                console.log('获取图片所有信息 = ' + JSON.stringify(allEXIF));

                //获取图片重力感应 Orientation参数：  1:0°  /  6:顺时针90°  /  8:逆时针180°  /  3:180°
                var orientation = EXIF.getTag(this, 'Orientation');
                console.log('获取图片重力感应 = ' + orientation);

                //创建实例
                var reader = new FileReader();
                //异步读取文件内容
                reader.readAsDataURL(file);
                //读取操作成功完成
                reader.onload = function (this: any) {
                    //输出图片 图片/重力感应/图片设置宽度 px/输出图片函数
                    getImgData(this.result, orientation, 500, function (data: string) {
                        //这里可以使用校正后的图片data了
                        console.log('Base64图片 = ' + data);
                        Toast.hide()
                        callBack(data);
                    });
                }
            });
        }
    }
}

// iOS解决 图片旋转90度函数  带  压缩功能
// 图片/重力感应/宽度/输出图片函数
export function getImgData(img: string, dir: string | undefined, setSize: number, callBack: (arg0: string) => void) {
    var image = new Image();
    image.onload = function (this: any) {
        var degree = 0,
            drawWidth, drawHeight, width, height;
        drawWidth = this.naturalWidth;
        drawHeight = this.naturalHeight;
        //以下改变一下图片大小
        var maxSide = Math.max(drawWidth, drawHeight);

        //宽度 高度最大值为 setSize回调函数调用
        if (maxSide > setSize) {
            var minSide = Math.min(drawWidth, drawHeight);
            minSide = minSide / maxSide * setSize;
            maxSide = setSize;
            if (drawWidth > drawHeight) {
                drawWidth = maxSide;
                drawHeight = minSide;
            } else {
                drawWidth = minSide;
                drawHeight = maxSide;
            }
        }
        var canvas = document.createElement('canvas');
        canvas.width = width = drawWidth;
        canvas.height = height = drawHeight;
        var context: any = canvas.getContext('2d');

        if (dir != undefined) {
            console.log('图片重力感应：' + dir);

            //判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
            switch (Number(dir)) {
                //iphone横屏拍摄，此时home键在左侧
                case 3:
                    degree = 180;
                    drawWidth = -width;
                    drawHeight = -height;
                    break;
                    //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
                case 6:
                    canvas.width = height;
                    canvas.height = width;
                    degree = 90;
                    drawWidth = width;
                    drawHeight = -height;
                    break;
                    //iphone竖屏拍摄，此时home键在上方
                case 8:
                    canvas.width = height;
                    canvas.height = width;
                    degree = 270;
                    drawWidth = -width;
                    drawHeight = height;
                    break;
            }

        } else {
            console.log('图片重力感应：无');
        }

        //使用canvas旋转校正
        context.rotate(degree * Math.PI / 180);
        context.drawImage(this, 0, 0, drawWidth, drawHeight);
        //返回校正图片   图片/压缩质量0~1,
        callBack(canvas.toDataURL("image/jpeg", 0.9));

    }
    image.src = img;
}
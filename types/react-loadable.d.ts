export = index;
declare function index(opts: any): any;
declare namespace index {
    class Capture {
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        getChildContext(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Capture {
        namespace childContextTypes {
            function loadable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace propTypes {
            function report(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    function Map(opts: any): any;
    function preloadAll(): any;
    function preloadReady(): any;
}

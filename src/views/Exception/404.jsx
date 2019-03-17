import React from 'react';

class notMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noPage: require('@img/404.jpg'),
        }
    }
    render() {
        return (
            <div className='box-center'>
                <img src={this.state.noPage} alt="" />
            </div>
        )
    }
}

export default notMatch;
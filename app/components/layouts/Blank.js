import React from 'react';
import Progress from 'components/common/Progress';
import Messages from 'components/common/messages'

class Blank extends React.Component {

    render() {
        return (
            <div>
                <Progress />
                {this.props.children}
                <Messages />
            </div>
        )
    }

    componentDidMount(){
        $('body').addClass('gray-bg');
    }

    componentWillUnmount(){
        $('body').removeClass('gray-bg');
    }
}

export default Blank
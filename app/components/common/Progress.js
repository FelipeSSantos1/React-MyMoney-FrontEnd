import React from 'react'
import pace from '../../../public/vendor/pace/pace'
import '../../../public/vendor/pace/style.css'

class Progress extends React.Component {
    componentDidMount() {
        pace.start()
    }

    render() {
        return (null)
    }
}

export default Progress


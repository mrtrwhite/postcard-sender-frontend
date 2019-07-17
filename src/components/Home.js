import React from 'react'

class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    getStarted () {
        this.props.begin();
    }

    render () {
        return (
            <div className="home-container">
                <h1 className="home-title">Let someone know that<br/>you care about them.</h1>
                <p className="home-copy">Send a physical postcard to anyone in the world, right now for free.</p>
                <span className="button" onClick={() => { this.getStarted() }}>Get Started</span>
            </div>
        )
    }
}

export default Home
import React from 'react'
import Home from '../components/Home';
// import PropTypes from 'prop-types'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className="background">
                <Home />
            </div>
        )
    }
}

export default App
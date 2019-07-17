import React from 'react'
import Home from './Home'
import Card from './Card'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCard: false
        }
    }

    begin() {
        this.setState({ showCard: true })
    }

    render () {
        return (
            <div className="background">
                <Home begin={() => { this.begin() }} />
                <Card show={this.state.showCard} />
            </div>
        )
    }
}

export default App
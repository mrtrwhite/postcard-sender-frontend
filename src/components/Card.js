import React from 'react'
import ImageUpload from './ImageUpload';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            cardVisible: false
        }
        this.cardRef = React.createRef()
    }

    componentDidUpdate () {
        setTimeout(() => {
            if(!this.state.cardVisible) {
                this.cardRef.current.classList.add('active')
                this.setState({ cardVisible: true })
            }
        }, 100)
    }

    render () {
        return (
            this.props.show ? 
                <div className="card" ref={this.cardRef}>
                    <h2 className="card-title">Your Design</h2>
                    <ImageUpload />
                </div> 
            : null
        )
    }
}

export default Card
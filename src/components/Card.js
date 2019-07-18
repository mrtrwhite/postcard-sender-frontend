import React from 'react'
import ImageUpload from './ImageUpload'
import { updateMessage } from '../actions/message'
import { connect } from 'react-redux'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            cardVisible: false
        }
    }

    nextStep () {
        this.setState({ step: 2 })
    }

    messageChange (evt) {
        let { dispatch } = this.props
        let text = evt.target.value
        dispatch(updateMessage(text))
    }

    canProceed () {
        return this.props.message.length > 0 && this.props.fileURL.length > 0;
    }

    componentDidUpdate () {
        setTimeout(() => {
            if(!this.state.cardVisible) {
                this.setState({ cardVisible: true })
            }
        }, 100)
    }

    render () {
        return (
            this.props.show ? 
                <div className={`card ${this.state.step === 2 ? 'flip' : null} ${this.state.cardVisible ? 'active' : null}`}>
                    <h2 className="card-title">Your Design</h2>
                    <div className="card-inner">
                        <div className="half">
                            <p>Front:</p>
                            <ImageUpload />
                        </div>
                        <div className="half">
                            <p>Back:</p>
                            <div className="back-preview">
                                <textarea name="message" className="message-textarea" onChange={(evt) => { this.messageChange(evt) }} placeholder="Say something nice!"></textarea>
                                <div className="address-preview">
                                    <div>
                                        <p>Address line 1</p>
                                        <p>Address line 2</p>
                                        <p>Town</p>
                                        <p>Postcode</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className={`button card-button ${this.canProceed() ? '' : 'disabled'}`} onClick={() => { this.nextStep() }}>Proceed</span>
                </div> 
            : null
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message,
        fileURL: state.file.fileURL
    }
}

export default connect(mapStateToProps)(Card)
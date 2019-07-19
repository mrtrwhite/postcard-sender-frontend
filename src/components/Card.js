import React from 'react'
import ImageUpload from './ImageUpload'
import { updateMessage } from '../actions/message'
import { updateFormInput } from '../actions/form'
import { connect } from 'react-redux'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            cardVisible: false,
            form: {}
        }
    }

    nextStep () {
        if(this.canProceed()) {
            this.setState({ step: 2 })
        }
    }

    submit () {

    }

    canProceed () {
        return this.props.message && this.props.fileURL;
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
                <div className={`card ${this.state.cardVisible ? 'active' : null}`}>
                    <div className={`card-panel card-step-1 ${this.state.step === 1 ? 'active' : ''}`}>
                        <h2 className="card-title">Your Design</h2>
                        <div className="card-inner">
                            <div className="half upload-half">
                                <p>Front:</p>
                                <ImageUpload />
                            </div>
                            <div className="half back-half">
                                <p>Back:</p>
                                <div className="back-preview">
                                    <textarea name="message" className="message-textarea" onChange={this.props.handleMessageChange} placeholder="Say something nice!"></textarea>
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
                        <div className="button-wrap">
                            <span className={`button card-button ${this.canProceed() ? '' : 'disabled'}`} onClick={() => this.nextStep()}>Proceed</span>
                        </div>
                    </div>
                    <div className={`card-panel card-step-2 ${this.state.step === 2 ? 'active' : ''}`}>
                        <h2 className="card-title">Your details:</h2>
                        <div className="input-row">
                            <div className="half">
                                <input type="text" name="user_fname" placeholder="First name" className="text-input" onChange={this.props.handleInputChange} />
                            </div>
                            <div className="half">
                                <input type="text" name="user_lname" placeholder="Last name" className="text-input" onChange={this.props.handleInputChange} />
                            </div>
                        </div>
                        <div className="input-row">
                            <input type="email" name="user_email" placeholder="Email address" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <h2 className="card-title">Their details:</h2>
                        <div className="input-row">
                            <div className="half">
                                <input type="text" name="recipient_fname" placeholder="First name" className="text-input" onChange={this.props.handleInputChange} />
                            </div>
                            <div className="half">
                                <input type="text" name="recipient_lname" placeholder="Last name" className="text-input" onChange={this.props.handleInputChange} />
                            </div>
                        </div>
                        <div className="full input-row">
                            <input type="text" name="recipient_address_1" placeholder="Address line 1" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <div className="full input-row">
                            <input type="text" name="recipient_address_2" placeholder="Address line 2" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <div className="full input-row">
                            <input type="text" name="recipient_town" placeholder="Town/City" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <div className="full input-row">
                            <input type="text" name="recipient_county" placeholder="County/State" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <div className="full input-row">
                            <input type="text" name="recipient_postcode" placeholder="Postcode/ZIP" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <div className="full input-row">
                            <input type="text" name="recipient_country" placeholder="Country" className="text-input" onChange={this.props.handleInputChange} />
                        </div>
                        <div className="button-wrap">
                            <span className="button card-button" onClick={() => { this.submit() }}>Proceed</span>
                        </div>
                    </div>
                </div> 
            : null
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleMessageChange: (evt) => {
            dispatch(updateMessage(evt.target.value))
        },
        handleInputChange: (evt) => {
            let target = evt.target
            let value = target.type === 'checkbox' ? target.checked : target.value
            let name = target.name

            console.log(value);

            dispatch(updateFormInput(name, value))
        }
    }
}

const mapStateToProps = state => {
    return {
        message: state.message,
        fileURL: state.file.fileURL
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)
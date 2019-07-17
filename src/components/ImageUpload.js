import React from 'react'
import { connect } from 'react-redux'
import { makeFileRequest } from '../actions/upload'

class ImageUpload extends React.Component {
    fileUploaded (files) {
        let file = files[0]
        let { dispatch } = this.props
        dispatch(makeFileRequest(file))
    }

    render () {
        return (
            <div>
                <label className="file-label" style={this.props.fileURL ? { backgroundImage: `url(${this.props.fileURL})` } : null}>
                    {!this.props.fileURL && 
                        <p>Click here to upload a file</p>                    
                    }
                    <input type="file" name="image" className="file-actual" onChange={(evt) => { this.fileUploaded(evt.target.files) }} />
                </label>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fileURL: state.file.fileURL
    }
}

export default connect(
    mapStateToProps
)(ImageUpload)
import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            zip: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
    return (
        <form onSubmit={() => this.props.changeZipCode(this.state.zip)}>
            <p>Zip Code:</p>
            <input
                className='zip-code-entry'
                type='text'
                data-cy='zip-code-entry'
                value={this.state.zip}
                name='zip'
                placeholder='Enter Zip Code'
                min='5'
                max='5'
                onChange={event => this.handleChange(event)}
                required
            />
            <input
                type='submit'
                value='GO!'
                data-cy='go-button'
            />
        </form>
    )
}
}
export default Form;
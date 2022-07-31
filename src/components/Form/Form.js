import React, { Component } from 'react';
import './Form.css';

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
            <form className="my-form" onSubmit={(event) => this.props.changeZipCode(this.state.zip, event)}>
                <p className="welcome">WELCOME TO TREEZY!</p>
                <p>Enter your CO zip code to view tree species best suited for your area.</p>
                    <input
                        className='zip-code-entry'
                        type='text'
                        data-cy='zip-code-entry'
                        value={this.state.zip}
                        name='zip'
                        placeholder='Enter 5-Digit CO Zip Code'
                        pattern='[0-9]{5}'
                        onChange={event => this.handleChange(event)}
                        required
                    />
                    <br></br>
                    <input
                        className="btn"
                        type='submit'
                        value='GO!'
                        data-cy='go-button'
                    />
            </form>
        )
    }
}

export default Form;
import React, { Component } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';


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
        <form onSubmit={(event) => this.props.changeZipCode(this.state.zip, event)}>
            <p className="zip">Zip Code:</p>
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
            {/* <Link to='/result'> */}
            <br></br>
            <input
                className="btn"
                type='submit'
                value='GO!'
                data-cy='go-button'
            />
            {/* </Link> */}
        </form>
    )
}
}
export default Form;
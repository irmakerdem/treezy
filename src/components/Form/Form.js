import React, { Component } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props)
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
            <p>Zip Code:</p>
            <input
                className='zip-code-entry'
                type='text'
                data-cy='zip-code-entry'
                value={this.state.zip}
                name='zip'
                placeholder='Enter 5-Digit Zip Code'
                pattern='[0-9]{5}'
                onChange={event => this.handleChange(event)}
                required
            />
            <Link to={{
                pathname: '/result',
                search: `?code=${this.state.zip}`,
                state: {
                    tree: this.props.selectedTree, 
                    zip: this.state.zip
                }
            }}>
            <input
                type='submit'
                value='GO!'
                data-cy='go-button'
            />
            </Link>
        </form>
    )
}
}
export default Form;
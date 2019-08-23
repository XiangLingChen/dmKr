import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>SIGN IN</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     name='email' 
                     type='email' 
                     value={this.state.email} 
                     label='email'
                     handleChange={this.handleChange} 
                     required
                     />
                    

                    <FormInput 
                     name='password' 
                     type='password' 
                     value={this.state.password}
                     label='password'
                     handleChange={this.handleChange}
                     required
                     />
                    

                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;
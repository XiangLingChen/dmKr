import React from 'react';
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
                    <input 
                     name='email' 
                     type='email' 
                     value={this.state.email} 
                     onChange={this.handleChange} 
                     required
                     />
                    <label>Email</label>
                    
                    <input 
                     name='password' 
                     type='password' 
                     value={this.state.password}
                     onChange={this.handleChange}
                     required
                     />
                    <label>Password</label>

                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;
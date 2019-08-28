import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {Link} from 'react-router-dom';
import {auth, signInWithGoogle} from '../../components/firebase/firebase.utils';
import './sign-in.style.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error);
        }
        
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

                     <div className='goToSignUp'>
                        <p className='no-account'>Don't have an account?</p>
                        <Link className='link-to-sign-up' to='/signup'>Register Now.</Link>
                     </div>
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;
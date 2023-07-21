import logo from '../logo.png';
import pic from '../camppic.jpg';
import "./signup.css"



function SignUp() {
    return (
        
        <div className='signup'>
            <a href = '/'>
                    <img src={logo} alt = "logo" className='logo2'></img>
                </a>
            <h1>Let Your Adventures Begin.</h1>
            <form>

                <div className='field'>
                    <input type='text' id='username' placeholder='Username'></input>
                </div>

                <br />

                <div className='field'>
                    <input type='text' id='email' placeholder='Email'></input>
                </div>

                <br />

                <div className='field'>
                    <input type='text' id='cpass' placeholder='Create Password'></input>
                </div>

                <br />

                <div className='field'>
                    <input type='text' id='rpass' placeholder='Re-enter Password'></input>
                </div>
                
                <br />
                <br />

                <div className='field'>
                    <input type="checkbox" id = "checkbox" className='checkbox'/>
                    <label className='check-one'> 
                        I want to keep updated with awesome stories, moments, and changes sent right to the inbox
                    </label>
                </div>
                

                <button className='btn'>New Beginnings</button>

            </form>
        </div>
        
    );
}

export default SignUp;
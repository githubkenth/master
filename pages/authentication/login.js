import { useRef, useState } from "react";
import NavigationPublic from "../../components/navigation_public";
import { postData } from '../../assets/js/utils';
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginPage() {
    const captchaKey = '6LctADUpAAAAAOrgJ8EwATcusc8MFJ9RXNoIapWh';

    const [captchaResponse, setCaptchaResponse] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const onChange = async () => {
        setCaptchaResponse(true);
    }

    const login = async (event) => {
        event.preventDefault();

        if(!captchaResponse) {
            alert('Captcha not completed');
            return false;
        }

        let authenticate = await postData('/api/users/authenticate', 'POST', {
            email : email,
            password : password
        });

        if(authenticate.user == false) {
            alert(authenticate.message);
        } else {
            localStorage.setItem('userAuth', JSON.stringify(authenticate.user));
            window.location.href = '/dashboard/admin';
        }
        
    }
    return(
        <>
            <NavigationPublic></NavigationPublic>
            <main className="container" style={{
                marginTop:75
            }}>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Login Page</h4>
                        </div>

                        <div className="card-body">
                            <form method="post" onSubmit={login}>
                                <div className='form-group mb-3'>
                                    <label htmlFor=''>Email</label>
                                    <input id='email' 
                                    placeholder='Email' 
                                    className='form-control'
                                    onChange={(event)=>{
                                        setEmail(event.target.value)
                                    }}></input>
                                </div>

                                <div className='form-group mb-3'>
                                    <label htmlFor=''>Password</label>
                                    <input type='password' id='password' 
                                    placeholder='Password' 
                                    className='form-control'
                                    onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}></input>
                                </div>

                                
                                
                                <div className="mt-3 mb-3" style={{
                                    textAlign:'center'
                                }}>
                                    <ReCAPTCHA sitekey={captchaKey}
                                    onChange={onChange}></ReCAPTCHA>
                                </div>

                                <button id='submit' className='btn btn-primary'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
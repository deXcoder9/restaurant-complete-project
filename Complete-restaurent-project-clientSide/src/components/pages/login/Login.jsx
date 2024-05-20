import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

  const {signIn} = useContext(AuthContext);

    const [disabled, setDisabled ] = useState(true)

    const captchaRef = useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    } , [])

const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    
    signIn(email, password)
    .then(userCredentials => {
      console.log(userCredentials.user)
    })
}

const handleCapchaValidate = () =>{
    const user_captcha_value = captchaRef.current.value
    // console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value)) {
        setDisabled(false)
    }

    else {
        setDisabled(true)
    }
}

  return (
    <div>
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name="captcha" ref={captchaRef} placeholder="enter the captcha" className=" input input-bordered" required />
          <label className="label">
          </label>
          <button   onClick={handleCapchaValidate} className="btn btn-xs btn-outline">Validate</button>
        </div>
        <p>create a new account <Link to="/signup" className='text-blue-500 underline'>here</Link> </p>
        <div className="form-control mt-6">
          <input disabled={disabled} type="submit" className="btn btn-primary" value="submit" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
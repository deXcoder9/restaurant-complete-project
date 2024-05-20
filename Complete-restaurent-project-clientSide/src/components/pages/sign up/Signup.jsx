import { Link } from "react-router-dom";


const Signup = () => {

    const handleSignUp = () => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        
  
    }

  return (
    <div>
           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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

        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name="captcha" ref={captchaRef} placeholder="enter the captcha" className=" input input-bordered" required />
          <label className="label">
          </label>
          <button   onClick={handleCapchaValidate} className="btn btn-xs btn-outline">Validate</button>
        </div> */}

        <p>create a new account <Link to="/login" className='text-blue-500 underline'>here</Link> </p>
        <div className="form-control mt-6">
          <input  type="submit" className="btn btn-primary" value="submit" />
        </div>
      </form>
    </div>

    </div>
  )
}

export default Signup;
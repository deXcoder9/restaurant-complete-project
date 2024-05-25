import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../login/social login/SocialLogin";

const Signup = () => {

  const axiosPublic = useAxiosPublic()
  const {createUser,updateUserProfile } = useContext(AuthContext) 


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser)

      updateUserProfile(data.name, data.photourl)
      .then(()=>{
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post("/users", userInfo)
        .then(res =>{
          if(res.data.insertedId)
            console.log("user added to the dataBase successfully")
          })
        

      }).catch(error => console.log(error.message))
      Swal.fire({
        title: "user created successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    } )
  };

  // const handleSignUp = () => {
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;
  //     console.log(email, password);

  // }

  return (
    <div className="grid place-items-center pt-16">
    <Helmet>
      <title>Sign up | Bistro Boss</title>
    </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-400">Name field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="url"
              name="photourl"
              {...register("photourl", { required: true })}
              placeholder="photo url"
              className="input input-bordered"
            />
            {errors.photourl && (
              <span className="text-red-400">Name field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-400">Email field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true, minLength: 7  ,maxLength: 20 })}
             
              placeholder="password"
              className="input input-bordered"
            />
             {errors.password?.type === "minLength" && (
                <p className="text-red-400" >password must be 7 characters</p>
              )}
             {errors.password?.type === "maxLength" && (
                <p className="text-red-400" >password must less than 20 characters</p>
              )}
            <label className="label"></label>
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

          <p>
            create a new account{" "}
            <Link to="/login" className="text-blue-500 underline">
              here
            </Link>{" "}
          </p>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Sign Up" />
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <button className="btn"> <Link to="/">Go Home</Link> </button>
      </div>
    </div>
  );
};

export default Signup;

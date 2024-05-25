import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

const {googleSingIn} = useAuth()
const axiosPublic = useAxiosPublic()
const navigate = useNavigate()

const handleGoogleSignIn = () =>{
    googleSingIn()

    .then(result =>{
        // console.log(result)
        const userInfo ={
            email: result.user?.email,
            name: result.user?.displayName
        }
        axiosPublic.post('/users' , userInfo)
        .then((result) => {
            console.log( "axiosPublic", result.data)
            navigate('/')
        })
        
        // console.log(userInfo)
    })
}
    return (
        
        <div onClick={handleGoogleSignIn} className="btn  px-7 py-4 flex justify-center items-center space-x-3 my-4 " >
            <FcGoogle className="text-2xl" ></FcGoogle>
            <p>Google</p>
        </div>
    );
};

export default SocialLogin;
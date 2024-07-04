import React,{useEffect} from "react";
import { Button } from "@material-tailwind/react";
import {  useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    function handleLogin(){
        localStorage.setItem("LoggedIn","true")
        navigate("/")
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("LoggedIn");
        if (isLoggedIn === "true") {
          navigate("/");
        }
      }, [navigate]);
  return (
    <div className="bg-[url(assets/Login_Background_Image@2x.jpg)] bg-no-repeat bg-cover bg-center h-screen w-screen sm:grid grid-cols-2 text-white place-items-center backdrop-blur-md flex items-end sm:items-center p-4 sm:p-0">
         <div className="flex flex-col gap-3 sm:w-fit w-full">
          <span className="text-6xl italic">
            <p>Welcome to</p>
            <p className="text-3xl">
              <b>Rec</b>ii<b>p</b>ii<b>e</b>
            </p>
          </span>
          <p className="text-gray-300">Please sign in to continue</p>
          <button
            
            color="blue"
            variant="solid"
            size="lg"
            // startContent={<FaGoogle />}
            className="font-semibold bg-blue-500 p-2 rounded-2xl"
            onClick={handleLogin}
          >
            Continue with Google
          </button>
        </div>
    </div>
  );
};

export default Login;

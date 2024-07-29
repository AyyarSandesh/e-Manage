import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/admin";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) => {
        const userInfo={
          userName:data.userName,
          password:data.password,
        };
      await axios.post("http://localhost:4001/user/login",userInfo).then((res)=>{
        console.log(res.data);
        if(res.data){
          toast.success('Successfully created!');
          document.getElementById("my_modal_3").close();
          navigate(from,{replace:true});
          localStorage.setItem("Users",JSON.stringify(res.data.user));
          setTimeout(()=>{ 
            window.location.reload();
            
          },1000);
         
        }
      }).catch((err)=>{
        if(err.response){
          console.log(err);
          toast.error(err.response.data.message);
        }
      });
      };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-start">LOGIN </h3>
          <div>
            <label className="input input-bordered flex items-center gap-2 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input  type="text" className="grow" placeholder="Username" {...register("userName", { required: true })} />
              {errors.userName && <span className='text-sm text-red-500'>This field is required</span>}
            </label>
            <label className="input input-bordered flex items-center gap-2 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder='password'  {...register("password", { required: true })}/>
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </label>
            <div className='flex justify-center'>
            <input type="submit" value="Login" className='btn btn-wide' />
            {/* <button className="btn btn-wide">Login</button> */}
            </div>
           
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login
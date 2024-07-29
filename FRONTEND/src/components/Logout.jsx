import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Logout() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";

    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,user:null,
            });
            toast.success("Logout Successfully");
            navigate(from ,{replace:true});
            setTimeout(()=>{ 
                window.location.reload();
                localStorage.removeItem("Users");
              },1000);
        } catch (error) {
            toast.error("Error: "+error.message);
        }
    };

  return (
    <div>
        <button className='bg-red-500 text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
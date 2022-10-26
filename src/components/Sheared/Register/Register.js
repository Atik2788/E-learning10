import React from "react";
import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {

  const {signUp, user, setUser} = useContext(AuthContext)

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''

  })


  const handleSignUp = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email =form.email.value;
    const password =form.password.value;
    form.reset()


    signUp(userInfo.email, userInfo.password)
    .then(result =>{
      const user = result.user;

      console.log(user);
      setErrors({...errors, general: ""})
      toast.success('success')
      setUser(user)

      setErrors({...errors, general: ''});
      
    })

    .catch(error =>{
      setErrors({...errors, general: error.message})
    })
  }


  const handleEmailChange = (e) =>{
    const email = e.target.value;


    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setErrors({...errors, email: "Please provide a valid email address."})
      setUserInfo({...userInfo, email: e.target.value})
    }
    else{
      setErrors({...errors, email:""})
      setUserInfo({...userInfo, email: e.target.value})
    }
  }



  const handlePasswordChange =(e) =>{
    const password = e.target.value;
        
    const lengthError = password.length<6;
    const noSymbolError = !/[\!\@\#\$\%\*]{1,}/.test(password);
    const noCapitalError = !/[A-Z]{1,}/.test(password);


    if(lengthError){
      setErrors({...errors, password:'Must be at least 6 characters'})
      setUserInfo({...userInfo, password: e.target.value})
  }
  else if(noSymbolError){
      setErrors({...errors, password:'Pleaser provide a special characters'})
      setUserInfo({...userInfo, password: e.target.value})
  }
  else if(noCapitalError){
      setErrors({...errors, password:'Pleaser provide at least one capital letter'})
      setUserInfo({...userInfo, password: e.target.value})
  }
  else{
      setErrors({...errors, password:''})
      setUserInfo({...userInfo, password: e.target.value})
  }
  }




  return (
    <div>
      <Form onSubmit={handleSignUp} className="mt-20 w-9/12 mx-auto">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="pt-6 pb-3 text-lg font-semibold">
              Already Have an Account?
              <span>
                {" "}
                <Link to="/login" className="text-green-700">
                  Login
                </Link>
              </span>
            </p>
          </div>

          <div className="card flex-shrink-0 w-full shadow-2xl bg-cyan-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={userInfo.email}
                  onChange={handleEmailChange}
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
                 {errors.email && <p className="text-red-700"> {errors.email}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={userInfo.password}
                  onChange={handlePasswordChange}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && <p className="text-red-700"> {errors.password}</p>}
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <p className="text-red-700">{errors.general}</p>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Sign Up</button>
                
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;

import React from "react";
import { Form, Link } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const{providerLogin, user, signIn} = useContext(AuthContext)
    // console.log(user)


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }


    const handleSignIn = (event) =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;



    signIn(email, password)
    .then(result => {
      const user = result.user;
      form.reset();

    })
    .catch(error=>console.error(error))

    }



    


  return (
    <div>
      <Form onSubmit={handleSignIn} className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Are you new here? 
              <span> <Link to='/register' className="text-green-700">Register</Link></span>
            </p>
            <p className="flex justify-between">
                <Link onClick={handleGoogleLogIn}><ImGoogle/></Link>
                <Link><ImGoogle/></Link>
                <Link><ImGoogle/></Link>
            </p>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../probaider/AuthProbaider";

const Login = () => {
    const authData =useContext(authContext)
    console.log(authData);
    


    return (
        <div className="flex flex-col justify-center items-center min-h-[600px]">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <button className="btn btn-outline btn-sm">Google Login</button>
                        <button className="btn btn-outline btn-sm">Github Login</button>
                    </div>
                    <p className="ml-4 my-4">
                        New to this Website? please<Link className="ml-2 text-green-700" to={'/register'}>Reagister</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
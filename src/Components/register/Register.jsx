import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../probaider/AuthProbaider";

const Register = () => {

    const authData = useContext(authContext)
    const { handalRegister, user } = authData;

    console.log(authData);

    return (
        <div className="flex flex-col justify-center items-center my-3">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Enter your Photo url" className="input input-bordered" required />
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
                        <button type="submit" className="btn btn-primary">Register </button>
                    </div>
                    <p className="ml-4 my-4">
                        All Rady haven Acount? please<Link className="ml-2 text-green-700" to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
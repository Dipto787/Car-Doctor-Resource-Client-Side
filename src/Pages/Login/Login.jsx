import { useContext } from 'react';
import signInbanner from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    let { signIn } = useContext(AuthContext);
    let handleSignin = (e) => {
        e.preventDefault();
        let form = e.target; 
        let email = form.email.value;
        let password = form.password.value;
        console.log( email, password);
        signIn(email, password)
            .then(res => { 
                console.log(res.user)
            }).catch(error => console.error(error))
    }
    return (
        <div>
            <div className='flex'>
                <div className='md:w-1/2'>
                    <img src={signInbanner} alt="" />
                </div>
                <form onSubmit={handleSignin} className="card-body md:w-1/2">
                 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <h1 className="text-xl text-center font-semibold">Don't Have An Account Please? <Link  className='text-blue-600 underline' to={'/register'}>Register</Link></h1>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
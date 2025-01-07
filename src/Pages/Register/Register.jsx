import { useContext } from 'react';
import signup from '../../assets/images/login/login.svg'
import { auth, AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Register = () => {
    let {createUser}=useContext(AuthContext);
    let handleSignUp=(e)=>{
        e.preventDefault();
        let form=e.target;
        let name=form.name.value;
        let email=form.email.value;
        let password=form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(res=>{
            updateProfile(auth.currentUser,{
                displayName:name
            })
            console.log(res.user)
        }).catch(error=>console.error(error))
    }
    return (
         <div>
            <div className='flex'>
                <div className='md:w-1/2'>
                    <img src={signup} alt="" />
                </div>
            <form onSubmit={handleSignUp} className="card-body md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name..." className="input input-bordered" required />
                        </div>
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
                        <h1 className="text-xl text-center font-semibold"> Already Have An Account Please? <Link  className='text-blue-600 underline' to={'/login'}>Login</Link></h1>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
            </div>
         </div>
             
    );
};

export default Register;
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {
    let loadedData = useLoaderData();
    let { user } = useContext(AuthContext);
    console.log(loadedData)
    let { title,price,_id,img } = loadedData;
    let handleSubmit = (e) => {
        e.preventDefault();
        let form=e.target;
        let date=form.date.value;
        let price=form.price.value;
        let email=user?.email;
        let name=form.name.value; 
        let booking={
            service:title,
            img:img,
            customerName: name,
            date,
            email,
            price,
            service_id:_id
        }
        fetch('http://localhost:5000/checkout',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        }).then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
    }
    return (
        <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} action="">
                <div className="flex">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Name</span>

                        </div>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Name" className="file-input p-4 file-input-bordered w-full max-w-lg" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Date</span>

                        </div>
                        <input type="date" name="date" placeholder="" className="file-input p-4 file-input-bordered w-full max-w-lg" />

                    </label>
                </div>

                <div className="flex">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>

                        </div>
                        <input type="email" defaultValue={user?.email} className="file-input p-4 file-input-bordered w-full max-w-lg" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Due Amount</span>

                        </div>
                        <input type="text" name="price" defaultValue={'$' + loadedData.price} placeholder="" className="file-input p-4 file-input-bordered w-full max-w-lg" />

                    </label>
                </div>
                <div className="w-[95%]">
                    <button className="btn mt-4  w-full  ">ORDER CONFIRM</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
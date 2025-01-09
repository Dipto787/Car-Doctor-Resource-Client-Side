import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BookingsCard from "./BookingsCard";

const Bookings = () => {
    let {user}=useContext(AuthContext);
    let [bookingCard,setBookingCard]=useState([]);
    let url=`http://localhost:5000/checkout?email=${user?.email}`;
    axios.get(url)
    .then(data=>{
         setBookingCard(data.data);
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>service</th>
                            <th>name</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookingCard.map(booking=><BookingsCard booking={booking}></BookingsCard>)
                       }
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default Bookings;
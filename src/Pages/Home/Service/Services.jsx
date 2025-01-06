import axios from "axios";
import { useState } from "react";


const Services = () => {
    let [serviceData, setServiceData] = useState([]);
    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServiceData(data);
        })
    return (
        <div className="mt-12">
            <h1>Service</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
           {
                serviceData.map(service => (
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={service.img}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center ">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description.slice(0,80)}.....</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Book</button>
                            </div>
                        </div>
                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default Services;
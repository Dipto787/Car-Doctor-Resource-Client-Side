import { Link } from "react-router-dom";

const BookingsCard = ({ booking }) => {
    let { img, service, customerName, price, service_id,_id } = booking;
    let handleDelete = _id => {
        fetch(`http://localhost:5000/checkout/${_id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}

            </td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                <button className="btn btn-ghost btn-xs">Confirm Order</button>
            </th>
        </tr>
    );
};

export default BookingsCard;
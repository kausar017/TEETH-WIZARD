import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceCard }) => {
    // console.log(serviceCard);
    const { treatment_name, image, treatment_description, cost, id} = serviceCard;
    return (

        <div className="card border-2">
            <figure>
                <img
                    className='min-h-[250px] p-2 rounded-xl w-full object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{treatment_name}</h2>
                <p>{treatment_description}</p>
                <p>cost: {cost}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detals/${id}`} className="badge badge-outline py-3 badge-primary">Checkout More</Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;
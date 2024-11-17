import { useLoaderData } from "react-router-dom";
import Modal from "../modal/modal";

const Ditals = () => {

    const singleData = useLoaderData()
    // console.log(singleData);
    const { treatment_name, treatment_description, image, cost } = singleData;
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <div className="card image-full ">
                <figure className="">
                    <img
                        src={image}
                        alt={image} />
                </figure>
                <div className="z-10 text-white flex flex-col justify-center items-center">
                    <h2 className="text-4xl font-bold">{treatment_name}</h2>
                    <p>{treatment_description}</p>
                    <p className="text-4xl font-semibold">{cost}</p>
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-outline btn-success text-lg">Book Appointment</button>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Ditals;
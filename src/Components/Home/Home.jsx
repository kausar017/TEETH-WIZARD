import { useLoaderData } from "react-router-dom";
import Bannar from "../pagase/Bannar/Bannar";
import ServiceCard from "../pagase/serviceCard/ServiceCard";
import Feedback from "../pagase/feedback/Feedback";


const Home = () => {

    const service = useLoaderData();
    // console.log(service);
    
    const { servicesData, feedbackData } = service;




    return (
        <div>
            {/* Bannar */}
            <Bannar></Bannar>
            {/* service */}
            <p className="container mx-auto font-semibold text-xl">Services:</p>
            <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-3 p-3 my-5">
            
                {
                    servicesData.map(serviceCard => <ServiceCard serviceCard={serviceCard}></ServiceCard>)
                }
            </div>

            <Feedback feedbackData={feedbackData}></Feedback>

        </div>
    );
};

export default Home;
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";
import About from "../pagase/about/About";
import Treatments from "../pagase/Treatments/Treatments";
import Profile from "../pagase/Profile/Profile";
import MyAppointments from "../pagase/MyAppointments/MyAppointments";
import Ditals from "../pagase/ditals/Ditals";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch("/service.json");
                    const servicesData = await servicesRes.json();

                    const feedbackRes = await fetch("/happyClients.json");
                    const feedbackData = await feedbackRes.json();

                    return { servicesData, feedbackData }
                }
            },
            {
                path: '/treatments',
                element: <Treatments></Treatments>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/myappointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/detals/:id',
                element: <Ditals></Ditals>,
                loader: async ({ params }) => {
                    const res = await fetch("/service.json");
                    const data = await res.json();
                    const singleData = data.find(d => d.id == params.id)
                    // console.log(singleData);
                    return singleData;

                }
            }
        ]
    },
]);

export default Routes;
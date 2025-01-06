import Hero from "../Hero/Hero";
import Banner from "./Banner/Banner";
import Services from "./Service/Services";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <Services></Services>
        </div>
    );
};

export default Home;
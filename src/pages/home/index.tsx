import Banner from "../../components/home/Banner";
import Trust from "../../components/home/Trust"
import Curate from "../../components/home/Curate"
import Social from "../../components/home/Social"
import Proposition from "../../components/home/Proposition";
import Adopter from "../../components/home/Adopter";
import Work from "../../components/home/Work";
import Ready from "../../components/home/Ready";

const Home = () => {
    return(
        <div>
            <Banner/>
            <Trust/>
            <Curate/>
            <Social/>
            <Proposition/>
            <Adopter/>
            <Work/>
            <Ready/>            
        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill Bridge || Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;

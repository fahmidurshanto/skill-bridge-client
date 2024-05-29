import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import CategoryTab from "../../components/CategoryTab/CategoryTab";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill Bridge || Home</title>
      </Helmet>
      <Banner></Banner>
      <CategoryTab></CategoryTab>
    </div>
  );
};

export default Home;

import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import CategoryTab from "../../components/CategoryTab/CategoryTab";
import Watch from "../../components/Watch/Watch";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill Bridge || Home</title>
      </Helmet>
      <Banner></Banner>
      <Watch></Watch>
      <CategoryTab></CategoryTab>
    </div>
  );
};

export default Home;

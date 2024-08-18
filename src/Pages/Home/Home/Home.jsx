import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomendation from "../ChefRecomendation/ChefRecomendation";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionHeading
        heading={"Order Now"}
        subHeading={"From 8am to 11pm"}
      ></SectionHeading>
      <Category />
      <SectionHeading
        heading={"About Us"}
        subHeading={"See Details"}
      ></SectionHeading>
      <AboutUs />
      <SectionHeading
        heading={"From Our Menu"}
        subHeading={"Order Now"}
      ></SectionHeading>
      <PopularMenu />
      <SectionHeading
        heading={"Chef's Recomendation"}
        subHeading={"Should Try"}
      ></SectionHeading>
      <ChefRecomendation />
    </div>
  );
};

export default Home;

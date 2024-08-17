import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading
        heading={"Order Now"}
        subHeading={"From 8am to 11pm"}
      ></SectionHeading>
      <Category></Category>
      <SectionHeading
        heading={"About Us"}
        subHeading={"See Details"}
      ></SectionHeading>
      <AboutUs></AboutUs>
      <SectionHeading heading={"From Our Menu"} subHeading={"Order Now"}></SectionHeading>
      <PopularMenu></PopularMenu>
      <SectionHeading heading={"Chef's Recomendation"} subHeading={"Should Try"}></SectionHeading>
    </div>
  );
};

export default Home;

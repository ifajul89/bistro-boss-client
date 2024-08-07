import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

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
    </div>
  );
};

export default Home;

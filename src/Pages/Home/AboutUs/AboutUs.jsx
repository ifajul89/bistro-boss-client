import AboutUsImg from "../../../assets/home/chef-service.jpg";

const AboutUs = () => {
  return (
    <div
      className="w-[1000px] flex justify-center items-center m-auto py-16"
      style={{
        backgroundImage: `url(${AboutUsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-[700px] text-center p-8">
        <h3 className="text-2xl font-bold mb-4">Bistro Bliss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus aliquam minima voluptatem laboriosam maiores voluptates quam
          error nisi, molestiae eius voluptas, eos quidem. Fuga dolores id
          distinctio inventore exercitationem!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

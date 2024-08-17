const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex space-x-3">
      <img
        className="w-28"
        style={{ borderRadius: "30px 300px 300px 300px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600 font-extralight text-sm">{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;

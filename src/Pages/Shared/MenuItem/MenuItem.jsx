const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex space-x-5">
      <img className="w-28" src={image} alt="" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600 font-extralight">{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;

const MenuCard = ({ foodImage, foodName, foodRecipe }) => {
  return (
    <div className="text-center bg-gray-100 rounded-xl">
      <img className="rounded-t-xl" src={foodImage} alt="" />
      <div className="space-y-2 my-3 mx-6">
        <h4 className="text-2xl font-semibold">{foodName}</h4>
        <p className="text-sm">{foodRecipe}</p>
        <button className="btn btn-sm btn-outline border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:border-yellow-500">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;

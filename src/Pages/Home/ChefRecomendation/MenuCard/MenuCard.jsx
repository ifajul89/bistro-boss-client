const MenuCard = ({foodImage, foodName, foodRecipie,  }) => {
  return (
    <div>
      <img src={foodImage} alt="" />
      <h4>{foodName}</h4>
      <p>{foodRecipie}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default MenuCard;
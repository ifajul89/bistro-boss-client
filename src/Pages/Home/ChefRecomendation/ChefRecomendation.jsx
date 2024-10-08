import { useEffect, useState } from "react";
import MenuCard from "./MenuCard/MenuCard";

const ChefRecomendation = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const firstThreeData = data.slice(0, 3);
        setMenu(firstThreeData);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 mx-40">
      {menu.map((item) => (
        <MenuCard
          key={item._id}
          foodImage={item.image}
          foodName={item.name}
          foodRecipe={item.recipe}
        ></MenuCard>
      ))}
    </div>
  );
};

export default ChefRecomendation;

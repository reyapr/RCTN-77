import { useParams } from "react-router-dom";
import items from "../../../item";

const Item = () => {
  const { itemId } = useParams();

  const item = items.find((item) => {
    return item.id == itemId;
  });

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Power: {item.power}</p>
    </div>
  );
};

export default Item;

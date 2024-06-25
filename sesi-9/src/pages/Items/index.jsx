import { Outlet, useNavigate } from "react-router-dom";
import items from "../../item";

const Items = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h1>Items</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Action</th>
        </tr>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleClick(item.id)}>
                  Show Details
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Outlet />
    </div>
  );
};

export default Items;

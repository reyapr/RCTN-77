import { useParams } from "react-router-dom";

const Member = () => {
  const params = useParams();
  return (
    <div>
      <p>This is {params.name}</p>
    </div>
  );
};

export default Member;

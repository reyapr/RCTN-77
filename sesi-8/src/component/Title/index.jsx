/* eslint-disable react/prop-types */
import style from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = (props) => {
  return <h1 className={style.title}>{props.title}</h1>;
};

export default Title;

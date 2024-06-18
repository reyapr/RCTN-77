import { useEffect, useState } from "react";

const Counter3 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [date, setDate] = useState(new Date());
  let timer = null;

  const unmount = () => {
    clearInterval(timer);
  };

  const didMount = () => {
    timer = setInterval(() => {
      console.log(`interval berjalan ${date.toISOString()}`);
      setDate(new Date());
    }, 1000);
    return unmount;
  };

  useEffect(didMount, []);

  useEffect(() => {
    // console.log("did update counter 3");
  }, [count]);

  useEffect(() => {
    // console.log("did update counter 3");
  }, [count2]);

  return (
    <div>
      <h1>Counter 3</h1>
      <p>{date.toISOString()}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <br />
      <p>{count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </div>
  );
};

export default Counter3;

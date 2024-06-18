import { Component } from "react";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import ErrorBoundary from "./components/ErrorBoundary";
import Counter3 from "./components/Counter3";

class App extends Component {
  constructor() {
    console.log("ini ada di dalam constructor");
    super();
    this.state = {
      count1: 0,
      count2: 0,
      date: new Date(),
      todos: [],
      showCount2: true,
      showCount3: true,
    };
  }

  componentDidMount() {
    // simpan informasi di browser
    localStorage.setItem("user", JSON.stringify({ name: "John", age: 20 }));
    // console.log("ini ada di dalam componentDidMount");
    // this.timerId = setInterval(() => {
    //   this.setState({
    //     date: new Date(),
    //   });
    // }, 1000);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ todos: data.slice(0, 20) });
      });
  }

  componentDidUpdate() {
    // console.log("ini ada di dalam componentDidUpdate");
  }

  componentWillUnmount() {
    localStorage.removeItem("user");
    // alert("ini ada di dalam componentWillUnmount");
  }

  setCounter1 = (count) => {
    // console.log("ini ada di dalam setCounter1");
    this.setState({ count1: count });
  };

  setCounter2 = (count) => {
    this.setState({ count2: count });
  };

  render() {
    console.log(this.state.todos, "todos");
    console.log(this.state.show, "this.state.show");
    // console.log("ini ada di dalam render");
    return (
      <ErrorBoundary>
        <h1>Learn Life Cycle</h1>
        <h2>Todo</h2>
        <div>
          {this.state.todos.length > 0 ? (
            <div>
              {this.state.todos.map((todo) => (
                <div key={todo.id}>
                  <b>{todo.title}</b>{" "}
                  {todo.completed ? "Completed" : "Not Completed"}
                </div>
              ))}
            </div>
          ) : (
            <div>...Loading</div>
          )}
        </div>
        <p>{this.state.date.toISOString()}</p>
        <Counter1 count={this.state.count1} setCounter1={this.setCounter1} />
        {this.state.showCount2 && (
          <Counter2 count={this.state.count2} setCounter2={this.setCounter2} />
        )}
        <br />

        <button
          onClick={() => this.setState({ showCount2: !this.state.showCount2 })}
        >
          {this.state.showCount2 ? "Hide" : "Show Counter 2"}{" "}
        </button>
        <br />
        {this.state.showCount3 && <Counter3 />}
        <br />
        <button
          onClick={() => this.setState({ showCount3: !this.state.showCount3 })}
        >
          {this.state.showCount3 ? "Hide" : "Show Counter 3"}
        </button>
      </ErrorBoundary>
    );
  }
}

// const App() {
//   const [counter, setCounter] = useState(0)

//   return (
//     <div>1123231</div>
//   )
// }

export default App;

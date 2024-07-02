import Counter from "./redux/components/Counter";
import LoginForm from "./redux/components/LoginForm";
import UserList from "./redux/components/UserList";

function App() {
  return (
    <>
      <LoginForm />
      <br />
      <Counter />
      <br />
      <UserList />
    </>
  );
}

export default App;

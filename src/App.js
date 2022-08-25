import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import User from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {auth && <User />}
      {!auth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;

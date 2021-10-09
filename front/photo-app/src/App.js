import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { About } from "./pages/About";
import { Users } from "./pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">投稿一覧</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <PhotoList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

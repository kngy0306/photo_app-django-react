import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { PhotoDetail } from "./pages/PhotoDetail";
import { PhotoCreate } from "./pages/PhotoCreate";

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
              <Link to="/create">写真を投稿する</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <PhotoList />
          </Route>
          <Route exact path="/photo/:id">
            <PhotoDetail />
          </Route>
          <Route exact path="/create">
            <PhotoCreate />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

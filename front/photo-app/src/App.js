import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { PhotoDetail } from "./pages/PhotoDetail";
import { PhotoCategory } from "./pages/PhotoCategory";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/photo">投稿一覧</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/photo/:category">
            <PhotoCategory />
          </Route>
          <Route path="/photo/:id">
            <PhotoDetail />
          </Route>
          <Route path="/photo">
            <PhotoList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

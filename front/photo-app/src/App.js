import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { PhotoDetail } from "./pages/PhotoDetail";
import { PhotoCreate } from "./pages/PhotoCreate";
import * as React from "react";
import { Box, Container, Button, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const App = () => {
  return (
    <div>
      <Container fixed sx={{ my: 3 }}>
        <Box style={{color: "gray"}}>
          <h1>React-Django-Photo</h1>
        </Box>
        <BrowserRouter>
          <nav>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    variant="contained"
                    {...bindTrigger(popupState)}
                    color="success"
                  >
                    Menu
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "green" }}
                      >
                        投稿一覧
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/create"
                        style={{ textDecoration: "none", color: "green" }}
                      >
                        写真を投稿する
                      </Link>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
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
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;

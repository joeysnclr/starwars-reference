import React from "react";
import "../css/App.css";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Category from "./Category";
import SearchResults from "./SearchResults";
import ItemPage from "./ItemPage";
import Media from "./Media";

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/category/:category" component={Category} />
                <Route exact path="/search/:query" component={SearchResults} />
                <Route exact path="/item/:id" component={ItemPage} />
                <Route exact path="/media/:id" component={Media} />
            </Switch>
        </div>
    );
}

export default App;

import React from 'react';
import { withRouter } from 'react-router-dom'
// import '../css/Nav.css';

function Nav(props) {
    const categories = [
        "Characters",
        "Creatures",
        "Droids",
        "Locations",
        "Organizations",
        "Species",
        "Vehicles",
        "Weapons+Tech",
        "More"
    ];
    const search = function (e) {
        e.preventDefault();
        const query = document.querySelector("#search-input").value;
        const searchURL = `/search/${query}`
        props.history.push(searchURL)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Star Wars Reference</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            { categories.map(function(category) {
                                const categoryURL = `/category/${category}`
                                return <a className="dropdown-item" href={categoryURL}>{category}</a>
                            }) }
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Media</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Action</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={search}>
                    <input id="search-input" className="form-control mr-sm-2" type="search" placeholder="Search the Galaxy..."></input>
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default withRouter(Nav);
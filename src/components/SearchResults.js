import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPreview from './ItemPreview'

// import '../css/Home.css';

function SearchResults() {
    const { query } = useParams()
    const [items, setItems] = React.useState([])

    React.useEffect(function () {
        fetch(`https://star-wars-databank-api.herokuapp.com/api/search/${query}`)
            .then(response => response.json())
            .then(data => setItems(data));
    })
    return (
        <div class="container">
            <h1>Search Results</h1>
            <div className="d-flex flex-wrap">
                {items.map(item => <ItemPreview data={item} />)}
            </div>
        </div>
    );
}

export default SearchResults;

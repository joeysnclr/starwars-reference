import React from "react";
import { useParams } from "react-router-dom";
import ItemPreview from "./ItemPreview";
import Loading from "./Loading";
import Pagination from "./Pagination";

// import '../css/Home.css';

function SearchResults() {
    const { query } = useParams();
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(
        function () {
            setLoading(true);
            fetch(
                `https://star-wars-databank-api.herokuapp.com/api/search/${query}`
            )
                .then((response) => response.json())
                .then((data) => {
                    setTimeout(() => {
                        setItems(data);
                        setLoading(false);
                    }, 50000);
                    console.log(data);
                });
        },
        [query]
    );
    return (
        <div class="container">
            <h1>Search Results</h1>
            <Loading loading={loading} />
            {loading ? (
                <></>
            ) : (
                <Pagination items={items} Component={ItemPreview} />
            )}
        </div>
    );
}

export default SearchResults;

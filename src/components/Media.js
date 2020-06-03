import React from "react";
import { useParams } from "react-router-dom";
import ItemPreview from "./ItemPreview";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function Media() {
    const { id } = useParams();
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(
        function () {
            setLoading(true);
            fetch(
                `https://star-wars-databank-api.herokuapp.com/api/appearances/${id}`
            )
                .then((response) => response.json())
                .then((data) => {
                    setTimeout(() => {
                        setItems(data);
                        setLoading(false);
                    }, 500);
                    console.log(data);
                });
        },
        [id]
    );

    return (
        <div className='container'>
            <h1>{id}</h1>
            <Loading loading={loading} />
            {loading ? (
                <></>
            ) : (
                <Pagination items={items} Component={ItemPreview} />
            )}
        </div>
    );
}

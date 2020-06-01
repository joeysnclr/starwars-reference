import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPreview from './ItemPreview'


// import '../css/Home.css';


function Category() {
    const {category} = useParams()
    const [items, setItems] = React.useState([])

    React.useEffect(function() {
        fetch(`https://star-wars-databank-api.herokuapp.com/api/category/${category}`)
            .then(response => response.json())
            .then(data => setItems(data));
    })

    return (
        <div className="container">
            <h1>{category}</h1>
            <div className="d-flex flex-wrap">
                {items.map(item => <ItemPreview data={item} />)}
            </div>
        </div>
    );
}

export default Category;

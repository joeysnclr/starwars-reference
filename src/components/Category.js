import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPreview from './ItemPreview'
import Loading from './Loading'
import Pagination from './Pagination'


// import '../css/Home.css';


function Category() {
    const {category} = useParams()
    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    React.useEffect(function() {
        setLoading(true)
        fetch(`https://star-wars-databank-api.herokuapp.com/api/category/${category}`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setItems(data)
                    setLoading(false)
                }, 500);
                console.log(data)
            });
    }, [category])



    return (
        <div className="container">
            <h1>{category}</h1>
            <Loading loading={loading} />
            {loading
                ? <></>
                : <Pagination items={items} Component={ItemPreview} />
            }
        </div>
    );
}

export default Category;

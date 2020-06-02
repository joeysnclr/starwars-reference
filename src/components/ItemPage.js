import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ItemPage.css';
import Loading from './Loading'


function ItemPage(props) {
    const { id } = useParams()
    const [item, setItem] = React.useState(undefined)
    const [loading, setLoading] = React.useState(true);


    React.useEffect(function () {
        fetch(`https://star-wars-databank-api.herokuapp.com/api/id/${id}`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setItem(data)
                    setLoading(false)
                }, 500);
            });
    })



    return (
        <div className="container item-page mt-5">
            <Loading loading={loading} />
            {!(loading) &&
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                </div>
            }
        </div>

    );
}

export default ItemPage;

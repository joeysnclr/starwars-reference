import React from 'react';
import '../css/ItemPreview.css';

function ItemPreview(props) {
    const data = props.data;
    const itemURL = `/item/${data.id}`
    const imageSRC = data.img + "?height=200"
    return (
        <div className="item-preview col-12 col-sm-6 col-md-3 ">
            <a href={itemURL} className="card bg-dark text-light">
                <img src={imageSRC} alt={data.title}></img>
                <h5 >{data.title}</h5>
            </a>
        </div>
    );
}

export default ItemPreview;

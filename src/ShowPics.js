import React from 'react';


const ShowPics = (props) => {


    const images = props.images.map(
        ({ id, urls, description}) =>
            <img key={id} src={urls.small} alt={description}/>
    );

    return (
        <div>{images}</div>
    );
}


export default ShowPics;
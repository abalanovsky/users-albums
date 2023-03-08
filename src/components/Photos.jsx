import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Photos() {
    const { albumId } = useParams()
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => response.json())
            .then((photos) => setPhotos(photos))
            .catch((error) => console.error(error))
    },[])
    console.log(photos)
    return (
        <div>
            <h2>Photos</h2>
            <div>{photos.map((photo) => <img src={photo.thumbnailUrl} alt={photo.title} /> )}</div>
        </div>
    );
}

export default Photos;

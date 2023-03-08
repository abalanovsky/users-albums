import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import  './Albums.css'

function Albums() {
    const { userId } = useParams()
    const [albums, setAlbums] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((albums) => setAlbums(albums))
            .catch((error) => console.error(error))
    },[])
    console.log(albums)
    return (
        <div>
            <h2>Albums</h2>
            <div className="main-albums-container">{albums.map((album) => <div key={album.id} className="album-container">
                <div>
                    <div className="description-text">Description</div>
                    {album.title}
                </div>
                <button onClick={() => navigate(`${album.id}/photos`)} className="open-album-button">Show photos</button>
            </div>)}</div>
        </div>
    );
}

export default Albums;

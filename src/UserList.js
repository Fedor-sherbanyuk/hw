import React, { useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAlbums = async (userId) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
            setAlbums(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPhotos = async (albumId) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
            setPhotos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <button onClick={fetchUsers}>Fetch Users</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => fetchAlbums(user.id)}>Album</button>
                        {albums.map((album) => (
                            album.userId === user.id && (
                                <div key={album.id}>
                                    {album.title}
                                    <button onClick={() => fetchPhotos(album.id)}>Photos</button>
                                    {photos.map((photo) => (
                                        photo.albumId === album.id && (
                                            <div key={photo.id}>
                                                <img src={photo.thumbnailUrl} alt={photo.title} />
                                            </div>
                                        )
                                    ))}
                                </div>
                            )
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

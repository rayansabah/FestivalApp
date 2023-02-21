import React, { useState } from 'react';

import data from '../jsonTemp/scene.json'
import Img from '../comp/ImgPopup'
import '../css/scene.css'
import Navbar from '../comp/NavBar';

import Popup from '../comp/Popuptext.js'
import Popuptext from '../comp/Popuptext.js';



export default function Scene() {
    const scen1 = data.Scenes.find((scene) => scene.name === "Scen 1");
    const scen2 = data.Scenes.find((scene) => scene.name === "Scen 2");
    const scen3 = data.Scenes.find((scene) => scene.name === "Scen 3");
    const [favorites, setFavorites] = useState([]);

    const handleAddFavorite = (artist, time) => {
        setFavorites((prevFavorites) => [
            ...prevFavorites,
            { artist: artist, time: time },
        ]);
    };

    const handleRemoveFavorite = (artist, time) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter(
                (favorite) => favorite.artist !== artist || favorite.time !== time
            )
        );
    };

    const isFavorite = (artist, time) => {
        return favorites.some(
            (favorite) => favorite.artist === artist && favorite.time === time
        );
    };


    return <div >
        <Navbar />
        <div>
            {data.SceneInfo.map(scene => (
                <div className='scene-square'>
                    <h1 className='scene-Header'>{scene.name} </h1>
                    <Popuptext src={<div>
                        <h2>Favorites</h2>
                        <ul>
                            {favorites.map((favorite, index) => (
                                <li key={index}>
                                    {favorite.artist} - {favorite.time}
                                </li>
                            ))}
                        </ul>
                    </div>} />
                    <p>
                        {scene.info.map(item => (
                            <p>{item}</p>
                        ))}
                    </p>
                </div>
            ))}
        </div>

        <div className="scene-square">
            <div className='scene-flex'>
                <h2>{scen1.name}</h2>
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bFnopqoRjdsoRQpSzPixsS2lLVMSsMbxo044VUPQ&s" />
            </div>

            

                {scen1.performances.map((performance) => (
                    <div className='text-artist'>
                        <li key={performance.artist}>

                            {performance.artist} - {performance.time}

                            {isFavorite(performance.artist, performance.time) ? (
                                <button
                                    onClick={() =>
                                        handleRemoveFavorite(performance.artist, performance.time)
                                    }
                                >
                                    Remove Favorite
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        handleAddFavorite(performance.artist, performance.time)
                                    }
                                >
                                    Favorite
                                </button>
                            )}
                        </li>
                    </div>
                ))}
            

        </div>

        <div className="scene-square">
            <div className='scene-flex'>
                <h2>{scen2.name}</h2>
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPha0tgqovvWrctey5XsWasNB9qNh88cCMLCTBFEnG9w&s" />
            </div>
            
                {scen2.performances.map((performance) => (
                    <div className='text-artist'>
                    <li key={performance.artist}>

                        {performance.artist} - {performance.time}

                        {isFavorite(performance.artist, performance.time) ? (
                            <button
                                onClick={() =>
                                    handleRemoveFavorite(performance.artist, performance.time)
                                }
                            >
                                Remove Favorite
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    handleAddFavorite(performance.artist, performance.time)
                                }
                            >
                                Add Favorite
                            </button>
                        )}
                    </li>
                    </div>
                ))}
            
        </div>

        <div className="scene-square">
            <div className='scene-flex'>
                <h2>{scen3.name}</h2>
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPha0tgqovvWrctey5XsWasNB9qNh88cCMLCTBFEnG9w&s" />
            </div>
            
                {scen3.performances.map((performance) => (
                    <div className='text-artist'>
                    <li key={performance.artist}>

                        {performance.artist} - {performance.time}

                        {isFavorite(performance.artist, performance.time) ? (
                            <button
                                onClick={() =>
                                    handleRemoveFavorite(performance.artist, performance.time)
                                }
                            >
                                Remove Favorite
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    handleAddFavorite(performance.artist, performance.time)
                                }
                            >
                                Add Favorite
                            </button>
                        )}
                    </li>
                    </div>
                ))}
            
        </div>

        {/* {data.Scenes.map((scene, index) => (
            <div key={index} className="square">

                <h1>{scene.name}</h1>
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bFnopqoRjdsoRQpSzPixsS2lLVMSsMbxo044VUPQ&s" />     
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPha0tgqovvWrctey5XsWasNB9qNh88cCMLCTBFEnG9w&s" />     
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5SzzotC33hGaDCVUvjEg16PLQpD3d5G1gMszL2rN&s" />     
                <ul>
                    {scene.performances.map((performance, index) => (
                        <li key={index}>
                            <p>{performance.artist}</p>
                            <p>{performance.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        ))} */}
    </div>
}
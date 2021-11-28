import React from 'react';
// import NameInput25_11 from './components/NameInput25_11';
// import Car from './components/Car/Car_25_11';
// import Movie from './components/Movie/Movie';
// import Products from './components/Products/Products';
// import Movies from './components/Movies/Movies';
// import VideoGame from './components/VideoGames/VideoGame';
import * as styles from "./components/VideoGames/VideoGame.module.css";
import PicturesGalery from './components/Pictures/PicturesGalery';




function App (){

return(<div className={styles.card}>
    {/* <Products/> */}
    {/* <Movies/> */}
    {/* <VideoGame/> */}
    <PicturesGalery/>
</div>


)
}








export default App;

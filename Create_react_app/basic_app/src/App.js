import logo from './logo.svg';
import './App.css';
import React from "react"
import Media from './components/Media.js';
import Employe from './components/Employe';
import Employess from './components/Employess';
import Employess2 from './components/Employess2';
import Q3Son from './components/Q3Son';
import Q4son from './components/Q4son';


class App extends React.Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        {/* <Employess/> */}
        {/* <Employess2/> */}
        {/* <Q3Son/> */}
        <Q4son/>
      </div>
    )
  }
}


//   render(){
//     return(
//       <div>
//         <Media/>
//         <Employe name="BRIDJE" 
//                photo="https://cdn.pixabay.com/photo/2021/10/05/14/32/ocean-6682870__340.jpg"/>
//                        <Employe name="CHEC" 
//                photo="https://cdn.pixabay.com/photo/2021/01/29/11/33/game-5960731__340.jpg"/>
//                        <Employe name="DOG" 
//                photo="https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668__340.jpg"/>
//         <h1>This is media components</h1>
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//         <p><h1>MOTI ATZVAH</h1>
//           MOTI ATZVAH
//         </p>

//     </div>
//   );
// }

export default App;

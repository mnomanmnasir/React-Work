  import logo from './logo.svg';

  // import Header from './components/Header';
  import './App.css';
  import React from 'react';

  //JSX MEAN (HTML OR JAVASCRIPT KO MILA KR LIKHTY HAIN)
  // function App() {
  //   return (
  //     <div className="App">
  //       <h1>  
  //         HELLO WORLD
  //       </h1>
  //     </div>
  //   );
  // }


  class App extends React.Component {
    render(){
    let firstName = "Noman Nasir";
    let lastName = "Nomi"
    let fullName = firstName + " " + lastName ; 
    let arr = [1, 2, 3, 4, 5]
    return(
        <div>
            {/* CURLEY BRACKETS HTML KY ANDR JS LIKHNY KRLIYE USE HOGA */}
        <h1> 
      { 
        `${firstName} ${lastName}`
      }
        </h1>
        <h1>
          {
            arr
          }
        </h1>
      
        </div>
      )
    }
  }

  class logo extends React.Component{
    render(){
      return(
        <div>
          <img src="" alt="" />
        </div>
      )
    }
  }

  export default App;

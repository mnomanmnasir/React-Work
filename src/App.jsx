// import logo from './logo.svg';


// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import './App.css'
// import {Header, Logo} from './components/Header'
// import Footer from './components/Footer'
// import { Email } from '@mui/icons-material';
// import AppRouter from './config/router' 



// //JSX MEAN (HTML OR JAVASCRIPT KO MILA KR LIKHTY HAIN)
// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>  
// //         HELLO WORLD
// //       </h1>
// //     </div>
// //   );
// // }




// // class App extends React.Component {
//  // learn to topic on state
//  // state sirf apni component pr milygi 
// //  constructor(){
// //   super()
// //     this.state = 
// //     {
// //       name: "Noman Nasir",
// //       email: "noman@gmail.com",
// //       value: ""
// //     }

//     // this.set_name = this.set_name.bind(this)

//   // }

//   // create a funtion on react.js


//   // arrow function parent ka this uthayega

//   // set_name = () =>
//   // {
//     //normal function bind hojata hai arrow function bind nhe hota 
//     // set_name(){
//     // console.log(this.state.name)

//     //update 
//     // this.setState({

//   //     name: this.state.value
//   //        })

//   // }

//   // get_name=() =>{
//   //   console.log(this.state.name)
//   // }

//   // handleChange(e){

//   //   this.setState({
//   //     [e.target.name] : e.target.value 
//   //   })
//   //   // console.log(e.target.name)  
//   //   // console.log(e.target.value)
//   // }

//   // get_props = (props) =>{

//   //   console.log(props)
//   // }
//   // render(){

//   // let firstName = "Noman Nasir";
//   // let lastName = "Nomi"
//   // let arr = [1, 2, 3, 4, 5]
//   // let todos = [
//   //   {
//   //     name : "Noman"
//   //   },

//   //   {
//   //     name1 : "Nasir" 
//   //   }
//   //   ];

//   // return(


//   //     <div>


// /* <input onChange={(e)=>console.log(e.target.value)} type="text" id='val' />     */
// /* <input name='Name' onChange={(e)=> this.handleChange(e)} type="text" />    

// <input name='email' onChange={(e)=>this.handleChange(e)} type="text" />    

//           {/* CURLEY BRACKETS HTML KY ANDR JS LIKHNY KRLIYE USE HOGA */
//       /* <h1> 
//     { 
//       `${firstName} ${lastName}`
//     }
//       </h1> */
//       /* <ul>
//         {
//           todos.map((item,index)=>{

//             return <li key={index}>
//               {todos.name}</li>
//           })


//         }
//       </ul> */


//     // <h2>My Name is:
//     //   {

//     //     this.state.name

//     //   }

//     // </h2>
//     // <h4>
//     //   {
// //         this.state.email
// //       }
// //     </h4>
// //         {/* <Logo /> */}
// //       <h1 style={{backgroundColor: "red", fontSize: "13px", marginTop: "50px"}}>
// //         <img src="" alt="" />
// //        Main Components

// //       </h1>
// //       <button type="button" className="btn btn-primary">Primary</button>
// //       <button onClick={this.set_name}>Set Name</button>
// //       <br/>

// //       <button onClick={this.get_name}>Get Name</button>

// //       <br/>
// //       <Footer />

// //       </div>
// //     )
// //   }
// // }


























































// ///////////// create a todo-app




// // class App extends React.Component{

// //   constructor(){
// //     super()

// //     this.state = {
// //       todos: ["ghous", "ahmed", "umair"],
// //       value: " "
// //     }

// //   }

// //   add_todo = () =>{

// //    this.state.todos.push(this.state.value)
// //    this.setState
// //    ({

// //     todos : this.state.todos,

// //     value: ''

// //    })
// //     }

// //     delete_todo =(i) =>{


// //       this.state.todos.splice(index, 1)
// //     }


// //   render(){

// //     let {todos, value} = this.state;
// //     return( 
// //       <div>

// //         <input value={value} placeholder="Enter value" onChange={(e)=>this.setState({value: e.target.value})}/>




// //          <button onClick={this.add_todo()}>Add Item</button>




// //          <ul>
// //          {
// //           todos.map((v, i)=>{
// //               return <li key={i}>{value}

// //               {/* <button onClick={()=>this.delete_todo(i)}>Delete</button> */}

// //               </li>
// //             }

// //             )
// //          }
// //          </ul>
// //       </div>
// //     )
// //   }
// // }











// // export default App;



















// class App extends React.Component{
//   render()
// {
//   return(

//     // <h1>Hello</h1>
//     <AppRouter/>

//   )
// }

// }




// export default App;




import React from 'react'
// import AppRouter from './config/router'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log("constructor")
  }

  static getDerivedStateFromProps(props, state){
    // console.log(state)
    console.log("getDerivedStateFromProps",state)
   //return krwana lazmi hai this static main return hoga update krwany ky liye
  //   return{
  //   count :4
  // }
  return null
  }

  shouldComponentUpdate(){
   if(this.state.count < 5){
    return true
   }else{
    return false ; 
  }

}
 
getSnapshotBeforeUpdate(preProps, preState){
console.log("getSnapshotBeforeUpdate",preState)
return 10
}
componentDidUpdate(preProps, preState,snapshot){
console.log(snapshot)
}
componentDidMount() {
    console.log("componentDidMount")
  }
  render() {
    // console.log('render..')
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
      </div>
      // <AppRouter />
    )
  }
}

export default App;
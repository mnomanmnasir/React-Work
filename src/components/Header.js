import React from 'react';
import LOGOIMAGE from "../image/img2.png"




class Logo extends React.Component{
    render(){
        return(
            <div>

              <h2>
                
                </h2>
                <img src={LOGOIMAGE} alt='' width="100"/>      

          </div>
        
        )
    }
}



class Header extends React.Component{

    render(){

      console.log("props ==>", this.props)



        return(
                // <Logo/> 
               
               <button onClick={()=>this.props.get_props("saylani")}>Send props</button> 
                /* {this.props.name} */
      

            
     

        )
                  }              }

export {
    Header,
    Logo
} 
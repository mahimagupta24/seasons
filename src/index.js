import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition((position)=>console.log(position),
//     (err)=>console.log(err))
//     return <div>Hi there</div>
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null,errorMessage:'' };

   
  //   }
  state={ lat: null,errorMessage:'' };


    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        position =>  this.setState({ lat: position.coords.latitude }),
        err =>this.setState({errorMessage:err.message})  
      );
    }
  render() {
    // return <div>
    // Latitude:{this.state.lat}
    // <br/>
    // Error:{this.state.errorMessage}
    // </div>;

   if(this.state.lat&&!this.state.errorMessage){
    return <SeasonDisplay lat={this.state.lat}/>

   }
   
   if(this.state.errorMessage&&!this.state.lat){
    return <div>Error:{this.state.errorMessage}
    </div>
   }
   return <div>Loading</div>

  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

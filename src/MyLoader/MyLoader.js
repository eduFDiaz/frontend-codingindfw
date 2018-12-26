import React, { Component } from "react";
import Loader from "react-loader-spinner";
 export default class MyLoader extends Component {
  //other logic
    render() {
     return(
      <Loader 
         type="Oval"
         color="#00BFFF"
         height="100"	
         width="100"
      />   
     );
    }
 }
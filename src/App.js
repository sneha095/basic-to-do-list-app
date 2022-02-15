import React from "react";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";
import {DataProvider} from "./components/DataProvider";
import ToDoPic from './Images/check_boxes.svg'

function App() {

  return (
    <DataProvider>
    <div className="App">
    <link href="/index.css" rel="stylesheet"/>
      <h1>To Do List</h1>
      <FormInput></FormInput>
      <List></List>
      
      <Footer></Footer>
      <div>
      <img className="hero-img" src={ToDoPic} alt=""/>
      </div>
    </div>
    </DataProvider>
  );
}

export default App;

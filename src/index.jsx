import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import CustomChatbot from "./components/chatBot";
import { BrowserRouter, Route } from "react-router-dom";



ReactDOM.render(

  <BrowserRouter>
    <Route exact path="/" component={CustomChatbot} />
  </BrowserRouter>,

  document.getElementById("root")
); //add new components and routes into main

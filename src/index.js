import React from 'react';
import ReactDOM from "react-dom/client";
window.React = React;
import App from "./components/app";
import "./styles/main.css";

const container = document.getElementById("mountNode");
ReactDOM.hydrateRoot(container, <App />);
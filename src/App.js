/*
 * Project Name: React Navbar
 * Author: Taylor Lee
 * Last modified: November 11th, 2022
 * Desc: You will create a fully responsive navbar on React using CSS grid and flexbox. Additionally, display
 *       breadcrumbs with the menu dropdown on mobile screen size.
 */


//import statements
import React from "react";
import Header from "./header/Header";
import "./styles.css";


//code to start the app
export default function App() {
  return (
    <div className="App">
      <Header />
      <h3 style={{ padding: "40px" }}>Welcome to my Navbar App!</h3>
    </div>
  );
}
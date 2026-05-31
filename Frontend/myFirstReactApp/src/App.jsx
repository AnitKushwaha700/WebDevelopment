import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />

      <div className="main">
        <h1 id="heading" className="bg-primary">My First React App</h1>

        <div id="card">
          <h1>Login</h1>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
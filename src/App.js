import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import React from "react";
import Index from "./pages";

function App() {
  return (
    <React.Fragment>
      <div>
        <Index />
      </div>
    </React.Fragment>
  );
}

export default App;

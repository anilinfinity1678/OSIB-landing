import Home from "./Home/Home";
import Offer from "./Offer";
import React from "react";
import Feature from "./Features/Features";
import Subscribe from "./Subscribe";
// import Product from "./Product";
import Review from "./Review";
import Footer from "./Footer";
function App() {
    return (
        <div className="App">
            <Home />
            <Offer />
            <Feature />
            {/* <Product /> */}
            <Review />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;

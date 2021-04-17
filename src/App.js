import React, {useState} from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/About";
import Trust from "./pages/About";
import BecomeGreat from "./pages/BecomeGreat";
import Footer from "./pages/Footer";

import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = number => {
        setCurrentPage(number);
    };

    return (
        <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage}
        >
            <Home handlePageChange={handlePageChange}/>
            <About/>
            <BecomeGreat/>
            <Design/>
            <Trust/>
            <Footer/>
        </ReactPageScroller>
    );
}

export default App;

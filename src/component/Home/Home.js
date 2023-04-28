import React from "react";
import Search from './Search';
import QuickSearch from './QuickSearch';
import Header from '../../Header';
const Home = () =>{
    return(
        <>
            <Header></Header>
            <Search></Search>
            <QuickSearch></QuickSearch>
        </>
    )
}
export default Home;
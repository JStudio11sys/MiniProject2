import React from "react";
import { useEffect, useState } from "react";
import NewsInfo from "../../NewsInfo";
import NewsInfo2 from "../../NewsInfo2";
import ApiService from "../../ApiService";
import SportsInfo from "../../SportsInfo";

const Headline3 = () => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getNewsList = () => {
        ApiService('/news-api/sportsNews', null, (response) => {
            console.log(response.articles);
            setList(response.articles);
        });

    }
    useEffect(() => {
        getNewsList();
    }, []);

    return (
        <>
        <div className="container row redbox">
            <h3 className="p-3">Sports Hub</h3>
            {list.map((articles) => <SportsInfo articles={articles} />)}
            
        </div>
        </>


    )
}

export default Headline3;
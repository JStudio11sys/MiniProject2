import React from "react";
import { useEffect, useState } from "react";

import NewsInfo from "../../NewsInfo";
import NewsInfo2 from "../../NewsInfo2";
import ApiService from "../../ApiService";

const Content2 = () => {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getNewsList = () => {
        ApiService('/news-api/phSubHeadBusiness', null, (response) => {
            console.log(response.articles);
            setList(response.articles);
        });

    }
    useEffect(() => {
        getNewsList();
    }, []);

    return (
        <>
         <div className="container">
            <h3>Business</h3>
            <div></div>
            {list.map((articles) => <NewsInfo articles={articles} />)}
        </div>
        </>
    )
}


export default Content2;
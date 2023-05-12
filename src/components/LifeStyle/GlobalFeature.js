import React from "react";
import { useEffect, useState } from "react";
import NewsInfo from "../../NewsInfo";
import NewsInfo2 from "../../NewsInfo2";
import ApiService from "../../ApiService";

const LifeStyleFeature = () => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getNewsList = () => {
        ApiService('/news-api/LifeStyleNews', null, (response) => {
            console.log(response.articles);
            setList(response.articles);
        });

    }
    useEffect(() => {
        getNewsList();
    }, []);


    return (
        <>
            <div className="container redbox">
                <h3>Life Style Today</h3>
                {list.map((articles) => <NewsInfo articles={articles} />)}
            </div>
        </>
    )
}

export default LifeStyleFeature;
import React from "react";
import { useEffect, useState } from "react";
import NewsInfo from "../../NewsInfo";
import NewsInfo2 from "../../NewsInfo2";
import SportsInfo from "../../SportsInfo";
import ApiService from "../../ApiService";

const LifeStyleOthers = () => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getNewsList = () => {
        ApiService('/news-api/LifeStyleNewsTravel', null, (response) => {
            console.log(response.articles);
            setList(response.articles);
        });

    }
    useEffect(() => {
        getNewsList();
    }, []);


    return (
        <>
            <div className="container  yellowbox">
                <h3>Travel</h3>
                <div className="row row-cols-auto">
                    {list.map((articles) => <SportsInfo articles={articles} />)}
                </div>

            </div>

        </>
    )
}

export default LifeStyleOthers;
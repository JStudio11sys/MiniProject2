import React from "react";
import { useEffect, useState } from "react";
import NewsInfo from "../../NewsInfo";
import NewsInfo2 from "../../NewsInfo2";
import ApiService from "../../ApiService";

const Headline2 = () => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getNewsList = () => {
        ApiService('/news-api/phHeadline', null, (response) => {
            console.log(response.data);
            setList(response.data);
        });

    }
    useEffect(() => {
        getNewsList();
    }, []);

    return (
        <>
            <div className="container yellowbox">
                <h3>Philippines Today</h3>
                {list.map((data) => <NewsInfo2 data={data} />)}
            </div>
        </>
    )
}

export default Headline2;
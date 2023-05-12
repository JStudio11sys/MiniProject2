import { useEffect, useState } from "react";
import NewsInfo from "./NewsInfo";
import ApiService from "./ApiService";


function NewsList() {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getNewsList = () => {
        ApiService('/news-api', null, (response) => {
            console.log(response.articles);
            setList(response.articles);
        });

        ApiService('/headline2', null, (response) => {
            console.log(response.articles);
            setList(response.articles);
        });

    }

    useEffect(() => {
        getNewsList();
    }, []);

    const [keyword, setKeyword] = useState('');
    const onKeywordChangeHandler = (e) => {
        setKeyword(e.target.value);
        ApiService('/news-api/author/' + e.target.value, null, (data) => {
            setList(data);
        });
    }

    const [newsDetails, setNewsDetails] = useState({});

    const onEditHandler = (data) => {
        ApiService('/news-api/' + data.id, null, (data) => {
            setNewsDetails(data);
        });
    }

    const onNewsSaveHandler = (formData) => {
        ApiService('/news-api/' + formData.id, formData, (data) => {
            getNewsList();
        }, formData.id === 0 ? "POST" : "PUT");
    }

    const onClickAddHandler = () => {
        setNewsDetails({ id: 0 });
    }

    const onDeleteHandler = (formData) => {
        setNewsDetails(formData);
        setConfirmOpen(true);
    }

    const [confirmOpen, setConfirmOpen] = useState(false);

    const doConfirmedDeleteHandler = () => {
        doCloseConfirmHandler();
        ApiService('/news-api/' + newsDetails.id, newsDetails, (data) => {
            console.log(data);
            getNewsList();
        }, "DELETE");
    }

    const doCloseConfirmHandler = () => {
        setConfirmOpen(false);
    }

    return (
        <>
            <div>
                {list.map((articles) => <NewsInfo articles={articles} />)}
            </div>
        </>
    )
}

export default NewsList;
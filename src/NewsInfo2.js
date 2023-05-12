import { useEffect, useState } from "react";


function NewsInfo2({ data, onEditHandler, onDeleteHandler }) {

    const { author, title, description, url, image, publishedAt, content } = data;

    console.log(image);
    let checkImage = { image };

    //const onClickEditHandler = () => {
    //   onEditHandler(data);
    //}

    //const onClickDeleteHandler = () => {
    //    onDeleteHandler(data);
    //}
    //formData.id === 0 ? "POST" : "PUT");

    return (
        <>
            <div className="p-1">
                <div className="card-columns">
                    <div className="card">
                        <img src={image} onError="this.onerror=null; this.src='favlogo.png';" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <footer className="blockquote-footer p-2">
                            <small className="text-muted">
                                {author} |
                                Published at: {publishedAt}
                            </small>
                        </footer>

                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsInfo2;
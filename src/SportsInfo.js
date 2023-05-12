function SportsInfo({ articles, onEditHandler, onDeleteHandler }) {

    const { author, title, description, url, urlToImage, publishedAt, content } = articles;

    console.log(author);

    //const onClickEditHandler = () => {
    //   onEditHandler(data);
    //}

    //const onClickDeleteHandler = () => {
    //    onDeleteHandler(data);
    //}                                                 <img className="card-img-top" src={urlToImage} alt="Card image cap" />

    return (
        <>
            <div className="p-2 col-sm-4">
                <div className="card-columns">
                    <div className="card text-center">
                        <img src={urlToImage} onError="this.onerror=null; this.src='./favlogo.png';" />
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

export default SportsInfo;
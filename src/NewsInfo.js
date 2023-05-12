
function NewsInfo({ articles, onEditHandler, onDeleteHandler }) {

    const { author, title, description, url, urlToImage, publishedAt, content } = articles;

    console.log(author);

    //const onClickEditHandler = () => {
    //   onEditHandler(data);
    //}

    //const onClickDeleteHandler = () => {
    //    onDeleteHandler(data);
    //}

    const imagePlaceholder = () => {
        let checkImage = {urlToImage};

        if(checkImage != 'null'){
            return(urlToImage);
        }
        else{
            return('./public/assets/favlogo.png');
        }
    }

    return (
        <>
            <div className="p-2 col">
                <div className="card-columns">
                    <div className="card">
                    <img src={urlToImage} onError="this.onerror=null; this.src='favlogo.png';" />
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

export default NewsInfo;
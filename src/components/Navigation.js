import { Link } from "react-router-dom";
import MainPage from "./MainPage";

function Navigation() {
    return (
        <>
            <div>
                <nav>
                    <div className="Navigation">
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/">NEWS</Link>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col col-pad">
                                <Link to="/world-news">GLOBAL</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/business-news">BUSINESS</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/opinion-news">OPINION</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/lifestyle-news">LIFE & STYLE</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/sports-news">SPORTS</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/entertainment-news">ENTERTAINMENT</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-pad">
                                <Link to="/tech-news">TECHNOLOGY</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navigation;
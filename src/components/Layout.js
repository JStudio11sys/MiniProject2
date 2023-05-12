import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import QuickInfo from "./QuickInfo";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

function Layout() {
    return (
        <>
            <div className='layout text-2xl'>
                <div className='Header1 centered'>
                    <div>
                        <Header1 />
                    </div>
                </div>
                <div className='Header2 centered'>
                    <div>
                        <Header2 />
                    </div>
                </div>
                <div className='Header3 centered'>
                    <div>
                        <Header3 />
                    </div>
                </div>
            </div>
            <section className='centered'>
                <div className='frontPageLayout text-2xl'>
                    <div className='Navigation centered'>
                        <Navigation />
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}

export default Layout;
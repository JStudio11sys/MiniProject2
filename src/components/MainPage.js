import React from 'react'
import Headline1 from './FrontPage/Headline1'
import Headline2 from './FrontPage/Headline2'
import Headline3 from './FrontPage/Headline3'
import Headline4 from './FrontPage/Headline4'
import Content1 from './FrontPage/Content1'
import Content2 from './FrontPage/Content2'
import Content3 from './FrontPage/Content3'
import Content4 from './FrontPage/Content4'
import Footer from './Footer'
import QuickInfo from './QuickInfo'

const MainPage = () => {
    return (
        <>
            <React.Fragment>
                <section className='centered'>
                    <div className='frontPageLayout text-2xl'>
                        <div className='QuickInfo centered'>
                            
                        </div>
                        <div className='Headline1 centered'>
                            <Headline1 />
                        </div>
                        <div className='Headline2 centered'>
                            <Headline2 />
                        </div>
                        <div className='Headline3 centered'>
                            <Headline3 />
                        </div>
                        <div className='content1 centered'>
                            <Content1 />
                        </div>
                        <div className='content2 centered'>
                            <Content2 />
                        </div>
                        <div className='content3 centered'>
                            <Content3 />
                        </div>
                        <div className='content4 centered'>
                            <Content4 />
                        </div>
                        <div className='Footer centered'>
                            <Footer />
                        </div>
                    </div>
                </section>
            </React.Fragment>

        </>
    )
}
export default MainPage
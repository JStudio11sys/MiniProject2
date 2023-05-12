import React from 'react'

import Footer from './Footer'
import GlobalContent1 from './Sports/GlobalContent1'
import GlobalFeature from './Sports/GlobalFeature'
import GlobalOthers from './Sports/GlobalOthers'
import WorldMainBody from './WorldMainBody'
function WorldNews() {
    return (
        <>
            <React.Fragment>
                <div className='container'>
                <section className='centered'>
                    <div className='globalPageLayout text-2xl'>
                        <div className='GlobalFeature centered'>
                            <GlobalFeature />
                        </div>
                        <div className='GlobalContent1 centered'>
                            <GlobalContent1 />
                        </div>
                        <div className='GlobalOthers centered'>
                            <GlobalOthers />
                        </div>
                        <div className='Footer centered'>
                            <Footer />
                        </div>
                    </div>
                </section>
                </div>
                
            </React.Fragment>

        </>
    )
}

export default WorldNews;
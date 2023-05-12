import React from 'react'

import Footer from './Footer'
import GlobalContent1 from './Business/GlobalContent1'
import GlobalFeature from './Business/GlobalFeature'
import GlobalOthers from './Business/GlobalOthers'
import WorldMainBody from './WorldMainBody'
function WorldNews() {
    return (
        <>
            <React.Fragment>
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
            </React.Fragment>

        </>
    )
}

export default WorldNews;
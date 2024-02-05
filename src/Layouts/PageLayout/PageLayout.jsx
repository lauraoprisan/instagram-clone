import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router'

const PageLayout = ({children}) => {
    const {pathname} = useLocation()

    return (
        <div className="outer-container">
            {/*sidebar on the left */}
            {pathname!== "/auth" && <Sidebar/>}
            {/* the rest of the content */}
            <section className="main-content">
                {children}
            </section>

        </div>
    )
}

export default PageLayout

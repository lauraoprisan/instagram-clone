import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import Navbar from '../../components/Navbar/navbar'
import Spinner from '../../components/Loading/Spinner'

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user, loading] = useAuthState(auth)
    const canRedenderSidebar = pathname!== "/auth" && user
    const canRenderNavbar = !user && !loading && pathname !== "/auth"

    if(!user && loading){
        return <PageLayoutSpiner/>
    }

    return (
        <div className={canRenderNavbar ? "flex-col outer-container" : "outer-container" }>
            {/*sidebar on the left */}
            {canRedenderSidebar && <Sidebar/>}
            {/**navbar */}
            {canRenderNavbar && <Navbar/>}
            {/* the rest of the content */}
            <section className="main-content">
                {children}
            </section>

        </div>
    )
}

export default PageLayout

const PageLayoutSpiner = () => {
    return (
        <div>
            <Spinner/>
        </div>
    )
}

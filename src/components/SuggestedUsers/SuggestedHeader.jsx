import { Link } from 'react-router-dom'
import useLogOut from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'
import Avatar from '../Avatar/Avatar'

const SuggestedHeader = () => {
    const {handleLogout, isLoggingOut} = useLogOut()
    const authUser = useAuthStore((state)=>state.user)
    console.log(authUser)

    if(!authUser) return null

    return (
        <div className="suggested-users-header">
            <div className="suggested-current-user-data flex">
                <Link to={`${authUser.username}`}>
                    <Avatar avatar="/images/profilepic.png" size="lg"/>
                </Link>
                <Link to={`${authUser.username}`}>
                    <span>{authUser.username}</span>
                </Link>
            </div>
            <button onClick={handleLogout}>
                Log out
            </button>
        </div>
    )
}

export default SuggestedHeader

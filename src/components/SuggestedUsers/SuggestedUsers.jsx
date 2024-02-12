
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import SuggestedUser from './SuggestedUser'
import SuggestedHeader from './SuggestedHeader'

const SuggestedUsers = () => {

  return (
    <>
        <SuggestedHeader/>
        <div className="suggested-users-subtitle">
            <span>Suggested for you</span>
            <button>See all</button>
        </div>
      <SuggestedUser name="username4" followers={1459} avatar="/images/img2.png"/>
      <SuggestedUser name="username5" followers={478} avatar="/images/img2.png" />
      <SuggestedUser name="username6" followers={1257} avatar="/images/img2.png"/>
      <span className="copyright"> © 2024 Build by <Link to="https://github.com/lauraoprisan/">Laura Oprisan</Link></span>
    </>

  )
}

export default SuggestedUsers

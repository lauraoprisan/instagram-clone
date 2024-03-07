
import SuggestedUser from './SuggestedUser'
import SuggestedHeader from './SuggestedHeader'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
  const {isLoading,suggestedUsers} = useGetSuggestedUsers()

  //optional render skeleton here
  if(isLoading) return null
  return (
    <>
        <SuggestedHeader/>
        {suggestedUsers.length !== 0 &&(
          <div className="suggested-users-subtitle">
              <span>Suggested for you</span>
              <button>See all</button>
          </div>
        )}

        {suggestedUsers.map(user=>(
          <SuggestedUser user={user} key={user.id}/>
        ))}
    </>

  )
}

export default SuggestedUsers

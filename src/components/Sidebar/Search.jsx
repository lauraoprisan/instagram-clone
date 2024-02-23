import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchLogo } from "../../assets/constants";
import useSearchUser from '../../hooks/useSearchUser';
import SuggestedUser from '../SuggestedUsers/SuggestedUser';
import ModalTest from '../Modal/ModalTest';


const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {user,isLoading, getUserProfile, setUser} = useSearchUser()
  const searchRef  = useRef(null)
  const handleSearchUser = (e) => {
    e.preventDefault()
    getUserProfile(searchRef.current.value)
  }


  return (
    <>
        <div className="sidebar-item" onClick={()=>setIsOpen(true)}>
          <SearchLogo />
          <span className="on-desktop">Search</span>
        </div>
        <ModalTest isOpen={isOpen} onClose={()=>setIsOpen(false) }>
          <div className="search-user-modal-container">
            <h3>Search user</h3>
            <form onSubmit={handleSearchUser} className="search-user-form">
              <input type="text" placeholder="Type an username..." ref={searchRef} />
              <button type="submit">
                Search
              </button>
            </form>
            {user && (
              <div className="suggested-user-in-modal-container">
                <SuggestedUser user={user} setUser={setUser}/>
              </div>

          )}
          </div>
        </ModalTest>
    </>

  )
}

export default Search

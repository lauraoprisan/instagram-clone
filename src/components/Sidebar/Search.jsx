import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchLogo } from "../../assets/constants";
import Modal from '../Modal/Modal';
import useSearchUser from '../../hooks/useSearchUser';
import SuggestedUser from '../SuggestedUsers/SuggestedUser';


const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {user,isLoading, getUserProfile, setUser} = useSearchUser()
  const searchRef  = useRef(null)
  const handleSearchUser = (e) => {
    e.preventDefault()
    getUserProfile(searchRef.current.value)
  }

  console.log(user)

  return (
    <>
        <div className="sidebar-item" onClick={()=>setIsOpen(true)}>
          <SearchLogo />
          <span className="on-desktop">Search</span>
        </div>
        <Modal open={isOpen} onClose={()=>setIsOpen(false) } forComponent="searchUser">
          <div className="search-user-modal-container">
            <h3>Search user</h3>
            <form onSubmit={handleSearchUser} className="search-user-form">
              <input type="text" placeholder="Type an username..." ref={searchRef} />
              <button type="submit">
                Search
              </button>
            </form>
            {user && <SuggestedUser user={user} setUser={setUser}/>}
          </div>
        </Modal>
    </>

  )
}

export default Search

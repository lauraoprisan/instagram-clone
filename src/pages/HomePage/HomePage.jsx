import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <div className="main-container">
      <section className="feeds-container">
        <FeedPosts/>
      </section>
      <section className="suggested-container on-desktop flex">
        <SuggestedUsers/>
      </section>
    </div>
  )
}

export default HomePage;

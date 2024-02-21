import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
	const userProfile = useUserProfileStore((state) => state.userProfile);

	return (
        <div className="flex comment-container">
        <Link to={`/${userProfile.username}`}>
          <Avatar size="lg" avatar={userProfile.profilePicURL}/>
        </Link>
        <div className="user-info">
          <Link to={`/${userProfile.username}`}>
            <span className="username">{userProfile.username}</span>
          </Link>
          <span className="subtle-text date-of-post">
            {timeAgo(post.createdAt)}
          </span>
        </div>
        <p className="comment-text">
          {post.caption}
        </p>
      </div>
	);
};

export default Caption;
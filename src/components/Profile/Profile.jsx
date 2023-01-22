import { useParams } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";

const Profile = () => {
  const { username } = useParams();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-around">
      <ProfileCard username={username} />
    </div>
  );
};

export default Profile;

import { filterPerfs } from "../../helpers/cardHelpers";
import { slate } from "../../themes/cardThemes";
import UserDetails from "./UserDetails/UserDetails";
import UserRatings from "./UserRatings/UserRatings";
const ProfileCard = ({ data }) => {
  const perfs = filterPerfs(data?.perfs);
  const profile = data?.profile;

  return (
    <div
      className={`w-fit gap-5 flex flex-col items-center justify-around ${slate.container}`}
    >
      <UserDetails
        profile={profile}
        title={data.title}
        username={data.username}
      />
      <UserRatings perfs={perfs} />
    </div>
  );
};

export default ProfileCard;

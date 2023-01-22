import { useQuery } from "react-query";
import { filterPerfs } from "../../helpers/cardHelpers";
import { fetchCardInfo } from "../../queries/cardQueries";
import { slate } from "../../themes/cardThemes";
import UserDetails from "./UserDetails/UserDetails";
import UserRatings from "./UserRatings/UserRatings";
import DisabledUser from "../DisabledUser/DisabledUser";
import ErrorUser from "../ErrorUser/ErrorUser";

const ProfileCard = ({ username }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`userCard_${username}`],
    queryFn: () => fetchCardInfo(username),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading user data...</p>;
  if (error) return <ErrorUser message={error?.message} />;
  if (data?.disabled) return <DisabledUser />;

  const profile = data?.profile;

  const perfs = filterPerfs(data.perfs);

  return (
    <div
      className={`w-fit gap-5 flex flex-col border-4 rounded-xl px-10 py-5 items-center justify-around ${slate.container}`}
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

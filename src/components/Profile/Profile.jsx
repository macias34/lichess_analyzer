import { useParams } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileStats from "../ProfileStats/ProfileStats";
import DisabledUser from "../DisabledUser/DisabledUser";
import ErrorUser from "../ErrorUser/ErrorUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../features/user";
import { useGetCardDataQuery } from "../../features/apiSlice";
import Search from "../Search/Search";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(changeUser({ username }));
  }, []);

  const { data, error, isFetching } = useGetCardDataQuery(username);

  if (error) return <ErrorUser error={error} />;
  if (data?.disabled) return <DisabledUser />;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly">
      {!isFetching ? (
        <div className="w-full h-fit flex items-center justify-around">
          <ProfileCard data={data} />
          <ProfileStats username={username} />
        </div>
      ) : (
        ""
      )}
      <Search />
    </div>
  );
};

export default Profile;

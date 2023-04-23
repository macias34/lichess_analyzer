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
    <div className="flex flex-col gap-5 sm:gap-0 items-center sm:justify-evenly">
      {!isFetching ? (
        <div className="w-full order-1 gap-5 sm:gap-0 sm:h-fit h-[80vh] flex sm:flex-row flex-col items-center sm:justify-around">
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

import ReactCountryFlag from "react-country-flag";
import { PROFILE_URL } from "../../../constants/cardConstants";

const UserDetails = ({ profile, title, username }) => {
  const firstName = profile?.firstName;
  const lastName = profile?.lastName;
  const country = profile?.country;
  const location = profile?.location;
  const uscf = profile?.uscfRating;
  const fide = profile?.fide;

  const profileUrl = PROFILE_URL + username;

  const renderName = () => {
    if (firstName && lastName) {
      return (
        <span className="font-semibold text-xl max-lg:text-lg">
          {firstName} {lastName}
        </span>
      );
    } else if (firstName) {
      return (
        <span className="font-semibold text-xl max-lg:text-lg">
          {firstName}
        </span>
      );
    } else if (lastName) {
      return (
        <span className="font-semibold text-xl max-lg:text-lg">{lastName}</span>
      );
    }
  };

  const renderLocation = () => {
    if (country && location) {
      return (
        <div className="flex items-center">
          <ReactCountryFlag
            countryCode={country}
            style={{ fontSize: "2.5em" }}
            className="px-2"
          />
          <span>{location}</span>
        </div>
      );
    } else if (location) {
      return <span>{location}</span>;
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        {title ? (
          <span className="text-3xl max-lg:text-xl font-semibold text-yellow-500 mr-3">
            {title}
          </span>
        ) : (
          ""
        )}
        <span className="font-bold text-3xl max-lg:text-xl">
          <a href={profileUrl}>{username}</a>
        </span>
      </div>

      {renderName()}
      {renderLocation()}
    </div>
  );
};

export default UserDetails;

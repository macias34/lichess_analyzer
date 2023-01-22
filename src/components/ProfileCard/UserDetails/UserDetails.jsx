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

  const renderRatings = () => {
    if (uscf && fide) {
      return (
        <div className="flex flex-col mt-3">
          <p className="text-lg">
            <span className="text-red-500 font-bold">USCF</span> :{" "}
            <span className="font-semibold">{uscf}</span>
          </p>
          <p className="text-lg">
            <span className="text-blue-400 font-bold">FIDE</span> :{" "}
            <span className="font-semibold">{fide}</span>
          </p>
        </div>
      );
    } else if (uscf) {
      return (
        <p className="text-lg">
          <span className="text-red-500 font-bold">USCF</span> Rating :{" "}
          <span className="font-semibold">{uscf}</span>
        </p>
      );
    } else if (fide) {
      return (
        <p className="text-lg">
          <span className="text-blue-400 font-bold">FIDE</span> Rating :{" "}
          <span className="font-semibold">{fide}</span>
        </p>
      );
    }
  };

  const renderName = () => {
    if (firstName && lastName) {
      return (
        <span className="font-semibold text-xl">
          {firstName} {lastName}
        </span>
      );
    } else if (firstName) {
      return <span className="font-semibold text-xl">{firstName}</span>;
    } else if (lastName) {
      return <span className="font-semibold text-xl">{lastName}</span>;
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
          <span className="text-3xl font-semibold text-yellow-500 mr-3">
            {title}
          </span>
        ) : (
          ""
        )}
        <span className="font-bold text-3xl">
          <a href={profileUrl}>{username}</a>
        </span>
      </div>

      {renderName()}
      {renderLocation()}
    </div>
  );
};

export default UserDetails;

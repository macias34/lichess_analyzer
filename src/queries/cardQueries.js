export const fetchCardInfo = async (username) => {
  const PROFILE_ENDPOINT = `https://lichess.org/api/user/${username}`;
  const res = await fetch(PROFILE_ENDPOINT);

  if (!res.ok) {
    switch (res.status) {
      case 404: {
        throw new Error("User not found.");
      }
    }
  }

  return res.json();
};

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

export const fetchRatingHistory = async (username) => {
  const PROFILE_ENDPOINT = `https://lichess.org/api/user/${username}/rating-history`;
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

export const fetchPerf = async (username, gameFormat) => {
  const PROFILE_ENDPOINT = `https://lichess.org/api/user/${username}/perf/${gameFormat}`;
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

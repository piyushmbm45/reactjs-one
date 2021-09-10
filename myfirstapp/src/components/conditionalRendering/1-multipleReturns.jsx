import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

function MultipleReturns() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default User");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }
  if (isError) {
    return <h1> Error... </h1>;
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}

export default MultipleReturns;

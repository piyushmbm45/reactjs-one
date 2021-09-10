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
        // const { login } = user;
        setUser(user);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //  multiple return to website these are just one line of html we can send much more data
  if (isLoading) {
    return <h1> Loading... </h1>;
  }
  if (isError) {
    return <h1> Error... </h1>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.login}</h2>
      <p>{user.blog}</p>
      <img src={user.avatar_url} alt=""/>
    </div>
  );
}

export default MultipleReturns;

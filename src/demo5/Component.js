import { useEffect, useState, useMemo, memo } from "react";
import InnerComponent from "./InnerComponent";
// import users from "./users.json";

export const useUser = (user) => {
  const [userData, setUserData] = useState();
  console.log("custom hook called.........");

  useEffect(() => {
    console.log("Custom hook useeffect called......");
    if (user) {
      fetch("users.json").then((response) =>
        response.json().then((users) => {
          console.log("data got from api......");
          return setUserData(users.find((item) => item.id === user.id));
        })
      );
    }
  }, []);

  return userData;
};

// const userObject = { id: 1 };

const Component = ({ id }) => {
  const userObject = useMemo(() => {
    return { id: id };
  }, []);
  // const userObject = { id: id };
  console.log("Component launched");

  const user = useUser(userObject);
  console.log(".......component got data =>", user);

  return (
    <div style={{ backgroundColor: "blue", fontSize: 100 }}>
      {user?.name ? user?.name : "Not Available"}
      <InnerComponent id={1} />
    </div>
  );
};

export default memo(Component);

import { memo, useMemo } from "react";
import { useUser } from "./Component";

const InnerComponent = ({ id }) => {
  const userObject = useMemo(() => {
    return { id: id };
  }, []);
  // const userObject = { id: id };
  console.log("Inner Component launched");

  const user = useUser(userObject);
  console.log(".......Inner component got data =>", user);

  return (
    <div style={{ backgroundColor: "orange", height: 30 }}>
      {user?.name ? user?.name : "Not Available"}
    </div>
  );
};

export default memo(InnerComponent);

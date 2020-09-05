import * as React from "react";
import { AuthenticationRequired } from "../../shared/AuthenticationRequired";

const List: React.FC = () => {
  console.log("list fired");
  return <div>Address List</div>;
};

export default AuthenticationRequired(List);

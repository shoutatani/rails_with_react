import * as React from "react";
import { AuthenticationRequired } from "../../shared/AuthenticationRequired";

const New: React.FC = () => {
  console.log("new fired");
  return <div>addresses new</div>;
};

export default AuthenticationRequired(New);

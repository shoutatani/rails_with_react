import * as React from "react";
import { AuthenticationRequired } from "../../shared/AuthenticationRequired";

const List: React.FC = () => {
  return <div>Address List</div>;
};

export default AuthenticationRequired(List);

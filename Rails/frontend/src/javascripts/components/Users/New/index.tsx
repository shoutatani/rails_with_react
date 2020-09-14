import * as React from "react";
import { useState } from "react";
import axios from "../../../api/common/axios";
import { AuthenticationRequired } from "../../shared/AuthenticationRequired";
import { Input } from "./Input";
import { Preview } from "./Preview";

const New: React.FC = () => {
  const [lastNameInput, setLastNameInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const [visibleInput, setVisibleInput] = useState(true);

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(e.target.value);
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (visibleInput) {
      setVisibleInput(false);
      return;
    }

    axios.post("/users", {
      last_name: lastNameInput,
      first_name: firstNameInput,
      email: emailInput,
    });
  };

  if (visibleInput) {
    return (
      <Input
        lastName={lastNameInput}
        firstName={firstNameInput}
        email={emailInput}
        onLastNameChange={handleLastNameChange}
        onFirstNameChange={handleFirstNameChange}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <Preview
      lastName={lastNameInput}
      firstName={firstNameInput}
      email={emailInput}
      onSubmit={handleSubmit}
    />
  );
};

export default AuthenticationRequired(New);

import * as React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "../../../api/common/axios";
import { AuthenticationRequired } from "../../shared/AuthenticationRequired";
import { Input } from "./Input";
import { Preview } from "./Preview";

const New: React.FC = () => {
  const [lastNameInput, setLastNameInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const [visibleInput, setVisibleInput] = useState(true);

  const [processingWithServer, setProcessingWithServer] = useState(false);
  const [goToComplete, setGoToComplete] = useState(false);

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(e.target.value);
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (visibleInput) {
      setVisibleInput(false);
      return;
    }

    axios
      .post("/address_books", {
        last_name: lastNameInput,
        first_name: firstNameInput,
        email: emailInput,
      })
      .then((response) => {
        if (response.status === 201) {
          setProcessingWithServer(false);
          setGoToComplete(true);
        }
      });
    setProcessingWithServer(true);
  };

  if (goToComplete) {
    return <Redirect to="/address_books/complete" />;
  }

  if (processingWithServer) {
    return <div>now processing...</div>;
  }

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

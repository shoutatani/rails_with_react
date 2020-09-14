import * as React from "react";

type InputProps = {
  lastName: string;
  firstName: string;
  email: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  onSubmit,
  lastName,
  onLastNameChange,
  firstName,
  onFirstNameChange,
  email,
  onEmailChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="last_name">姓</label>
      <input
        type="text"
        id="last_name"
        placeholder="姓"
        onChange={onLastNameChange}
        value={lastName}
      ></input>
      <label htmlFor="first_name">名</label>
      <input
        type="text"
        id="first_name"
        placeholder="名"
        onChange={onFirstNameChange}
        value={firstName}
      ></input>
      <label htmlFor="email">メールアドレス</label>
      <input
        type="text"
        id="email"
        placeholder="メールアドレス"
        onChange={onEmailChange}
        value={email}
      ></input>
      <input type="submit" value="確認画面へ" />
    </form>
  );
};

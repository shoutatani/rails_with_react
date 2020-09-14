import * as React from "react";

type PreviewProps = {
  lastName: string;
  firstName: string;
  email: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Preview: React.FC<PreviewProps> = ({
  lastName,
  firstName,
  email,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="last_name">姓</label>
      <span id="last_name">{lastName}</span>
      <label htmlFor="first_name">名</label>
      <span id="first_name">{firstName}</span>
      <label htmlFor="email">メールアドレス</label>
      <span id="email">{email}</span>
      <input type="submit" value="修正する" />
      <input type="submit" value="送信" />
    </form>
  );
};

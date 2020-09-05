import { Column, Columns } from "bloomer";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../../api/common/axios";

export interface LoginProps {}

export const Login = (props: LoginProps) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (email: string, password: string) => {
    const response = await axios.post("/admin_user_login/login", {
      email,
      password,
    });
    if (response.status == 200) {
      dispatch({ type: "LOGIN" });
      history.push("/");
    }
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };
  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInput(e.target.value);
  };
  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputError.length) {
      return;
    }
    if (!emailInput.length) {
      setInputError("メールアドレスが入力されていません");
      return;
    }
    if (
      !emailInput.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setInputError("メールアドレスの形式が不正です");
      return;
    }
    if (!passwordInput.length) {
      setInputError("パスワードが入力されていません");
    }
    setInputError("");
    onLogin(emailInput, passwordInput);
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <Columns isCentered>
        <Column isSize={12} style={{ textAlign: "center" }}>
          <span>{inputError}</span>
        </Column>
      </Columns>
      <Columns isCentered>
        <Column isSize={4}>
          <Columns>
            <Column isSize={6} style={{ textAlign: "right" }}>
              <label htmlFor="email">E-mail アドレス：</label>
            </Column>
            <Column isSize={6}>
              <input
                id="email"
                value={emailInput}
                onChange={handleEmailInputChange}
              ></input>
            </Column>
          </Columns>
          <Columns>
            <Column isSize={6} style={{ textAlign: "right" }}>
              <label htmlFor="password">パスワード：</label>
            </Column>
            <Column isSize={6}>
              <input
                id="password"
                value={passwordInput}
                onChange={handlePasswordInputChange}
              ></input>
            </Column>
          </Columns>
        </Column>
        <Column isSize={1} style={{ textAlign: "center", marginTop: "25px" }}>
          <input type="submit" value="ログイン" onClick={handleClick}></input>
        </Column>
      </Columns>
    </div>
  );
};

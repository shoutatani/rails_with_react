import { Column, Columns } from "bloomer";
import * as React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => (
  <div style={{ margin: "20px" }}>
    <Columns isCentered>
      <Column isSize={2}>
        <Link
          to="/addresses"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          住所検索
        </Link>
      </Column>
      <Column isSize={2}>
        <Link
          to="/users"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ユーザー検索
        </Link>
      </Column>
    </Columns>
    <Columns isCentered>
      <Column isSize={2}>
        <Link
          to="/addresses/new"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          住所新規登録
        </Link>
      </Column>
      <Column isSize={2}>
        <Link
          to="/users/new"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ユーザー新規登録
        </Link>
      </Column>
    </Columns>
  </div>
);

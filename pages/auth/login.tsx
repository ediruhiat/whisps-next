import { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

type TInputLoginData = {
  username: string;
  password: string;
};

const styles = {
  pageWrapper:
    "h-screen w-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center",
  contentWrapper: "-mt-24 flex flex-col gap-y-4 items-center",
  loginTitle: "mb-2 text-2xl font-medium",
  loginContainer:
    "border border-gray-700 p-4 rounded-lg bg-gray-800 flex flex-col gap-y-4 text-sm font-medium",
  loginTextInput:
    "h-9 w-64 border border-gray-700 bg-gray-900 text-gray-300 text-sm rounded-lg focus:border focus:border-gray-900 focus:ring-2 focus:ring-blue-400/[.75]",
  formGroup: "flex flex-col gap-y-3",

  forgotPassword: "text-blue-400",
  loginButton:
    "bg-emerald-600 hover:bg-emerald-500 w-full h-9 rounded-lg text-gray-100 hover:text-white transition-colors",
};

const Login: NextPage = () => {
  const [inputData, setInputData] = useState<TInputLoginData>({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState<boolean | undefined>();

  const verifyToken = async (auth_token: string) => {
    return await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ auth_token }),
    })
      .then((res: any) => res.json())
      .then((json: any) => json);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const auth_token = window.localStorage.getItem("WHISPS_auth_token");
        const syncVerifyToken = async (auth_token: string) => {
          const result = await verifyToken(auth_token);
          if (result.status) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
        };

        syncVerifyToken(auth_token!);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (loggedIn) Router.push("/");
  }, [loggedIn]);

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    setInputData((prevState) => {
      return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res: any) => res.json())
      .then((json: any) => {
        if (typeof window !== "undefined") {
          try {
            window.localStorage.setItem("WHISPS_auth_token", json.auth_token);
            setLoggedIn(true);
          } catch (err) {
            console.log(err);
          }
        }

        return json;
      });
  };

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Whisps - Login</title>
      </Head>

      <div className={styles.contentWrapper}>
        <h1 className={styles.loginTitle}>Login to Whisps</h1>
        <form className={styles.loginContainer} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={inputData.username}
              onChange={handleInputChange}
              className={styles.loginTextInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={inputData.password}
              onChange={handleInputChange}
              className={styles.loginTextInput}
            />
          </div>
          <Link href="/auth/help">
            <a className={styles.forgotPassword}>Forgot your password?</a>
          </Link>
          <button className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

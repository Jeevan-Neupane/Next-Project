"use client";

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { Login } from "@/utils/acttions";

const LoginForm = () => {
  const [state, formAction] = useFormState(Login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

"use client";
import { getString } from "@/helpers/i18n";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import "dotenv/config";
import styles from "./page.module.css";

export default function NewPassword({ params }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(getString("PW_RESET_PASSWORDS_DONT_MATCH"));
      return;
    } else if (password.length < 6) {
      setError(getString("PW_RESET_PASSWORD_INVALID"));
      return;
    }

    // Reset error state if validation passes
    setError("");

    // Implement your API call for password reset here
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/auth/pw-reset/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: params.jwt,
            new_password: password,
          }),
        },
      );
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(getString("PW_RESET_INVALID_TOKEN"));
        }
        throw new Error(getString("PW_RESET_UNKNOWN_ERROR"));
      }
      setSuccessMessage(getString("PW_RESET_SUCCESS_MESSAGE"));
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_FE_BASEURL}/login/`); // Redirect to login page
      }, 3000); // Delay for 3 seconds to allow user to read the message
    } catch (error) {
      setError(error.message);
      return;
    }
  };

  return (
    <div className={styles.main}>
      <h1>{getString("PW_RESET_TITLE")}</h1>
      <div className="form-container">
        <form className={styles.password_reset_form} onSubmit={handleSubmit}>
          <div supressHidrationWarning className={styles.input_group}>
            <label htmlFor="password">
              {getString("PW_RESET_NEW_PASSWORD")}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div suppressHydrationWarning className={styles.input_group}>
            <label htmlFor="confirmPassword">
              {getString("PW_RESET_CONFIRM_PASSWORD")}
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {successMessage && (
            <div
              style={{ color: "green", marginTop: "20px", fontWeight: "bold" }}
            >
              {successMessage}
            </div>
          )}
          <div className={styles.button_group}>
            <Button type="submit">{getString("PW_RESET_SEND_BUTTON")}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

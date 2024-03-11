"use client";
import { getString } from "@/helpers/i18n";
import React from "react";
import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import "dotenv/config";
import styles from "./page.module.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
      setError(getString("PW_RESET_REQ_INVALID_EMAIL"));
      return;
    }

    // Send a request to the api to send the reset email
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/users/pw-reset-request/${email}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      setSuccessMessage(getString("PW_RESET_REQ_EMAIL_SENT"));
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_FE_BASEURL}/login/`); // Redirect to login page
      }, 3000); // Delay for 3 seconds to allow user to read the message
    } else if (response.status === 404) {
      setError(getString("PW_RESET_REQ_EMAIL_NOT_FOUND"));
    } else {
      setError(getString("PW_RESET_REQ_UNKNOWN_ERROR"));
    }
  };

  return (
    <div className={styles.main}>
      <h1>{getString("PW_RESET_REQ_TITLE")}</h1>
      <p>{getString("PW_RESET_REQ_DESCR")}</p>
      <div className="form-container">
        <form className={styles.password_reset_form} onSubmit={handleSubmit}>
          <div suppressHydrationWarning className={styles.input_group}>
            <label htmlFor="email">{getString("PW_RESET_REQ_EMAIL")}</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
            <Button type="submit">
              {getString("PW_RESET_REQ_SEND_BUTTON")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

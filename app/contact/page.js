"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { myAction } from "./actions";
import { Open_Sans } from "next/font/google";

const OpenS = Open_Sans({
  weight: "500",
  subsets: ["latin"],
});

export default function Contact() {
  const { register, handleSubmit, setValue, getValues } = useForm(); // Use useForm hook

  const onSubmit = async (data) => {
    const response = await myAction(data); // Call myAction function with form data
    setResult(response.message); // Update result state with the response message
  };

  const [result, setResult] = React.useState("");

  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </header>
      <div className={styles.Footer}>
        <div className={styles.Contact}>
          <h2>Contact Us</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                {...register("name")}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>

            <textarea
              required
              name="message"
              placeholder="Message"
              {...register("message")}
            />

            <div className={styles.button}>
              <input required type="submit" />

              <span>{result}</span>
            </div>
          </form>
        </div>
        <div className={styles.ContactText}>
          <p>
            We're excited to work with clients who value quality and attention
            to detail.
          </p>
          <p> Based in Muswell Hill, and we serve all of London.</p>
          <br></br>
          <h2 className={OpenS.className}>
            {" "}
            <span className="material-symbols-outlined">call </span>{" "}
            +447547845006{" "}
          </h2>
          <h2 className={OpenS.className}>
            {" "}
            <span className="material-symbols-outlined">mail</span>{" "}
            hexhax-drones@outlook.com
          </h2>
        </div>
      </div>
    </>
  );
}

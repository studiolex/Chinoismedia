import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Home.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjvlvqrd");
  if (state.succeeded) {
    return (
      <div className={styles.form_confirm}>
        <p className={styles.form_confirm__text}>Thanks for your submission!</p>
        <p className={styles.form_confirm__text_small}>
          I will get in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <label htmlFor="name" className={styles.input_label}>
          Your name
        </label>
        <input
          required
          className={styles.input_field}
          placeholder="Your name"
          name="name"
          type="text"
          id="name"
        ></input>
        <ValidationError
          className={styles.input_error}
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="mail" className={styles.input_label}>
          Your E-mail
        </label>
        <input
          required
          className={styles.input_field}
          placeholder="Your E-mail"
          name="mail"
          type="email"
          id="mail"
        ></input>
        <ValidationError prefix="Email" field="mail" errors={state.errors} />
      </div>
      <div className={styles.input}>
        <label htmlFor="project" className={styles.input_label}>
          What is your project about?
        </label>
        <input
          required
          className={styles.input_field}
          placeholder="What's your project about?"
          name="project"
          type="text"
          id="project"
        ></input>
        <ValidationError
          className={styles.input_error}
          prefix="Project"
          field="project"
          errors={state.errors}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="message" className={styles.input_label}>
          Project description
        </label>
        <textarea
          required
          rows="4"
          className={styles.input_field}
          placeholder="Tell something more about your project.."
          name="message"
          id="message"
        ></textarea>
        <ValidationError
          className={styles.input_error}
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        className={styles.form_button}
        type="submit"
        disabled={state.submitting}
      >
        Send project
      </button>
      <ValidationError className={styles.input_error} errors={state.errors} />
    </form>
  );
}

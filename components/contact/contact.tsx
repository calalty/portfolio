import styles from "./contact.module.scss";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const { control } = useForm({
    reValidateMode: "onSubmit",
  });
  const form = useRef();

  const [status, setStatus] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY_EMAIL
      )
      .then(() => {
        setStatus("sent");
      })
      .then((error) => console.log(error));
  };

  return (
    <section id="contact" className={styles.container} data-section="contact">
      <div className={styles.contact}>
        <h2>CONTACT ME</h2>

        <p>Got any questions, or just want to say hello? Fire away!</p>

        <form ref={form} className={styles.root} onSubmit={sendEmail}>
          <div className={styles["personal-details"]}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div className={styles["input-group"]}>
                  <label>NAME</label>
                  <input
                    className={styles.input}
                    value={field.value}
                    name={field.name}
                    required
                  />
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div className={styles["input-group"]}>
                  <label>E-MAIL ADDRESS</label>
                  <input
                    className={styles.input}
                    value={field.value}
                    name={field.name}
                    required
                  />
                </div>
              )}
            />
          </div>

          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className={styles["input-group"]}>
                <label>MESSAGE</label>
                <input
                  className={styles.input}
                  value={field.value}
                  name={field.name}
                  required
                />
              </div>
            )}
          />
          <button className={styles["submit-btn"]}>
            <div>
              <span className="font-sans">→</span> FIRE AWAY
            </div>
          </button>
        </form>

        <p
          className={[styles.status, status && styles["status-active"]].join(
            " "
          )}
        >
          {status === "sent" && "Thank you for your message!"}
          {status === "sending" && "Your message is sending..."}
          {status === "error" &&
            "There has been an error whilst sending your message."}
        </p>
      </div>
    </section>
  );
}

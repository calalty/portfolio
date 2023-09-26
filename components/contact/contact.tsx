import styles from "./contact.module.scss";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useForm,
} from "react-hook-form";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_MESSAGE,
  CONTACT_NAME,
  CONTACT_SUBMIT,
  CONTACT_SUBTITLE,
  CONTACT_TITLE,
  INVALID_EMAIL,
  REQUIRED_FIELDS,
} from "@/contents/global";
import { REGEX_EMAIL_VALIDATION } from "@/global/pattern";
import { syneHeadingBoldest } from "@/global/fonts";

export default function Contact() {
  const { control } = useForm({
    reValidateMode: "onSubmit",
  });
  const form = useRef();
  const [status, setStatus] = useState(null);

  const renderController = (
    name: string,
    label: string,
    additionalRules?: RegisterOptions<FieldValues, string>
  ) => (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: true, message: REQUIRED_FIELDS },
        ...additionalRules,
      }}
      render={({ field }) => (
        <div className={styles["input-group"]}>
          <label>{label}</label>

          {name === "message" ? (
            <textarea
              value={field.value}
              name={field.name}
              required
              rows={5}
              minLength={30}
            ></textarea>
          ) : (
            <input
              className={styles.input}
              value={field.value}
              name={field.name}
              required
            />
          )}
        </div>
      )}
    />
  );

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
        <h4 className={syneHeadingBoldest.className}>{CONTACT_TITLE}</h4>
        <p>{CONTACT_SUBTITLE}</p>

        <form ref={form} className={styles.root} onSubmit={sendEmail}>
          <div className={styles["personal-details"]}>
            {renderController("name", CONTACT_NAME)}
            {renderController("email", CONTACT_EMAIL, {
              pattern: {
                value: REGEX_EMAIL_VALIDATION,
                message: INVALID_EMAIL,
              },
            })}
          </div>

          {renderController("message", CONTACT_MESSAGE)}

          <button className={styles["submit-btn"]}>
            <p>
              <span className="font-sans">→</span> {CONTACT_SUBMIT}
            </p>
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

import styles from "./contact.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function Contact() {
  const { control } = useForm({
    reValidateMode: "onSubmit",
  });

  return (
    <section id="contact" className={styles.container} data-section="contact">
      <div className={styles.contact}>
        <h2>CONTACT ME</h2>

        <p>Got any questions, or just want to say hello? Fire away!</p>

        <form className={styles.root}>
          <div className={styles["personal-details"]}>
            <Controller
              name="fullName"
              control={control}
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
      </div>
    </section>
  );
}

import ContactForm from "./contactForm";
import styles from "../Contact/contact.module.scss";

function Contact() {
  return (
    <>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
      <hr />
      <h3>Свържете се с нас:</h3>
      <div className={styles.contacts}>
        <div className={styles.map}>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.2957104524157!2d23.282957276592203!3d42.67627801506452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84d97b478bf3%3A0x8e6d42bbc6a4a3a2!2z0LYu0LouINCa0YDQsNGB0L3QviDRgdC10LvQviwg0YPQuy4g4oCe0KXRg9Cx0YfQsOKAnCA4LCAxNjE4INCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1741083161035!5m2!1sbg!2sbg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.contactInfo}>
          <p>
            <b>Телефон:</b> +359 878 320 355
          </p>
          <p>
            <b>Адрес:</b> България, гр. София, ул. Хубча №8
          </p>
          <p>
            <b>Имейл:</b> diankoveood@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;

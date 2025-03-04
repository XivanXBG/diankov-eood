import { useState } from "react";
import styles from "../Contact/contact.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    file: null,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? Array.from(files)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Вашето запитване е изпратено успешно!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Направете запитване</h2>

      <div className={styles.formRow}>
        {/* Лява колона */}
        <div className={styles.column}>
          <label>Име и фамилия*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Телефонен номер*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Имейл адрес*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Дясна колона */}
        <div className={styles.column}>
          <label>Тип на услугата*</label>
          <select
            required
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option disabled value="">
              Изберете услуга...
            </option>
            <option value="building">Строителство</option>
            <option value="planning">Проектиране</option>
            <option value="geodesy">Геодезия</option>
            <option value="others">Друго</option>
          </select>

          <label>Описание на запитването*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* GDPR + бутон */}
      <div className={styles.gdpr}>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <label>Съгласен съм с обработката на личните ми данни*</label>
      </div>

      <button type="submit">Изпрати запитване</button>
    </form>
  );
}

export default ContactForm;

import { useState, useRef } from "react";
import styles from "../Contact/contact.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    files: [],
    consent: false,
  });

  const fileInputRef = useRef(null); // Добавяме референция към input-a

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("service", formData.service);
    data.append("message", formData.message);
    data.append("consent", formData.consent);

    formData.files.forEach((file) => {
      data.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      alert(result.message);

      // Нулиране на formData
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        files: [],
        consent: false,
      });

      // Ръчно изчистване на file input-а
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("Възникна грешка при изпращането.");
    }
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

          <label>Прикачете снимки (по желание)</label>
          <input
            type="file"
            name="files"
            multiple
            onChange={handleChange}
            accept="image/*"
            ref={fileInputRef} // Това е ключът!
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

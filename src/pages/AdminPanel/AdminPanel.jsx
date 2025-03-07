import { useState, useEffect } from "react";
import styles from "./Admin.module.scss"; // Optional - стилове ако искаш

function AdminPanel() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [inquiries, setInquiries] = useState([]);

  const fetchInquiries = async (enteredPassword) => {
    try {
      // Първо проверка на паролата
      const checkResponse = await fetch(
        "https://backend-dyankoveood.onrender.com/check-admin-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: enteredPassword }),
        }
      );

      if (!checkResponse.ok) {
        alert("Грешна парола!");
        return;
      }

      // Ако паролата е вярна, зареждаме данните
      setIsAuthorized(true);

      const dataResponse = await fetch(
        "https://backend-dyankoveood.onrender.com/inquiries",
        {
          headers: { Authorization: `Bearer ${enteredPassword}` }, // За всеки случай - двойна защита
        }
      );
      const data = await dataResponse.json();
      setInquiries(data.reverse()); // Най-новите първи
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      alert("Грешка при зареждането на запитванията.");
    }
  };

  useEffect(() => {
    const enteredPassword = prompt("Въведете парола за достъп:");
    if (enteredPassword) {
      fetchInquiries(enteredPassword);
    }
  }, []);

  if (!isAuthorized) {
    return <p>Нямате достъп до тази страница.</p>;
  }

  return (
    <div className={styles.adminPanel}>
      <h2>Всички запитвания</h2>
      {inquiries.length === 0 ? (
        <p>Няма получени запитвания.</p>
      ) : (
        <div className={styles.inquiriesList}>
          {inquiries.map((inquiry) => (
            <div key={inquiry.id} className={styles.inquiryCard}>
              <h3>Запитване от: {inquiry.name}</h3>
              <p>
                <strong>Телефон:</strong> {inquiry.phone}
              </p>
              <p>
                <strong>Имейл:</strong> {inquiry.email}
              </p>
              <p>
                <strong>Услуга:</strong> {translateService(inquiry.service)}
              </p>
              <p>
                <strong>Съобщение:</strong> {inquiry.message}
              </p>
              <p>
                <strong>Дата:</strong> {inquiry.date}
              </p>

              {inquiry.files && inquiry.files.length > 0 && (
                <div className={styles.filesSection}>
                  <strong>Качени снимки:</strong>
                  <div className={styles.filesGrid}>
                    {inquiry.files.map((file) => (
                      <a
                        key={file.fileName}
                        href={`https://backend-dyankoveood.onrender.com${file.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.fileLink}
                      >
                        <img
                          src={`https://backend-dyankoveood.onrender.com${file.url}`}
                          alt={file.originalName}
                          className={styles.thumbnail}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function translateService(serviceKey) {
  const serviceMap = {
    building: "Строителство",
    planning: "Проектиране",
    geodesy: "Геодезия",
    others: "Друго",
  };
  return serviceMap[serviceKey] || "Неизвестна услуга";
}

export default AdminPanel;

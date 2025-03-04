function RecentProjects() {
  const projects = [
    {
      id: 1,
      name: "Ремонт на канализация",
      location: "София",
      date: "Януари 2025",
    },
    {
      id: 2,
      name: "Инсталация на парно",
      location: "Пловдив",
      date: "Февруари 2025",
    },
    {
      id: 3,
      name: "Шпакловка и боядисване",
      location: "Варна",
      date: "Февруари 2025",
    },
  ];

  return (
    <div style={styles.container}>
      {projects.map((project) => (
        <div key={project.id} style={styles.projectCard}>
          <h3>{project.name}</h3>
          <p>
            <strong>Местоположение:</strong> {project.location}
          </p>
          <p>
            <strong>Дата:</strong> {project.date}
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  projectCard: {
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "8px",
    width: "250px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default RecentProjects;

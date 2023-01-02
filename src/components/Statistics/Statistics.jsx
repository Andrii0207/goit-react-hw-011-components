export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title && title}</h2>
      <ul>
        {stats.map(item => (
          <li key={stats.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

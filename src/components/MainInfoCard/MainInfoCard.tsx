import css from './MainInfoCard.module.css';

export default function MainInfoCard({ filmInfo }) {
  const { poster_path, title, overview, genres } = filmInfo;

  return (
    <div className={css.mainCard}>
      <div className="imgWrap">
        <img
          src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
          alt={title}
        />
      </div>
      <h3 className={css.cardTitle}>{title}</h3>
      <p className={css.score}></p>
      <h4 className={css.overviewTitle}>Overview</h4>
      <p className={css.overviewText}>{overview}</p>
      <h5 className={css.genresTitle}>Genres</h5>
      <p className={css.genres}>
        {genres
          .map(item => item.name)
          .join(' ')
          .trim()}
      </p>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCredits } from 'services/ApiTMDB';
import styles from './Cast.module.css';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [casts, setCast] = useState([]);

  const { movieId } = useParams();

  //a method containing the functionality of 3 component life cycle methods
  useEffect(() => {
    async function FetchTeam() {
      try {
        const searchActors = await MovieCredits(movieId);
        setCast(searchActors);
      } catch (error) {
        console.log(error);
      }
    }
    FetchTeam();
  }, [movieId]);

  return (
    <>
      {casts.length ? (
        <ul className={styles.CastList}>
          {casts.map(({ profile_path, id, name, character }) => (
            <li className={styles.CastActor} key={id}>
              {profile_path ? (
                <img
                  className={styles.CastImg}
                  src={`${BASE_IMG}${profile_path}`}
                  alt={name}
                />
              ) : (
                <img
                  className={styles.NoPhoto}
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                  alt="no found img"
                />
              )}

              <p className={styles.CastName}> {name}</p>
              <p className={styles.CastCharacter}>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.NoInfo}>There is no information about Cast</p>
      )}
    </>
  );
};

export default Cast;

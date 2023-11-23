import { toast } from 'react-toastify';
import styles from './SearchMovie.module.css';
import { useState } from 'react';

export default function Search({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChangeName = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      toast.error('rename the photo');
      return;
    }

    onSubmit(name);
    reset();
  };
  const reset = () => {
    setName('');
  };

  return (
    <form className={styles.FormMovie} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchButton}>
        Search
      </button>
      <input
        className={styles.InputMovies}
        type="text"
        value={name}
        placeholder="Search movies"
        onChange={handleChangeName}
      />
    </form>
  );
}

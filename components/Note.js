import Link from 'next/link';
import styles from '../styles/Test.module.css';

const Note = ({ note }) => {
  return (
    <div className={styles.testCard}>
      <h3>{note.frontmatter.title}</h3>

      <p className='pb-2'>{note.frontmatter.excerpt}</p>

      <Link href={`/saa-prep/${note.slug}`}>
        <a className='btn'>Review Notes</a>
      </Link>
    </div>
  );
}

export default Note
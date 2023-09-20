import styles from "./header.module.css"; 

export const Header = () => {
  return (
    <> 
    <header className={styles.header}>
      <h1 className={styles.header_title}>Book It</h1>
      <div className={styles.filtersBox}>
        <select
          name=""
          id=""
          className={`${styles.filtersBox_country} ${styles.input}`}
        >
          <option value="all">All country</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>

        <input type="date" className={`${styles.filtersBox_input} $ {styles.input}`} />

        <input type="date" className={`${styles.filtersBox_input} $ {styles.input}`} />

        <select
          name=""
          id=""
          className={`${styles.filtersBox_input} ${styles.input}`}
        >
          <option value="all">All prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>

        <select
          name=""
          id=""
          className={`${styles.filtersBox_input} ${styles.input}`}
        >
          <option value="all">All sizea</option>
          <option value="Smal">Smal</option>
          <option value="">Medium</option>
          <option value="chile">Large</option>
        
        </select>

      </div>
    </header>
    </>
  );
};

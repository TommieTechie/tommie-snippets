// Suppose we have two files: our styles.module.css file and our JSX file.

// styles.module.css

// .hosting {
//   font: 2rem Helvetica, Arial, sans-serif;
//   color: white;
//   background: hsl(268, 29%, 48%);
//   padding: 100px;
//   text-align: center;
//   transition: 100ms ease-in background;
// }

// .hosting:hover {
//   background: black;
// }

/*
-------------------------------------------------------
*/

// import styles from "../styles.module.css";

const Hosting = () => {
  return (
    <div className={styles.hosting}>
      <span>Farewell Heroku. Hello Vercel.</span>
    </div>
  );
};

export default Hosting;

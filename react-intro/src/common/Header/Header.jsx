import { useEffect } from "react";
// import "./Header.css";
import styles from "./Header.module.css";

const Header = (props) => {
  // useEffect for each render
  useEffect(() => {
    // codul de executat
    console.log("header mount");
  }, [props.isCapHeader]);

  useEffect(() => {
    return () => {
      console.log("header unmount");
    };
  }, []);

  return (
    <header>
      <h2 className={styles.titleSecondary}>
        {props.isCapHeader ? props.title.toUpperCase() : props.title}
      </h2>
    </header>
  );
};

export default Header;

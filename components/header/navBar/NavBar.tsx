import styles from "./navBar.module.css";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={35}
        height={22}
        className={styles.logo}
      />

      <span className={styles.title}>A Board</span>
    </div>
  );
};

export { NavBar };

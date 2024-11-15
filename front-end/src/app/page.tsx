import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        className={styles.title}
        src={"/assets/title.png"}
        alt="title"
        width={408}
        height={100}
        priority={true}
      />
      <div className={styles.bottomContainer}>
        <button className="basicButton">
          <Image
            src={"/assets/play.png"}
            alt="border"
            width={306}
            height={60}
          ></Image>
        </button>
        <button className="basicButton">
          <Image
            src={"/assets/with_a_friend.png"}
            alt="border"
            width={200}
            height={60}
          ></Image>
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { ImgObjectType } from "@/types/ImageType";
import styles from "../styles/ImageCard.module.css";

export default function Card({ imgInfo }: { imgInfo: ImgObjectType }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <a href={imgInfo.url} target="_blank">
          <Image
            src={imgInfo.url}
            alt={"This should be an image"}
            fill
            style={{ objectFit: "contain" }}
          />
        </a>
      </div>

      <div className={styles.title}>
        <div className={styles.name}>{imgInfo.title}</div>
        <div className={styles.size}>{"70kB"}</div>
      </div>
    </div>
  );
}

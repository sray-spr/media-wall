import Image from "next/image";
import { Asset } from "@/types/AssetType";
import styles from "./Card.module.css";

export default function Card({ assetInfo }: { assetInfo: Asset }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <a href={assetInfo.previewUrl} target="_blank">
          <Image
            src={assetInfo.previewUrl}
            alt={"This should be an image"}
            fill
            style={{ objectFit: "contain" }}
          />
        </a>
      </div>

      <div className={styles.title}>
        <div className={styles.name}>{assetInfo.title}</div>
        <div className={styles.size}>{"70kB"}</div>
      </div>
    </div>
  );
}

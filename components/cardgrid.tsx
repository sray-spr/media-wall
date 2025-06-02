import Card from "./Card";

import styles from "../styles/ImageGrid.module.css";

import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { ImgObjectArrayType } from "@/types/ImageType";

const CardWidth = 300;
const CardHeight = 300;
const spacing = 24;

export default function CardGrid({
  imageObjects,
}: {
  imageObjects: ImgObjectArrayType;
}) {
  function generateCard({
    columnIndex,
    rowIndex,
    style,
    data,
  }: GridChildComponentProps) {
    const imageIndex = data.columnCount * rowIndex + columnIndex;
    if (imageIndex >= imageObjects.length) return null;
    return (
      <div
        style={{
          ...style,
          width: data.updatedColumnWidth - spacing,
          height: CardHeight,
        }}
      >
        <Card imgInfo={imageObjects[imageIndex]} />
      </div>
    );
  }

  return (
    <div className={styles.cardGrid}>
      <AutoSizer>
        {({ height, width }) => {
          const columnCount = Math.max(
            1,
            Math.floor(width / (CardWidth + spacing))
          );
          const rowCount = Math.ceil(imageObjects.length / columnCount);
          const updatedColumnWidth = width / columnCount;
          return (
            <Grid
              columnWidth={updatedColumnWidth}
              columnCount={columnCount}
              rowCount={rowCount}
              rowHeight={CardHeight + spacing}
              height={height}
              width={width}
              itemData={{ columnCount, updatedColumnWidth }}
            >
              {generateCard}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
}

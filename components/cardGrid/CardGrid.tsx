import { Card } from "./card";

import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { AssetArray } from "@/types";
import { Box } from "@sprinklrjs/spaceweb/box";
import { ReactElement } from "react";

const CardWidth = 300;
const CardHeight = 300;
const spacing = 24;

const CardGrid = ({ assets }: { assets: AssetArray }): ReactElement => {
  function generateCard({
    columnIndex,
    rowIndex,
    style,
    data,
  }: GridChildComponentProps) {
    const imageIndex = data.columnCount * rowIndex + columnIndex;
    if (imageIndex >= assets.length) return null;
    return (
      <div
        style={{
          ...style,
          width: data.updatedColumnWidth - spacing,
          height: CardHeight,
        }}
      >
        <Card assetInfo={assets[imageIndex]} />
      </div>
    );
  }

  return (
    <Box className="h-full w-full overflow-auto">
      <AutoSizer>
        {({ height, width }) => {
          const columnCount = Math.max(
            1,
            Math.floor(width / (CardWidth + spacing))
          );
          const rowCount = Math.ceil(assets.length / columnCount);
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
    </Box>
  );
};

export { CardGrid };

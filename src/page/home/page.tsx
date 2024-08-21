import React from "react";
import { PageElem } from "../../common/page/index.ts";
import { Text } from "../../common/text/index.ts";
import { COLOR_DATA } from "../../theme/color.ts";
import { FONT_SIZE_DATA } from "../../theme/size.ts";

export const Page: React.FC = () => {
  return (
    <PageElem>
      <Text color={COLOR_DATA.blue} font={FONT_SIZE_DATA.header} weight="bold">
        Welcome to Home!
      </Text>
    </PageElem>
  );
};

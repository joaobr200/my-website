import "styled-components";

import { light } from "./themes/";

export type Theme = {
  background: string;
  color: string;
  colors: {
    primary: string;
    secundary: string;
    gray: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

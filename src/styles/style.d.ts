import "styled-components";

export type Theme = {
  background: string;
  color: string;
  colors: {
    primary: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

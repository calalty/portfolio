import { LinkType } from "@/global/global.type";

type ArrowType = "skewed" | "straight";
type Theme = "dark" | "light";

export type LinksType = {
  links: LinkType[];
  arrowType: ArrowType;
  additionalClassName?: string;
  theme?: Theme;
};

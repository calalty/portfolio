import { LinkType } from "@/global/global.type";

type ArrowType = "skewed" | "straight";

export type LinksType = {
  links: LinkType[];
  arrowType: ArrowType;
  additionalClassName?: string;
};

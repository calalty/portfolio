import { StaticImageData } from "next/image";
import React, { Ref } from "react";

export type ExperienceType = {
  imageModals: ImageModals[];
  selectedModal: null | number;
  onModalClick: any;
  onModalClose: any;
  imageStyle: any;
  imageRefs: any;
};

type ImageModals = {
  id: number;
  imageMarginRight?: string;
  imageMarginLeft?: string;
  textAlign?: string;
  gridImgColumn?: number;
  gridTextColumn?: number;
  gridRow?: number;
  company: string;
  role: string;
  src: StaticImageData;
  alt: string;
  about: string;
};

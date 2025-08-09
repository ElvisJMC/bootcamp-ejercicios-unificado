import { IMG_SRC_REGEX } from "./modelo";

export const extraerSrcDeImgs = (html: string): string[] => {
  const urls: string[] = [];

  for (const match of html.matchAll(IMG_SRC_REGEX)) {
    const url = match[2];
    if (url) urls.push(url);
  }
  return urls;
};

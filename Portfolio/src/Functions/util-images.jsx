
export function getImage(imgName) {
  return new URL(`../assets/${imgName}`, import.meta.url).href;
}
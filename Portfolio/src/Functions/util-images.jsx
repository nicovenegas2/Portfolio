
export function getImage(imgName) {
  return new URL(`../assets/${imgName}`, import.meta.url).href;
}


export function getImages(imgs) {
  // return array of objects with src and alt
  return imgs.map(img => {
    return {
      url: getImage(img)
    }
  });
}
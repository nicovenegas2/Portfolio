
export function getImage(folder, imgName) {
  return new URL(`../assets/${folder}/${imgName}`, import.meta.url).href;
}


export function getImages(folder, imgs) {
  // return array of objects with src and alt
  return imgs.map(img => {
    console.log(folder, img)
    console.log(getImage(folder, img));
    return {
      url: getImage(folder, img)
    }
  });
}
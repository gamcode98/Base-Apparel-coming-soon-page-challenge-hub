const d = document;
const w = window;
export default function responsiveImg(id, mq, desktopSrc, mobileSrc) {
  const $img = d.getElementById(id);
  if (w.innerWidth >= mq) {
    $img.setAttribute("src", desktopSrc);
  } else {
    $img.setAttribute("src", mobileSrc);
  }
  w.addEventListener("resize", (e) => {
    if (w.innerWidth >= mq) {
      $img.setAttribute("src", desktopSrc);
    } else {
      $img.setAttribute("src", mobileSrc);
    }
  });
}

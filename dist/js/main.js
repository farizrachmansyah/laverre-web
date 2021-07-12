class UI {
  constructur() {}

  homeImgChanger() {
    let counter = 0;
    setInterval(() => {
      const homeImage = document.querySelector(".jumbotron-image");
      counter += 1;

      homeImage.style.backgroundImage = `url(/dist/assets/home-img${counter}.jpg)`;
      let bgImg = homeImage.style.backgroundImage;
      bgImg = bgImg.substr(26, 1);

      if (window.innerWidth <= 768) {
        if (bgImg == "2") {
          console.log(bgImg);
          homeImage.style.backgroundPosition = "50% -100px";
        } else {
          homeImage.style.backgroundPosition = "unset";
        }
      }

      if (counter == 3) counter = 0;
    }, 3300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();

  ui.homeImgChanger();
});

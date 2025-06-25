import "../styles/main.scss";
import Scroll from "./services/scroll";
import { BaseSlider, GradientSlider } from "./components";

const scroll = new Scroll();

const initScrollServices = (): void => {
  scroll.initSmoothScroll();
  scroll.initAOS();
};
const initUIComponents = (): void => {
  new BaseSlider();
  new GradientSlider();
};

document.addEventListener("DOMContentLoaded", (): void => {
  initScrollServices();
  initUIComponents();
});

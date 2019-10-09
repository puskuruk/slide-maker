import { Controller } from "stimulus"
import clonedImageNode from "../support/clonedImageNode";
import addSlideLink from "../support/addSlideLink";

export default class SlidesController extends Controller {
    addSlide(event){
        event.preventDefault();
        clonedImageNode();
        addSlideLink();
    }

    showClickedSlide(event){
        event.preventDefault();
        const clickedElement = event.currentTarget;
        const currentElementArray = document.getElementsByClassName("current")
        const clickedElementId = clickedElement.getAttribute("data-slide-id");
        const slideWithCurrentId = document.getElementsByClassName(clickedElementId)[0];
        const oldImage = document.getElementsByClassName("current-slide")[0];
        const currentLi = clickedElement.parentNode;
        oldImage.classList.replace("current-slide","inactive-slide");
        slideWithCurrentId.classList.replace("inactive-slide", "current-slide");
        currentElementArray[0].classList.remove("current")
        currentLi.classList.add("current")
    }
}
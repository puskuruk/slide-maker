import addSlideLink from "./addSlideLink";
import clonedImageNode from "./clonedImageNode";
import itemsWithSlideItemClass from "./itemsWithSlideItemClass";
import fillSlides from "./fillSlides"

const loadSlidesFromLocalStorage = () =>{
    const slidesObject = JSON.parse(localStorage.getItem("slides"));
    const slides = slidesObject.slides;
    console.log(slides)
    const wrapperDiv = document.getElementById("uploadPreview")
    slides.forEach((data, index) => {
        addSlideLink();
        clonedImageNode();
        itemsWithSlideItemClass()[1].classList.add("current");
        fillSlides(data, wrapperDiv.children[index])
    });
}

export default loadSlidesFromLocalStorage;
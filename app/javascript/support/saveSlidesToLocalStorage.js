import getAllSlides from "./getAllSlides";
import takeElementsOfSlides from "./takeElementsOfSlides";

const saveSlidesToLocalStorage = () =>{
    localStorage.removeItem("slides");
    const slides = getAllSlides();
    const slidesStore= [];

    for (const slide of slides) {
        const slideElements = slide.children;
        
        const slideItem = takeElementsOfSlides(slideElements);
        slidesStore.push(slideItem)
    }

    const slidesObject = {slides: slidesStore}
    localStorage.setItem("slides", JSON.stringify(slidesObject));
}

export default saveSlidesToLocalStorage;
import findCurrentSlide from "./findCurrentSlide";

const addTextToSlide = (text) =>{
    const currentDiv = findCurrentSlide();
    const currentText = currentDiv.children[1];
    currentText.innerHTML = text;
}

export default addTextToSlide;
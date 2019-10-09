const takeElementsOfSlides = (slide) =>{
    const img = slide[0];
    const text = slide[1];
    const slideItem  = {
        image: img.src,
        text: text.innerHTML
    }

    return slideItem;
}

export default takeElementsOfSlides;
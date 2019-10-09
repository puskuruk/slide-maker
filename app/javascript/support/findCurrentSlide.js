const findCurrentSlide = () =>{
    const currentElementArray = document.getElementsByClassName("current")
    const currentElementId = currentElementArray[0].children[0].getAttribute("data-slide-id")
    const divWithCurrentId = document.getElementsByClassName(currentElementId)[0];
    return divWithCurrentId;
}

export default findCurrentSlide;
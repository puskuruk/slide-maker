const fillSlides = (data, element) =>{
    const src = data.image
    const innerText = data.text;
    const img = element.children[0];
    const text = element.children[1];
    if(src){
        img.src = src;
    }
    if(text){
        text.innerHTML = innerText;
    }
}
export default fillSlides;
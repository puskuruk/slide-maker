import itemsWithSlideItemClass from "./itemsWithSlideItemClass";
import slideItemsLength from "./slideItemsLength";

const addSlideLink = () =>{
    const lengthItems = slideItemsLength();
    const items = itemsWithSlideItemClass();
    const willClonedLi = items[0];
    const cloned = willClonedLi.cloneNode(true);
    cloned.children[0].id = lengthItems;
    cloned.children[0].setAttribute("data-slide-id", lengthItems);
    cloned.children[0].innerHTML = `Slide ${lengthItems}`;
    cloned.style.display = "";
    const listSlides = document.getElementById("list_slides");
    listSlides.appendChild(cloned);
}

export default addSlideLink;
import slideItemsLength from "../support/slideItemsLength";

const clonedImageNode = () =>{
    const slideItems = slideItemsLength();
    const willClonedImage = document.getElementById("will_cloned_image");
    const clonedImage = willClonedImage.cloneNode(true);
    clonedImage.removeAttribute("id");
    clonedImage.classList.add(slideItems);
    document.getElementById("uploadPreview").append(clonedImage);
}

export default clonedImageNode;
import findCurrentSlide from "../support/findCurrentSlide";

const uploadFile = () =>{
    const currentImage = findCurrentSlide().children[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    fileReader.onload = function (fileReaderEvent) {
        currentImage.src = fileReaderEvent.target.result;
    };

}

export default uploadFile;
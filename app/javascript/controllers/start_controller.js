import { Controller } from "stimulus"
import clonedImageNode from "../support/clonedImageNode";
import addSlideLink from "../support/addSlideLink";
import itemsWithSlideItemClass from "../support/itemsWithSlideItemClass";

export default class StartController extends Controller {
    initialize(){
        clonedImageNode();
        addSlideLink();
        itemsWithSlideItemClass()[1].classList.add("current");
        setTimeout(() => {
            const imageDiv = document.getElementsByClassName("1")[0]
            imageDiv.classList.remove("inactive-slide")
            imageDiv.classList.add("current-slide")
        }, 100);
    }
}
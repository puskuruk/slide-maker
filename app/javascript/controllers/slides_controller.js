import { Controller } from "stimulus"
import clonedImageNode from "../support/clonedImageNode";
import addSlideLink from "../support/addSlideLink";

export default class SlidesController extends Controller {
    addSlide(event){
        event.preventDefault();
        clonedImageNode();
        addSlideLink();
    }
}
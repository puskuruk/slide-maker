import { Controller } from "stimulus"

export default class SlidesController extends Controller {
    addSlide(event){
        event.preventDefault();
        console.log("clicked");
    }
}
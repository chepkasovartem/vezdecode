import {ButtonModel} from "./ButtonModel";
import {CardModel} from "./CardModel";

export class QuestionModel {

    constructor(
        public title: string,
        public buttons: ButtonModel[],
        public card: CardModel|undefined = undefined,
        public key: string = 'value'
    ) {}
}
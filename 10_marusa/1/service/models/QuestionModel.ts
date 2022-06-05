import {ButtonModel} from "./ButtonModel";

export class QuestionModel {

    constructor(public title: string, public buttons: ButtonModel[], public key: string = 'value') {}
}
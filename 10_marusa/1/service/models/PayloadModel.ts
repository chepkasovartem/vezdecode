import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class PayloadModel {

    constructor(value: string, previous_question: string) {
        this.value = value
        this.previous_question= previous_question
    }

    @jsonMember(String)
    public value: string

    @jsonMember(String)
    public previous_question: string
}
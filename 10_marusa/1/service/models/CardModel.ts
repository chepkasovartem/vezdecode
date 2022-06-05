import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class CardModel {

    constructor(image_id: number, type: string = 'BigImage') {
        this.type = type
        this.image_id = image_id
    }

    @jsonMember(String)
    public type: string

    @jsonMember(Number)
    public image_id: number
}
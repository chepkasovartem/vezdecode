import {AnyT, jsonMember, jsonObject} from "typedjson";
import {PayloadModel} from "./PayloadModel";

@jsonObject
export class ButtonModel {

    constructor(title: string, payload: PayloadModel, url: string|undefined = undefined) {
        this.title = title;
        this.payload = payload;
        this.url = url;
    }

    @jsonMember(String)
    public title: string

    @jsonMember(AnyT)
    public payload: PayloadModel

    @jsonMember(String)
    public url: string|undefined
}
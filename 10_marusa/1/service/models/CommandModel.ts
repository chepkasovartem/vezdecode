import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class CommandModel {

    constructor(type: string, text: string) {
        this.type = type;
        this.text = text;
    }

    @jsonMember(String)
    public type: string

    @jsonMember(String)
    public text: string

    @jsonMember(String)
    public tts: string

    @jsonMember(String)
    public voice: string
}
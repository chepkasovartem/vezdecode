import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class CommandModel {

    constructor(type: string, payload: any) {
        this.type = type;
        this.payload = payload
    }

    @jsonMember(String)
    public payload: any

    @jsonMember(String)
    public layout_name: string = "universal_placeholder"

    @jsonMember(String)
    public type: string

    @jsonMember(String)
    public text: string

    @jsonMember(String)
    public tts: string

    @jsonMember(String)
    public voice: string
}
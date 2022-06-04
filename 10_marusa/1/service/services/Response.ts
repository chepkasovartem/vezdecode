import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class Response {

    @jsonMember(String)
    public text: string

    @jsonMember(String)
    public tts: string

    @jsonMember(Boolean)
    public end_session: boolean = true
}
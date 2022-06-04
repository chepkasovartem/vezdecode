import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class Request {

    @jsonMember(String)
    public command: string;

    @jsonMember(String)
    public original_utterance: string;

    @jsonMember(String)
    public type: "SimpleUtterance"|"ButtonPressed";
}
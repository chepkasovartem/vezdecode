import {AnyT, jsonMember, jsonObject} from "typedjson";
import {PayloadModel} from "./PayloadModel";

@jsonObject
export class RequestModel {

    @jsonMember(String)
    public command: string;

    @jsonMember(String)
    public original_utterance: string;

    @jsonMember(String)
    public type: "SimpleUtterance"|"ButtonPressed";

    @jsonMember(AnyT)
    public payload: PayloadModel;
}
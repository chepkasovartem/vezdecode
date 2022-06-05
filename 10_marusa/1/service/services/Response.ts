import {AnyT, jsonMember, jsonObject} from "typedjson";
import {ResponseModel} from "../models/ResponseModel";

@jsonObject
export class Response {

    @jsonMember(ResponseModel)
    public response: ResponseModel;

    @jsonMember(AnyT)
    public session: object;

    @jsonMember(AnyT)
    public version: object;
}
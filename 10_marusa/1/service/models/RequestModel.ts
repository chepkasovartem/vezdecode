import {AnyT, jsonMember, jsonObject} from "typedjson";
import {Request} from "../services/Request";

@jsonObject
export class RequestModel {

    @jsonMember(AnyT)
    public meta: object;

    @jsonMember(Request)
    public request: Request;

    @jsonMember(AnyT)
    public session: object;

    @jsonMember(AnyT)
    public version: object;
}
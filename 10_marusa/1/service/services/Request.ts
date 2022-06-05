import {AnyT, jsonMember, jsonObject} from "typedjson";
import {RequestModel} from "../models/RequestModel";
import {SessionModel} from "../models/SessionModel";

@jsonObject
export class Request {

    @jsonMember(AnyT)
    public meta: object;

    @jsonMember(RequestModel)
    public request: RequestModel;

    @jsonMember(SessionModel)
    public session: SessionModel;

    @jsonMember(AnyT)
    public version: object;
}
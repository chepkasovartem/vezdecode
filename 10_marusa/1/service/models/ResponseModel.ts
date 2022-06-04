import {AnyT, jsonMember, jsonObject} from "typedjson";
import {Response} from "../services/Response";

@jsonObject
export class ResponseModel {

    @jsonMember(Response)
    public response: Response;

    @jsonMember(AnyT)
    public session: object;

    @jsonMember(AnyT)
    public version: object;
}
import {jsonMember, jsonObject} from "typedjson";

@jsonObject
export class SessionModel {

    @jsonMember(String)
    public session_id: string
}
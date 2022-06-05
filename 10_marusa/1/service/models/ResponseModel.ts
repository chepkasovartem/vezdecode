import {AnyT, jsonArrayMember, jsonMember, jsonObject} from "typedjson";
import {Response} from "../services/Response";
import {CommandModel} from "./CommandModel";
import {ButtonModel} from "./ButtonModel";

@jsonObject
export class ResponseModel {

    @jsonMember(AnyT)
    public text: string|string[]

    @jsonMember(String)
    public tts: string

    @jsonArrayMember(AnyT)
    public commands: CommandModel[]

    @jsonArrayMember(AnyT)
    public buttons: ButtonModel[]

    @jsonMember(Boolean)
    public end_session: boolean = true
}
import {AnyT, jsonArrayMember, jsonMember, jsonObject} from "typedjson";
import {Response} from "../services/Response";
import {CommandModel} from "./CommandModel";
import {ButtonModel} from "./ButtonModel";
import {CardModel} from "./CardModel";

@jsonObject
export class ResponseModel {

    @jsonMember(AnyT)
    public text: string|string[]

    @jsonMember(String)
    public tts: string

    @jsonMember(String)
    public tts_type: string

    @jsonMember(String)
    public ssml: string

    @jsonMember(AnyT)
    public card: CardModel

    @jsonArrayMember(AnyT)
    public commands: (CommandModel | CardModel)[]

    @jsonArrayMember(AnyT)
    public buttons: ButtonModel[]

    @jsonMember(Boolean)
    public end_session: boolean = true
}
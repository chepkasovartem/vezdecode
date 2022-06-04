import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel";

export function responseFormatter(response: Response, session, version): ResponseModel {
    let model = new ResponseModel();
    model.session = session;
    model.version = version;

    model.response = response

    return model
}
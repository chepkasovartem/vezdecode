import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel";

export function responseFormatter(response: ResponseModel, session, version): Response {
    let model = new Response();
    model.session = session;
    model.version = version;

    model.response = response

    return model
}
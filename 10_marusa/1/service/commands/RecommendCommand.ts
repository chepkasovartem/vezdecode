import {AbstractCommand} from "../services/AbstractCommand";
import {Request} from "../services/Request";
import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel";
import {responseFormatter} from "../decorators/response";
import {CommandModel} from "../models/CommandModel";
import {CardModel} from "../models/CardModel";

export class RecommendCommand extends AbstractCommand{

    public get name(): string {
        let name = process.env.APP_TEAM_NAME;

        return `${name} порекомендуй что нибудь`
    }

    public handle(request: Request): Response {
        let response = new ResponseModel();

        response.commands = [
            new CommandModel("Widget", {
                "header_title": "Посмотрим что тут у нас",
                "header_icon":[
                    {
                        "url":"http://sun9-50.userapi.com/impf/ZGf6EiPxdlZ6wPYrW1tNiqjAdjsc_yE3TF5ePg/74BArnFVf9s.jpg?size=1590x530&quality=95&crop=0,0,1200,400&sign=c9aa36a78389ab2cec93f60bcde6735d&type=cover_group",
                        "height":30,
                        "width":30
                    }
                ],
                "title":{
                    "value":"Новое приложение"
                },
                "button":{
                    "title":{
                        "value":"Перейти к приложению"
                    },
                    "action":{
                        "type":"open_mini_app",
                        "app_launch_params": {
                            "app_id":7598034
                        }
                    }
                },
            }),
            new CardModel(457239019)
        ]

        response.text = 'Рекомендация дана, спасибо за внимание'
        response.end_session = true

        console.log(response)

        return responseFormatter(response, request.session, request.version);
    }
}
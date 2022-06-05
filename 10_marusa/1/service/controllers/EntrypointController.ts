import 'reflect-metadata';
import { Body, Get, JsonController, Post } from "routing-controllers";;
import { Response } from "../services/Response";
import {Request} from "../services/Request";
import {AbstractCommand} from "../services/AbstractCommand";
import {HelloCommand} from "../commands/HelloCommand";
import {BadRequestCommand} from "../commands/BadRequestCommand";
import {QuizCommand} from "../commands/QuizCommand";
import {QuestionCommand} from "../commands/QuestionCommand";

@JsonController()
export class EntrypointController {

    private commands: AbstractCommand[] = [
        new HelloCommand(),
        new QuizCommand(),
        new QuestionCommand()
    ]

    @Get()
    public app(): string {
        return 'Hello world'
    }

    @Post('/entrypoint')
    public entrypoint(@Body() request: Request): Response {
        let callback: (command: AbstractCommand) => boolean = (command: AbstractCommand) => command.match(request)
        let commands: AbstractCommand[] = this.commands.filter(callback)

        commands.push(new BadRequestCommand)

        return commands[0].handle(request);
    }
}
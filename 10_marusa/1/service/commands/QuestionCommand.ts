import {AbstractCommand} from "../services/AbstractCommand";
import {Request} from "../services/Request";
import {Response} from "../services/Response";
import {ResponseModel} from "../models/ResponseModel";
import {responseFormatter} from "../decorators/response";
import {answer, questions} from "../questions/questions";
import {QuestionModel} from "../models/QuestionModel";
import {DBService} from "../services/DBService";
import path from "path";

export class QuestionCommand extends AbstractCommand {

    protected questions: {[name: string]: string} = {
        'js': 'marusa',
        'marusa': 'bots',
        'bots': 'design',
        'design': 'vk',
        'vk': 'mobile',
        'mobile': 'sp',
        'sp': 'backend',
        'backend': '_'
    }

    public get name(): string {
        return `Ответ: (.+)`
    }

    public match(request: Request): boolean {
        return super.match(request);
    }

    protected getQuestionResponse(response: ResponseModel, question_name: string): ResponseModel {
        let question: QuestionModel = questions[question_name]

        response.text = question.title
        response.buttons = question.buttons
        response.end_session = false

        return response
    }

    protected getFinalResponse(response: ResponseModel, session_id: string): ResponseModel {
        const connection = DBService.getConnection(path.join('files', 'store.json'))
        connection.db.read()

        let rate: string[] = []
        for (const [key, value] of Object.entries(connection.db.data[session_id])) {
            if (value === answer.YES) {
                rate.push(key)
            }
        }

        let callback: (rate: string[]) => string = (rate: string[]) => {
            return rate[Math.floor(Math.random() * rate.length)];
        }

        response.text = [
            'Конец quiz, подсчет результатов...',
            `Ваша категория ${callback(rate)}`,
            'До новых встреч'
        ]

        response.end_session = true

        return response;
    }

    protected save(request: Request): void {
        const connection = DBService.getConnection(path.join('files', 'store.json'))
        connection.db.read()

        connection.db.data[request.session.session_id] = connection.db.data[request.session.session_id] || {}
        connection.db.data[request.session.session_id][request.request.payload.previous_question] = request.request.payload.value

        connection.db.write()
    }

    public handle(request: Request): Response {
        this.save(request)

        let response = new ResponseModel()
        let question_name: string = this.questions[request.request.payload.previous_question]

        response = question_name !== '_'
            ? this.getQuestionResponse(response, question_name)
            : this.getFinalResponse(response, request.session.session_id)

        return responseFormatter(response, request.session, request.version);
    }
}
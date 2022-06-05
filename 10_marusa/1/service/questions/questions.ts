import {QuestionModel} from "../models/QuestionModel";
import {ButtonModel} from "../models/ButtonModel";
import {PayloadModel} from "../models/PayloadModel";
import {AnswerModel} from "../models/AnswerModel";

export enum answer {
    YES = "yes",
    NO = "no"
}

export const questions: { [key: string]: QuestionModel } = {
    'js': new QuestionModel(
        'Сколько будет 1 + 1',
        [
            new ButtonModel(AnswerModel.answer('2'), new PayloadModel(answer.NO, 'js')),
            new ButtonModel(AnswerModel.answer('11'), new PayloadModel(answer.YES, 'js')),
        ]
    ),
    'marusa': new QuestionModel(
        'Вы меня любите?',
        [
            new ButtonModel(AnswerModel.answer('Конечно'), new PayloadModel(answer.YES, 'marusa')),
            new ButtonModel(AnswerModel.answer('Напомни, а ты кто?'), new PayloadModel(answer.YES, 'marusa')),
        ]
    ),
    'bots': new QuestionModel(
        'Тебе бывает грустно?',
        [
            new ButtonModel(AnswerModel.answer('У меня есть ты'), new PayloadModel(answer.YES, 'bots')),
            new ButtonModel(AnswerModel.answer('Я фронтендер ('), new PayloadModel(answer.NO, 'bots')),
        ]
    ),
    'vk': new QuestionModel(
        'Продолжите фразу - Павел Дуров верни ...',
        [
            new ButtonModel(AnswerModel.answer('Стену'), new PayloadModel(answer.NO, 'vk')),
            new ButtonModel(AnswerModel.answer('VK mini apps'), new PayloadModel(answer.YES, 'vk')),
        ]
    ),
    'design': new QuestionModel(
        'Тебе никогда не быть дизайнером',
        [
            new ButtonModel(AnswerModel.answer('Посмотрим...'), new PayloadModel(answer.YES, 'design')),
            new ButtonModel(AnswerModel.answer('По факту'), new PayloadModel(answer.NO, 'design')),
        ]
    ),
    'mobile': new QuestionModel(
        'Ты не программист, ты лишь раскрашиваешь кнопочки и в случайном порядке подключаешь готовые пакеты',
        [
            new ButtonModel(AnswerModel.answer('('), new PayloadModel(answer.NO, 'mobile')),
            new ButtonModel(AnswerModel.answer('Я Mobile developer!!!'), new PayloadModel(answer.YES, 'mobile')),
        ]
    ),
    'backend': new QuestionModel(
        'Терминал или GUI?',
        [
            new ButtonModel(AnswerModel.answer('GUI'), new PayloadModel(answer.NO, 'backend')),
            new ButtonModel(AnswerModel.answer('Linux лучшая ОС!!!'), new PayloadModel(answer.YES, 'backend')),
        ]
    ),
    'sp': new QuestionModel(
        'Го контест',
        [
            new ButtonModel(AnswerModel.answer('Это что?'), new PayloadModel(answer.NO, 'sp')),
            new ButtonModel(AnswerModel.answer('Го'), new PayloadModel(answer.YES, 'sp')),
        ]
    )
}


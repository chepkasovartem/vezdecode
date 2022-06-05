import {Response} from "./Response";
import {Request} from "./Request";

export abstract class AbstractCommand {

    public match(request: Request): boolean {
        let regex = new RegExp(this.name);

        return regex.test(request.request.original_utterance)
    }

    public abstract get name(): string
    public abstract handle(request: Request): Response
}

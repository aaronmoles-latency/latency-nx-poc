import {Logger} from "./Logger";
import {Service} from "./decorators/service.decorator";

@Service()
export default class SystemLogger implements Logger {
    debug(message: string): void {
        console.debug(message)
    }

    error(message: string | Error): void {
        console.error(message)
    }

    info(message: string): void {
        console.info(message)
    }
}

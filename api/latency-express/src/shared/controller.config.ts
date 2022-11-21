import {HttpMethod} from "./http-method";
import {NewableClass} from "./newable-class";
import Controller from "./controller";

export default interface ControllerConfig {
    path: string,
    method: HttpMethod,
}

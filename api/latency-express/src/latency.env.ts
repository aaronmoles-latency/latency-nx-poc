import {Service} from "./shared/decorators/service.decorator";
import {DotEnv, EnvType} from "@latency/express-server";

interface Env extends EnvType{

}

@Service()
export default class LatencyEnv extends DotEnv<Env> {
    constructor() {
        super({
            NODE_ENV: 'dev',
            PORT: '3000',
        });
    }
}

/* eslint-disable @typescript-eslint/no-var-requires */
import {EnvType} from './env';
import {ProcessEnv} from './process.env';
import dotenv from "dotenv";

export abstract class DotEnv<K extends EnvType> extends ProcessEnv<K> {
    protected constructor(variables: K) {
        dotenv.config();

        super(variables)
    }
}

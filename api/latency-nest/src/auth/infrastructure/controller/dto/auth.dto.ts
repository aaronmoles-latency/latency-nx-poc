import {ApiProperty} from "@nestjs/swagger";

export default class AuthDto {
    @ApiProperty()
    readonly data: string;
}

import {ApiProperty} from "@nestjs/swagger";

export default class UserDto {
    @ApiProperty()
    readonly data: string;
}

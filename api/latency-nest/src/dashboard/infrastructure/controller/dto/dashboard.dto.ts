import {ApiProperty} from "@nestjs/swagger";

export default class DashboardDto {
    @ApiProperty()
    readonly data: string;
}

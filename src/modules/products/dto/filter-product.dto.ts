import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class FilterProductDto {
    @ApiProperty({ required: true, example: "05-01-2021"})
    @IsDate()
    @Type(() => Date)
    dateFrom: Date;

    @ApiProperty({ required: true, example: "05-30-2021"})
    @IsDate()
    @Type(() => Date)
    dateTo: Date;
}
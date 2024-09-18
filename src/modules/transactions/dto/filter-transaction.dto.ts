import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FilterTransactionDto {
    @ApiProperty({ enum: ['name', 'transactionDate']})
    @IsNotEmpty()
    @IsString()
    @IsEnum(['name', 'transactionDate'])
    sortBy: 'name' | 'transactionDate'


    @ApiProperty({ required: false})
    @IsOptional()
    @IsString()
    search: string
}
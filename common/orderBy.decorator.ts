import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export const OrderByDecorator = (params: string[]) => {
  return applyDecorators(
    ApiQuery({
      name: 'orderBy',
      required: false,
      explode: false,
      type: String,
      description: `Params to order the data by selected field, allowed: ${JSON.stringify(params)}`,
    }),
  );
};

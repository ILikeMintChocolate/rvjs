import { HttpException, HttpStatus } from '@nestjs/common'

export class NoContentException extends HttpException {
  constructor() {
    super('Data not found', HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

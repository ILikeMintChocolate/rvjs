import { Module } from '@nestjs/common'
import { ContentController } from './content/content.controller'
import { ContentService } from './content/content.service'

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [ContentService],
})
export class AppModule {}

import { ContentController } from '@content/content.controller'
import { ContentService } from '@content/content.service'
import { Module } from '@nestjs/common'

@Module({
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}

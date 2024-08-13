import { ContentService } from '@content/content.service'
import { Controller, Get, Param } from '@nestjs/common'

@Controller('/')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Get('/:pId/:cId')
  findContentByPath1(
    @Param('pId') pId: string,
    @Param('cId') cId: string,
  ): any {
    const data = this.contentService.findContentByPath([pId, cId])
    return data
  }

  @Get('/:pId/:cId/:fId')
  findContentByPath2(
    @Param('pId') pId: string,
    @Param('cId') cId: string,
    @Param('fId') fId: string,
  ): any {
    const data = this.contentService.findContentByPath([pId, cId, fId])
    return data
  }
}

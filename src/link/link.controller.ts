import { Controller, Get } from '@nestjs/common';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  findAll() {
    return [
      {
        id:1,
        title: "Learn Js",
        isCompleted: false,
      },
      {
        id:2,
        title: "Rest API",
        isCompleted: true,
      },
    ];
  }
}

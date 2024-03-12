import { Injectable } from '@nestjs/common';
import { CreatePimDto } from './dto/create-pim.dto';
import { UpdatePimDto } from './dto/update-pim.dto';

@Injectable()
export class PimService {
  create(createPimDto: CreatePimDto) {
    return 'This action adds a new pim';
  }

  findAll() {
    return `This action returns all pim`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pim`;
  }

  update(id: number, updatePimDto: UpdatePimDto) {
    return `This action updates a #${id} pim`;
  }

  remove(id: number) {
    return `This action removes a #${id} pim`;
  }
}

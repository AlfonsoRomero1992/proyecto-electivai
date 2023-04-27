import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getproducts(limit: number, offset: number): string {
    const until: number = Number(limit) + Number(offset);
    return 'Productos desde el id ' + ' hasta ' + until;
  }
  getHelloAndName(name: string): string {
    return this.getHello() + ' Tu nombre es ' + name;
  }
  getHello(): string {
    return 'Hello Word!';
  }
  getname(): string {
    return 'Mi nombre es Alfonso';
  }
}
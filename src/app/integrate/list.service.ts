import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  static SUFFIX: string = "Synoradzki";

  private items: string[] = [];

  constructor() { }

  add(value:string){
    this.items.push(value);
  }
  all():string[]{
    return this.items;
  }

  private transformItem(value:string):string{
    return value+ListService.SUFFIX;
  }
}

import {Component, OnInit} from '@angular/core';
import {ListService} from "../list.service";

@Component({
  selector: 'int-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: string[] = [];
  message: string = null;
  static ERROR = 'Nie wypełniono pola';

  constructor(private myService: ListService) {
  }

  ngOnInit() {
  }

  addItemToService(value:string):void{
    this.myService.add(value);
  }

  listItemsFromService():string[]{
    return this.myService.all();
  }

  addItem(value: string): void {
    this.clearErrorMessage();
    if (value === '') {
      this.message = ListComponent.ERROR;
    }else{
      this.items.push(value);
    }
  }

  get isError(){
    return this.message!=null;
  }

  private clearErrorMessage():void{
    this.message = null;
  }


}

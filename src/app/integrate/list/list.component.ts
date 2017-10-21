import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'int-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: string[] = [];
  message: string = null;
  static ERROR = 'Nie wypełniono pola';

  constructor() {
  }

  ngOnInit() {
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

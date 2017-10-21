import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ExtendedComponentFixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = new ExtendedComponentFixture(TestBed.createComponent(ListComponent));
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display elements on list', ()=>{
    //given
    let sampleElement1 = 'tekst1';
    let sampleElement2 = 'tekst2';
    //when
    component.addItem(sampleElement1);
    fixture.detectChanges();
    //then
    let htmlElement: DebugElement =  fixture.debugElement.query(By.css('table tbody tr'));
    expect(htmlElement.query(By.css('td')).nativeElement.innerHTML).toBe(sampleElement1);
  })

  it('should set error message when enter empty value and press enter', ()=>{
    //when
    fixture.debugElement.query(By.css('#item')).triggerEventHandler('keyup.enter', null);
    fixture.detectChanges();

    //then
    expect(component.isError).toBeTruthy();
  })

  it('should display message error when empty value', ()=>{
    //when
    fixture.debugElement.query(By.css('#item')).triggerEventHandler('keyup.enter', null);
    fixture.detectChanges();

    //then
    fixture.displayErrorMessage();
  })

  it('should hide error message when visible and added new correct item', ()=>{
    //given
    let correctValue = "SampleValue";
    component.message = ListComponent.ERROR;
    //when
    component.addItem(correctValue);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).not.toContain(ListComponent.ERROR);

  })

  it('should hide error message when no interaction', ()=>{
    expect(fixture.debugElement.nativeElement.innerHTML).not.toContain(ListComponent.ERROR);
  });

});

class ExtendedComponentFixture{
  constructor(public el: ComponentFixture<ListComponent>){}
  componentInstance = this.el.componentInstance;
  debugElement = this.el.debugElement;

  detectChanges(){
    this.el.detectChanges();
  }

  displayErrorMessage():void{
    expect(this.el.debugElement.nativeElement.innerHTML).toContain(ListComponent.ERROR);
  }
}

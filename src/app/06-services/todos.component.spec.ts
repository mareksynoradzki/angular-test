import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/from';
import  'rxjs/add/observable/empty';
import  'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let todoService: TodoService;

  beforeEach(() => {
    todoService = new TodoService(null);
    component = new TodosComponent(todoService);
  });

  it('should display todos', () => {
    let todo = [1, 2,3 ];

    spyOn(todoService,  'getTodos').and.callFake(()=>{
      return Observable.from([todo]);
    });
    //when
    component.ngOnInit();
    //
    expect(component.todos).toBe(todo);
  });

  it('should call server then new todo added', ()=>{
    //given
    let spy = spyOn(todoService, 'add').and.returnValue(Observable.empty());

    //when
    component.add();

    //then
    expect(spy).toHaveBeenCalled();
  })

  it('should set new added todo', ()=>{
    //given
    let sampleToDo = {id:20};
    spyOn(todoService, 'add').and.returnValue(Observable.from([sampleToDo]));
    
    //when
    component.add();

    //then
    expect(component.todos).toContain(sampleToDo);
  })

  it('should set error message when server returned error', ()=>{
    //given
    let errorMsg = 'Brak lacznosci z serwerem';
    spyOn(todoService, 'add').and.returnValue(Observable.throw(errorMsg));

    //when
    component.add();

    //then
    expect(component.message).toBe(errorMsg);

  })

  it('should not call server to delete when cancel on confirmation dialog', ()=>{
    //given
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(todoService, 'delete').and.returnValue(Observable.empty());
    const sampleIdToDelete = 1;
    //when
    component.delete(sampleIdToDelete);
    
    //then
    expect(spy).not.toHaveBeenCalled()
  })

  it('should call server to delete with proper todo id when confirm on confirmation dialog', ()=>{
    //given
    spyOn(window, 'confirm').and.returnValue(true);
    let spyService = spyOn(todoService, 'delete').and.returnValue(Observable.empty());
    const todoId:number = 10;

    //when
    component.delete(todoId);

    //then
    expect(spyService).toHaveBeenCalledWith(todoId);

  })
});
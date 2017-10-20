import { TodoFormComponent } from './todo-form.component'; 
import {FormBuilder, AbstractControl} from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should has field name and email field', () => {
    let nameControl = component.form.get('name');
    expect(nameControl!=null).toBeTruthy();
  });

  it('should email field required', () => {
    //given
    let emailControl: AbstractControl = component.form.get('name');
    
    //when
    emailControl.setValue('');
    //then
    expect(emailControl.valid).toBeFalsy();

  });
});
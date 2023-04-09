import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators,
} from "@angular/forms";


@Component({
  selector: 'app-create-sermon-page',
  templateUrl: './create-sermon-page.component.html',
  styleUrls: ['./create-sermon-page.component.scss']
})
export class CreateSermonPageComponent {


  constructor(private fb: FormBuilder) {}

  isFormValid = false;
  form: FormGroup;


  formContent = {}

  ngOnInit(){
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      passage: ['', [Validators.required]],
      description: ['', [Validators.required]],
      sermonAudio: [],
      facebook: [],
      sermonNotes: [],
      date: ['', [Validators.required]]
    });
  }

  get _title(){
    return this.form.get('title');
  }
  get _passage(){
    return this.form.get('passage');
  }
  get _description(){
    return this.form.get('description');
  }
  get _sermonAudio(){
    return this.form.get('sermonAudio');
  }
  get _facebook(){
    return this.form.get('facebook');
  }
  get _sermonNotes(){
    return this.form.get('sermonNotes');
  }
  get _date(){
    return this.form.get('date');
  }

}

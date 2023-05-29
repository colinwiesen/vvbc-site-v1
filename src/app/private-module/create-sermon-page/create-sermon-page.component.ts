import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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

  file: File;
  fileName: string;


  constructor(private fb: FormBuilder, private http: HttpClient) {}

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



  uploadFile(event){
    this.file = event.target.files[0];
    this.fileName = this.file.name;
    console.log(`FILE UPLOAD:~ ${this.fileName}`);
  }


  onSubmit(){
    /*
    const formData = new FormData();
    formData.append('fileName', this.fileName);
    formData.append('file', this.file);
    console.log(`FILE UPLOAD:~ ${formData}`);
    
    VVBC-SUPABASE SERVER
*/
    const data:any = {
      'title':this._title,
      'passage':this._passage,
      'description':this._description,
      'audio':this._sermonAudio,
      'facebook':this._facebook,
      'notes':this._sermonNotes,
      'date':this._date,
    }

    const res:any  = this.http.post('http://localhost:3000/addsermon', data).subscribe(
      () => console.log('Upload successful'),
      error => console.error('Upload error:', error)
    );
    alert(res.body);
    alert('success');

  }
}

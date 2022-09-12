import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment';
 
  projectForm !: FormGroup;

  constructor(){
    
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical'),
    });
  }

  onSave(){
    console.log(this.projectForm.value);
  }
}

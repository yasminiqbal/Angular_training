import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dialogue',
  templateUrl: './admin-dialogue.component.html',
  styleUrls: ['./admin-dialogue.component.css']
})
export class AdminDialogueComponent implements OnInit {
  hide = true; //for password

  username = new FormControl('', [Validators.required]);

  constructor() { }

  getErrorMessage() {
    this.username.hasError('required');
      return 'You must enter a value';
    }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  product:any;

  constructor(private api:ApiService) { 
    

  }


  ngOnInit(): void {
    this.getItem();

  }

  getItem(){
    this.api.getProduct().subscribe({
      next:(res)=> {
        this.product = res;
        // console.log(this.product)
      }
    }
    );
  }



}

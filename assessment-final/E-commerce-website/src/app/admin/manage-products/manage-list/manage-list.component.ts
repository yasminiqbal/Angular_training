import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { PopupAddProductComponent } from './popup-add-product/popup-add-product.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css']
})
export class ManageListComponent implements OnInit {
  
  displayedColumns: string[] = ["id",
    "productName",
    "category",
    "description",
    "freshness",
    "price",
    "imgPath",
    "action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog, private api: ApiService) { 

    
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(PopupAddProductComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {if(val==='save')
      {this.getAllProducts();}
    });

  }

  getAllProducts() {
    this.api.getAll()
    .subscribe(
      {
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error While fetching data")
        }
      });
  }


  editProduct(row:any){
    this.dialog.open(PopupAddProductComponent, {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>
      {if(val==='update')
      {this.getAllProducts();}
    });
  }

  deleteProduct(id:any){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert("Product deleted successfully");
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting the product")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}








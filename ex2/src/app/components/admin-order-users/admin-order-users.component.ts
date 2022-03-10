import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ICustomerOrderInformation} from 'src/app/ICustomerOrderInformation';
import { filter, Observable } from 'rxjs';
import {FillterPipe } from 'src/app/shared/fillter.pipe'
import { customerOrderInformationModel } from 'src/app/customerOrderInformationModel';
@Component({
  selector: 'app-admin-order-users',
  templateUrl: './admin-order-users.component.html',
  styleUrls: ['./admin-order-users.component.css']
})
export class AdminOrderUsersComponent implements OnInit {

  select:any;
  abc!:[]
  userOrderDeatils!:Observable<ICustomerOrderInformation []>;
  alluser!:ICustomerOrderInformation[];
  constructor(private orderDetailsService:OrderDetailsService ) { }
  values!: Observable<string[]>;

  public products : any []= [];
  TotalProductInformation:any[]=[];
  productName:any[]=[];
 
  //************** */
  totalLength:any;
  page:number=1;
  //***************** */
  result : any;
  ngOnInit(): void {
  
    this.getAllUserOrderDetails();

  }

  
  getAllUserOrderDetails(){
   
    this.orderDetailsService.getUserOrderDeatils().subscribe(
      data=>{
        this.alluser=data;
        this.products = data;
      
        
        this.products.forEach(element => {
          this.TotalProductInformation.push(this.products);  
          this.totalLength=this.products.length;
         });
         
         console.log("***************"+this.products);
    })
  }
}

import { Element, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICustomerOrderInformation } from 'src/app/customerOrderInformation';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  allProduct!:Observable<ICustomerOrderInformation []>;
   UserOrderDetails! : Observable<ICustomerOrderInformation []>;
  userName!:string;
  public products : any []= [];
  TotalProductInformation:any[]=[];
  public userAllOrder:any[]=[];
 
 
  constructor(private userService:UserService,private orderDetailsService:OrderDetailsService) { }

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(message => (this.userName= message
      ));

     var a=this.userName
     this.loadUserOrder(a);
  }
  loadUserOrder(userNameOrder:string){
 
    userNameOrder=this.userName;  
       this.userService.currentMessage.subscribe(message => (this.userName= message
        ));
      
    this.orderDetailsService.getUserNameOrder(userNameOrder)
      .subscribe(data=>{
        this.products.push(data); 
        for (var i =0;i<this.products.length;i++){
          this.userAllOrder=this.products[i];
        }
      });
  }

}

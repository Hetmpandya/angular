import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from '../../services/userservice';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

 names: User[] = []

  constructor(private router:Router,private userservice: Userservice){} 
  
  go(){
    this.router.navigate(['/form']); 
 }

 ngOnInit(){
  this.names = this.userservice.getAll();
 }

 deleteItem(index:number){
  this.userservice.delete(index);
  this.names = this.userservice.getAll();
 }

 updateItem(i: number){
    this.router.navigate(['/form', i]);
 }    


}

import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

  data: User[] = [];

  constructor(){
    const storedData = localStorage.getItem('data');
    this.data = storedData ? JSON.parse(storedData): [];
  }

  add(item:any){
    this.data.push(item);
    localStorage.setItem('data',JSON.stringify(this.data));
  }

  getAll(){
    return this.data;
  }

  delete(index:number){
    this.data.splice(index,1);
    localStorage.setItem('data',JSON.stringify(this.data));
  }

  update(index: number, updatedItem:User){
    this.data[index] = updatedItem;
    localStorage.setItem('data',JSON.stringify(this.data));
  }
}

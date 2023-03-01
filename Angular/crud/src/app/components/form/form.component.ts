import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class BodyComponent {
  userArray : User[] = [
    {username:'user',password:12134,confirmatedPassword:12134,email:'user@gmail.com',country:'España',subscription:true,city:'Madrid'},
   ]
  selectedUser:User = new User();
  
  addUser(){
    if (this.selectedUser.username == null) {
      return
    }
    this.userArray.push(this.selectedUser);

    this.selectedUser = new User();
    console.log(this.userArray)
  }
}

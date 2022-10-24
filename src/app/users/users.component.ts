import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Firestore} from '@angular/fire/firestore';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
  // form: any = {};
  form:any  = {
  }


  constructor() {
  }

  ngOnInit(): void {

  }

}


type user = {
  email:string,
  password:string,
  firstName:string,
  secondName:string,
  birthDate:Date,
}

import { Injectable } from '@angular/core';
import { CRUDService } from './crud.service';
import {
  Firestore
} from '@angular/fire/firestore';

Injectable({
  providedIn: 'root'
})
type user = {
  email:string,
  password:string,
  firstName:string,
  secondName:string,
  birthDate:Date,
}

export class UsersService extends CRUDService<user>{
  users = [];
  collectionName = 'users'
  constructor(db: Firestore) {
    super(db);
  }
}

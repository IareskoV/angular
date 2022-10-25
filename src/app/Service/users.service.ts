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
  firstName:string,
  secondName:string,
}

export class UsersService extends CRUDService<user>{
  users = [];
  collectionName = 'users'
  constructor(db: Firestore) {
    super(db);
  }
}

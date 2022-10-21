import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
interface Student {
  $key: string;
  firstName: string;
  lastName: string;
  email: string
}
@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  userRef!: AngularFireList<any>;
  usersRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddUser(student: Student) {
    this.userRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
    });
  }
  GetUsersList() {
    this.usersRef = this.db.list('students-list');
    return this.userRef;
  }
  GetUser(id: string) {
    this.userRef = this.db.object('students-list/' + id);
    return this.userRef;
  }
}

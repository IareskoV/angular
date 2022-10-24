import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import {
  CollectionReference,
  Firestore,
  Query,
  addDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  updateDoc,
  where,
  docData,
} from '@angular/fire/firestore';
interface user {
  $key: string;
  firstName: string;
  lastName: string;
  email: string
}
@Injectable({
  providedIn: 'root'
})
export abstract class CRUDService <T> {
  abstract collectionName: string;

  docsRef!: AngularFireList<any>;
  docRef!: AngularFireObject<any>;
  constructor(public db: Firestore) { }

  add(obj:T) {
    this.docsRef.push({...obj});
  }
  updateUser(id: string, obj: T){
    const docRef = doc(this.db, this.collectionName, id);
    const newObject: any = { ... obj };
    return updateDoc(docRef, newObject);
  }
  delete(id:string){
    return deleteDoc(doc(this.db, this.collectionName + id));
  }
  getList() {
    return collection(this.db,this.collectionName);
  }
  get(id: string) {
    const docRef = doc(this.db, this.collectionName +id);
    return docData(docRef, { idField: 'id' })
  }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateSharedService {
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  private emitDeleteSource = new Subject<any>();
  deleteEmitted$ = this.emitDeleteSource.asObservable();
  emitDelete(del:any){
    this.emitDeleteSource.next(del);
  }
  constructor() {}
}

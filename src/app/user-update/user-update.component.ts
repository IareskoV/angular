import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UpdateSharedService } from '../Service/update-shared.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _sharedService: UpdateSharedService
  ) {}
  currentRoute = this.activatedRoute.snapshot;
  onSubmitForm(data: User) {
    this._sharedService.emitChange(data);
  }
  ngOnInit(): void {}

  form: User = {
    name: '',
    secondName: '',
    email: '',
  };
}
type User = {
  email: string;
  name: string;
  secondName: string;
};

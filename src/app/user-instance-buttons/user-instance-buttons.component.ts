import { Component, OnInit } from '@angular/core';
import { UpdateSharedService } from '../Service/update-shared.service';
@Component({
  selector: 'app-user-instance-buttons',
  templateUrl: './user-instance-buttons.component.html',
  styleUrls: ['./user-instance-buttons.component.scss'],
})
export class UserInstanceButtonsComponent implements OnInit {
  handleDelete() {
    this._sharedService.emitDelete('in the name of GOD delete me');
  }
  constructor(private _sharedService: UpdateSharedService) {
    console.log('construcor buttons');
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('destroyed buttons');
  }
}

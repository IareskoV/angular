import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Service/users.service';
import { Firestore } from '@angular/fire/firestore';
import { UpdateSharedService } from '../Service/update-shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-instance',
  templateUrl: './user-instance.component.html',
  styleUrls: ['./user-instance.component.scss'],
})
export class UserInstanceComponent implements OnInit {
  userId = '';
  changeSubscrition
  deleteSubscrition
  userInstance = {
    email: 'loading',
    id: '',
    name: 'loading',
    secondName: 'loading',
  };
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private firestore: Firestore,
    private _sharedService: UpdateSharedService
  ) {
    console.log("parent constructor")
     this.changeSubscrition=_sharedService.changeEmitted$.subscribe((data) => {
      console.log('change')
      this.updateItem(data);
    });
    this.deleteSubscrition= _sharedService.deleteEmitted$.subscribe((data)=>{
      console.log('delete')
      this.openDialog(this.userId)
    })
  }
  db = new UsersService(this.firestore);

  getuser(id: string) {
    console.log(id);
    this.db
      .get(id)
      .subscribe((ans) => (this.userInstance = ans as userInstance));
  }
  ngOnInit(): void {
    console.log("parent init")
    this.route.url.subscribe((url) => {
      this.userId = url[0].path;
      this.getuser(url[0].path);
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }
  deleteItem(id: string, name: string) {
    this.router.navigate(['/', 'users']);
    this.db.delete(id).then((ans) => {
      this.openSnackBar(`user ${name} deleted`);

    });
  }
  updateItem(data: object) {
    console.log(data);
    this.db.updateUser(this.userId, data as any).then((ans) => {

      this.router.navigate(['/', 'users', `${this.userId}`]);
      this.openSnackBar('user updated');
    });
  }
  openDialog(
    id: string,
    enterAnimationDuration = '0ms',
    exitAnimationDuration = '0ms'
  ) {
    const user = this.userInstance.name + " " + this.userInstance.secondName
    let fullName = '';
    let config = {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { name: '' },
    };

    const dialogRef = this.dialog.open(DeleteDialogComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.deleteItem(id, fullName);
      }
    });
  }
  ngOnDestroy(){
    console.log('destroyed')
    this.deleteSubscrition.unsubscribe()
    this.changeSubscrition.unsubscribe()
  }
}
type userInstance = {
  email: string;
  name: string;
  secondName: string;
  id: string;
};
type user = {
  email: string;
  name: string;
  secondName: string;
};

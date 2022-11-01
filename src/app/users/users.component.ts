import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { UsersService } from '../Service/users.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // form: any = {};
  searchForm = new FormGroup({
    search:new FormControl(''),
  })

  form: user = {
    name: '',
    secondName: '',
    email: '',
  };

  onSubmitForm(obj: any) {
    this.db.add(this.form as any).then((ans) => {
      this.openSnackBar('user created');
      this.db.getList().subscribe((obj) => {
        this.usersList = obj as any;
      });
    });
  }
  handleDelete(id: string) {
    this.openDialog(id);
  }
  deleteItem(id: string, name: string) {
    this.db.delete(id).then((ans) => {
      this.openSnackBar(`user ${name} deleted`);
      this.db.getList().subscribe((obj) => {
        this.usersList = obj as any;
      });
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000 });
  }
  openDialog(
    id: string,
    enterAnimationDuration = '0ms',
    exitAnimationDuration = '0ms'
  ) {
    const user = this.usersList.find((item) => item.id == id);
    let fullName = '';
    let config = {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { name: '' },
    };
    if (user) {
      fullName = user?.name + ' ' + user?.secondName;
      config.data.name = fullName;
    }
    const dialogRef = this.dialog.open(DeleteDialogComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.deleteItem(id, fullName);
      }
    });
  }
  usersList = [
    {
      name: 'loading',
      secondName: 'loading',
      email: 'loading',
      id: '',
    },
  ];

  constructor(
    private firestore: Firestore,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}
  db = new UsersService(this.firestore);

  ngOnInit(): void {
    this.db.getList().subscribe((obj) => {
      this.usersList = obj as any;
    });
  }
}

type user = {
  email: string;
  name: string;
  secondName: string;
};

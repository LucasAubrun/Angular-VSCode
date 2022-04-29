import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewMemoComponent } from '../new-memo/new-memo.component';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  memo6: any;
  memoPosted: any = {
    id: null,
    content: "Némo est un mémo",
    writer: {
      idWriter: 6
    },
    date: null,
  }

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.callMemo6();
  }

  callMemo6() {
    this.http.get("http://localhost:8082/memo/6")
    .subscribe({
      next: (data) => {this.memo6 = data},
      error: (err) => {console.log(err)}
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewMemoComponent)
  }

}



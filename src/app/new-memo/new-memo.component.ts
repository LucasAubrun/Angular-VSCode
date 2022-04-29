import { HttpClient } from '@angular/common/http';
import {Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-memo',
  templateUrl: './new-memo.component.html',
  styleUrls: ['./new-memo.component.css']
})
export class NewMemoComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<NewMemoComponent>) { }

  ngOnInit(): void {
  }

  createMemo(val: any) {
    let memo = {content: val.content, writer: {idUser: 6}};
    console.log(memo);
    this.http.post("http://localhost:8082/memo/write", memo)
    .subscribe({
    next: (data) => {this.dialogRef.close()},
    error: (err) => {console.log(err)}
    });
    ;
  }

  

}

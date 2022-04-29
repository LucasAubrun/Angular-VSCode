import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publique',
  templateUrl: './publique.component.html',
  styleUrls: ['./publique.component.css']
})
export class PubliqueComponent implements OnInit {

  memos: any;
  nom: any;

  // Injection Http donc il faut créer la variable dans le constructeur
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Je suis sur publique");
    this.nom = "Lucas le beau gosse";
    this.callMemoAll();
  }

  // Affiche dans la console, peut être utile pour débuguer
  logMemoAll() {
    this.http.get("http://localhost:8082/memo/all")
    .subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)}
    });
  }

  callMemoAll() {
    this.http.get("http://localhost:8082/memo/all")
    .subscribe({
      next: (data) => {this.memos = data},
      error: (err) => {console.log(err)}
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public data = {
    "name": "Oscar Alvarez",
    "edad": 35,
    "Estado": "Soltero"
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}

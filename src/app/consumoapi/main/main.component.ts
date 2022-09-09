import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { RickmortyService } from './../../servicios/rickmorty.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public characters: any[] = []

  constructor(
    private rickMorty: RickmortyService,

    // private router: Router,
  ) {

    this.rickMorty.getCharacters().subscribe(result => {

      //this.characters=this.rickMorty.getCharacters()

      console.log(result)

    })
  }

  ngOnInit(): void {
  }

}

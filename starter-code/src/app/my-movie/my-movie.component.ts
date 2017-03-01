import { Component, OnInit } from '@angular/core';
import {Cinema} from '../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  //providers: [Cinema]
})
export class MyMovieComponent implements OnInit {
  movie: Object = {};
  id: number;

  constructor(public cinema: Cinema, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params
      .subscribe((params) => this.id = +params['id']);
    this.movie = this.cinema.getMovie(this.id);
  }


}

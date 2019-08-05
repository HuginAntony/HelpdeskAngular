import { AppConfig } from './../services/app.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = AppConfig.settings.message;

  constructor() { }

  ngOnInit() {
  }

}

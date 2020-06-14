import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote(quote){
    console.log("Quote: ", quote);
  }

}

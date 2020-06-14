import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  newQuote = new Quote();
  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

}

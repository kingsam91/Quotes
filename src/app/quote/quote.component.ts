import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [];

  constructor() { 

    console.log("Quotes: ", this.quotes);

  }

  ngOnInit(): void {
  }

  addNewQuote(quote){
    let quotesLength = this.quotes.length;
    const quoteObj = {
      author: quote.author,
      submitter: quote.submitter,
      quote: quote.quote,
      upvotes: 0,
      downvotes: 0,
      createdAt: new Date().toString()
    }
    this.quotes.push(quoteObj)
  }

}

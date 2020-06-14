import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote(quote) {
    const quoteObj = {
      author: quote.author,
      submitter: quote.submitter,
      quote: quote.quote,
      upvotes: 0,
      downvotes: 0,
      createdAt: new Date().toString(),
      showDetails: false
    }
    this.quotes.push(quoteObj)
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

}

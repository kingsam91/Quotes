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

  upvoteQuote(index){
    this.quotes[index].upvotes =  this.quotes[index].upvotes + 1
  }
  downvoteQuote(index){
    this.quotes[index].downvotes =  this.quotes[index].downvotes + 1
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
 
}

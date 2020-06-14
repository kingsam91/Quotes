import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../models/quote.model'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}

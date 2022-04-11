import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote!: Quote;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    interface quoteInterface{
      author: string
      quote: string
    }

    this.http.get<quoteInterface>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data=>{
        this.quote = new Quote(data.author, data.quote)
    })
  }
reload() : void{
  window.location.reload()
}
  
}

import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article:Article;
  
  link:any;
  constructor() {
   }

  ngOnInit() {
  
  }

  voteUp(article){
    article.voteUp();
  }

  voteDown(article){
    article.voteDown();
  }


  // domain() is a utility function that extracts
 // the domain from a URL, which we'll explain shortly
 domain(): string {
 try {
 // e.g. http://foo.com/path/to/bar
 const domainAndPath: string = this.link.split('//')[1];
 // e.g. foo.com/path/to/bar
 return domainAndPath.split('/')[0];
 } catch (err) {
 return null;
 }
 }
}

import { Component } from '@angular/core';
import { Article } from './article-model';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles:Article[]=[];

  constructor(){

  }

  addNewArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     console.log(title.value);
     this.articles.push(new Article(title.value, link.value,0));
    return false;
  }

  sortedArticle(): Article[]{
    return this.articles.sort((a:Article,b:Article)=>
      b.votes-a.votes
    );
  }
}

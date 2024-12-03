import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistDataService } from '../fruitlist-data.service';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fontColorGood = 'green';
  fontColorBad = 'red';

  fruitlistdata = inject(FruitlistDataService);

 

  addComment(comment:string, index:number){
    this.fruitlistdata.addCommentToFruit(comment, index);
  }
}

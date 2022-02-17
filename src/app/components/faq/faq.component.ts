import {Component, Input} from '@angular/core';
//import {FaqItem} from '../../../module/faq.item';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {

  @Input()
  title = 'FAQ';

  @Input()
  multi = false;

  @Input()
  displayMode = 'default'; // or flat

//   @Input()
//   faqList: FaqItem[] = [];

}
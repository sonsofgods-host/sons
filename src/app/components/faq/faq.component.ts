import {Component, OnInit, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})


export class FaqComponent {

activedCategory : string = "Security";
  
activateSecurity(){
this.activedCategory = "Security"
}

activateMint(){
  this.activedCategory = "Mint"
  }

activateDates(){
    this.activedCategory = "Dates"
}

activateDevelopment(){
  this.activedCategory = "Development"
}


}








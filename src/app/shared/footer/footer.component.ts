import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @ViewChild('hrHand', { static: false })
  hrHand!: ElementRef;
  @ViewChild('minHand', { static: false })
  minHand!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      const date = new Date();
      this.updateClock(date);
    }, 1000);
  }
    updateClock(date: Date){
      this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() *6 + 'deg)';
      this.hrHand.nativeElement.style.transform = 'rotate(' + (date.getHours() *30 + date.getMinutes()*0.5)+ 'deg)'; 
   }
}

import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

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
  @ViewChild('hrHandCanada',{static:false})
  hrHandCanada!:ElementRef;
  @ViewChild('minHandCanada',{static:false})
  minHandCanada!:ElementRef;
  @ViewChild('hrHandUSA',{static:false})
  hrHandUSA!:ElementRef;
  @ViewChild('minHandUSA',{static:false})
  minHandUSA!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      const date = new Date();
      this.updateClock(date);
      // https://stackoverflow.com/questions/35144821/angular-use-pipes-in-services-and-components
      var datePipe = new DatePipe("en-US");
      // let value = datePipe.transform(date, 'medium', 'UTC-5');
      // console.log(date , value)
      this.updateClock1(new Date(datePipe.transform(date, 'medium', 'UTC-5') as string));

      this.updateClock2(new Date(datePipe.transform(date, 'medium', 'UTC-5') as string));
    }, 1000);
  }
    updateClock(date: Date){
      this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() *6 + 'deg)';
      this.hrHand.nativeElement.style.transform = 'rotate(' + (date.getHours() *30 + date.getMinutes()*0.5)+ 'deg)'; 
   }
    updateClock1(date: Date){
      this.minHandUSA.nativeElement.style.transform = 'rotate(' + date.getMinutes() *6 + 'deg)';
      this.hrHandUSA.nativeElement.style.transform = 'rotate(' + (date.getHours() *30 + date.getMinutes()*0.5)+ 'deg)'; 
   }
    updateClock2(date: Date){
      this.minHandCanada.nativeElement.style.transform = 'rotate(' + date.getMinutes() *6 + 'deg)';
      this.hrHandCanada.nativeElement.style.transform = 'rotate(' + (date.getHours() *30 + date.getMinutes() *0.5)+ 'deg)'; 
   }

}

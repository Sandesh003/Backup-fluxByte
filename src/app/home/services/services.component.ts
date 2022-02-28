import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
	@ViewChild("text") text!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
	const letters = this.text.nativeElement.innerHTML.split("")
	this.text.nativeElement.innerHTML = "";
	letters.forEach((letter:string)=> {
		this.text.nativeElement.innerHTML += `<span class="letter">${letter}</span>`
	});
	gsap.set(".letter",{display: "inline-block"});
	const letterClass = gsap.fromTo(".letter",{y:30},{y:0, stagger: 0.1})
	ScrollTrigger.create({
		animation: letterClass,
		trigger:".section",
		start: "top 40%",
		end: "top 35%",
		scrub: 2
	})
	  const tl = gsap.timeline();
	  tl.fromTo(".section-title",{ scale: 1.3, opacity: 0 },{	scale: 1, opacity: 1, delay: 0.35, duration: 2.5, ease: "elastic.out(1.5,1)" })
	  	// .fromTo(".h6", {duration: 1, opacity: 0},{duration: 1, opacity: 1},"<55%")
		.fromTo("#box1, #box4", {x: -100, opacity: 0},{x: 0, opacity: 1},"<55%")
		.fromTo("#box2", {y: -200, opacity: 0},{y: 0, opacity: 1},"<55%")
		.fromTo("#box3, #box6", {x: 100, opacity: 0},{x: 0, opacity: 1},"<55%")
		.fromTo("#box5", {y: 200, opacity: 0}, {y: 0, opacity: 1},"<55%")

	ScrollTrigger.create({
		animation:tl,
		trigger:".section",
		start: "top 50%",
		end: "top top",
		scrub:2
	})

	
  }

}

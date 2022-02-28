import { Component, ElementRef, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
	selector: 'app-intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

	constructor(private el: ElementRef) { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		const tl = gsap.timeline();
		tl.fromTo(".slide-in-right", {x: -200, opacity: 0,duration: 1},{x: 0, opacity: 1,duration:1})
		  .fromTo(".slide-in-left",{x: 150, opacity: 0},{x:0, opacity: 1}, "<50%")

		ScrollTrigger.create({
			animation: tl,
			trigger: ".slider",
			start: "top top",
			end: "top -2%",
			scrub:2
		})
	}

	scrollElements = this.el.nativeElement.querySelectorAll('.js-scroll');

	elementInView = (el: any, dividend = 1) => {
		const elementTop = el.getBoundingClientReact().top;
		console.log('im in scroll function',elementTop);
		return (
			elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
		);
	} 

	elementOutofView = (el: any) => {
		const elementTop = el.getBoundingClientRect().top;
		console.log(elementTop)
		return (
			elementTop > (window.innerHeight || document.documentElement.clientHeight)
		);
	};

	displayScrollElement = (element: any) => {
		element.classList.add("scrolled");
	};

	hideScrollElement = (element: any) => {
		element.classList.remove("scrolled");
	};

	@HostListener('document:scroll')
	scrollfunction() {
		
		console.log('i am el on hostlistener')
		// debugger
		this.scrollElements.forEach((el: any) => {
			console.log(el, 'i am el')
			if (this.elementInView(el, 1.2)) {
				this.displayScrollElement(el);
				console.log('im in if');
				
			} else if (this.elementOutofView(el)) {
				this.hideScrollElement(el);
			}
		})
	};
}

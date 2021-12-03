import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel', { static : true }) carousel!: NgbCarousel
  constructor() { }

  ngOnInit(): void {
  }
  reviews = [
    {
      id: 1,
      name: "Sandesh ghone",
      job: "front-end developer",
      img:
        "../../../assets/sandesh.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem, consequatur itaque doloremque cumque dolores inventore aut corrupti expedita similique",
      bgclass: "new-york",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem, consequatur itaque doloremque cumque dolores inventore aut corrupti expedita similique",
      bgclass: "london",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem, consequatur itaque doloremque cumque dolores inventore aut corrupti expedita similique",
      bgclass: "toronto"
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem, consequatur itaque doloremque cumque dolores inventore aut corrupti expedita similique",
      bgclass: "sydney"
    },
];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}

import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Sons of Gods';

  @ViewChild('secondSection', { static: true })
  secondSection!: ElementRef<HTMLDivElement>;

  @ViewChild('header', { static: true })
  header!: ElementRef<HTMLDivElement>;

  // @ViewChild('menuSecond', { static: true })
  // menuSecond!: ElementRef<HTMLDivElement>;

  @ViewChild('imageFirst', { static: true })
  imageFirst!: ElementRef<HTMLDivElement>;

  // @ViewChild('imageSecond', { static: true })
  // imageSecond: ElementRef<HTMLDivElement>;

  isShowing = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // LOADER SECCION //
    setTimeout(() => {
      let element = document.getElementById('loader_div');
      if (element != null) {
        element.className = 'notShow';
      }
    }, 1000);

    setTimeout(() => {
      let element = document.getElementById('head');
      if (element != null) {
        element.className = 'show';
      }
    }, 1800);

    setTimeout(() => {
      this.isShowing = false;
      let element = document.getElementById('master');
      if (element != null) {
        element.className = 'master_container show';
      }
    }, 2200);

    // END LOADER SECCION //
  }

  // SCROLL SECTION //
  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,

        start: '110% center',
      } as ScrollTrigger.Vars,
      duration: 1.1,
      scale: 1.2,
      height: 250,
    });
    // gsap.to(this.imageSecond.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.imageSecond.nativeElement,
    //     scrub: true,
    //     start: '80% center',
    //   } as ScrollTrigger.Vars,
    //   duration: 1.1,
    //   scale: 1.2,
    //   height: 380,
    // });

    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center',
      } as ScrollTrigger.Vars,
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true,
        start: '150% center',
      } as ScrollTrigger.Vars,
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: true,
        start: '150% center',
      } as ScrollTrigger.Vars,
      color: '#fff',
      duration: 1.5,
    });

    gsap.from(this.document.querySelector('#about'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('#buy'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#buy'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      height: 0,
      scale: '1.3',
      opacity: 0,
    });

    gsap.from(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .heading-3'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .paragraph'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .btn--learn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .btn--learn'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as ScrollTrigger.Vars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
  }

  initialAnimations(): void {
    gsap.from(this.header.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
    // gsap.from(this.menuSecond.nativeElement.childNodes, {
    //   duration: 0.5,
    //   opacity: 0,
    //   y: -20,
    //   stagger: 0.2,
    //   delay: 0.8,
    // });
    gsap.from(this.imageFirst.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.5,
    });
    // gsap.from(this.imageSecond.nativeElement, {
    //   duration: 0.7,
    //   opacity: 0,
    //   y: -30,
    //   delay: 0.6,
    // });
    gsap.from(this.document.querySelector('.heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.7,
    });
    gsap.from(this.document.querySelector('.btn'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.8,
    });
  }

  // END SCROLL SECTION //
}

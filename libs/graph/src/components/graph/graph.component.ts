import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ngcs-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {}

  public getPositionOfChildById(id: string) {
    let element: HTMLElement = this.element.nativeElement.querySelector(`#${id}`);
    if (element) {
      let offsetLeft = element.offsetLeft + element.offsetWidth / 2;
      let offsetTop = element.offsetTop + element.offsetHeight / 2;

      while (element.parentElement !== this.element.nativeElement) {
        element = element.parentElement;
        offsetLeft += element.offsetLeft;
        offsetTop += element.offsetTop;
      }

      return {
        x: offsetLeft,
        y: offsetTop
      };
    }
    return { x: 0, y: 0 };
  }
}

import { Component, Inject, OnInit, OnChanges, Input, SimpleChanges, SimpleChange, ElementRef } from '@angular/core';

import { GraphComponent } from '../graph/graph.component';


interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'ngcs-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit, OnChanges {
  
  @Input() from: string;
  
  @Input() to: string;

  get polyLinePoints() : string {
    const start = this.startPoint;
    const end = this.endPoint;
    return `${start.x},${start.y} ${end.x},${end.y}`;
  }
  

  get startPoint() : Point {
    return this.graph.getPositionOfChildById(this.from);
  };
  get endPoint() : Point {
    return this.graph.getPositionOfChildById(this.to);
  };

  constructor(@Inject(GraphComponent) private readonly graph: GraphComponent) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['from']) {
      // const from = changes['from']
    }
  }

}

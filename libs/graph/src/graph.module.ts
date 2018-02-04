import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './components/graph/graph.component';
import { PortComponent } from './components/port/port.component';
import { ConnectionComponent } from './components/connection/connection.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GraphComponent, PortComponent, ConnectionComponent],
  exports: [GraphComponent, PortComponent, ConnectionComponent]
})
export class GraphModule {}

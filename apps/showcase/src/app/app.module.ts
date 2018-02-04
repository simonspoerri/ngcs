import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { GraphModule } from '@ngcs/graph';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), GraphModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

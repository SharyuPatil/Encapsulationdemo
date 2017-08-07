import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { HiiComponent } from './hii/hii.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AwesomeComponent } from './awesome/awesome.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiiComponent,
    DatabindingComponent,
    AwesomeComponent,
    EventBindingComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

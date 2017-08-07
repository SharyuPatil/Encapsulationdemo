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
import { InComComponent } from './in-com.component';
import { OutComComponent } from './out-com.component';
import { InterCompComComponent } from './inter-comp-com/inter-comp-com.component';
import { PanelComponent } from './panel.component';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiiComponent,
    DatabindingComponent,
    AwesomeComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    InComComponent,
    OutComComponent,
    InterCompComComponent,
    PanelComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule  } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { DataService } from './dataService';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DetailsComponentComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

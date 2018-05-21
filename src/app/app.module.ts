import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test.component';
import { QuesComponent } from './ques.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    QuesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // MaterializeModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

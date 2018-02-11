import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { QuizMaterialModule } from './quiz-material.module';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    QuizMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

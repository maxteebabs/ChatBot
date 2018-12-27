import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { BotComponent } from './bot/bot.component';
// import { BotModule } from './bot/bot.module';

import{BotService} from './bot.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    BotComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [BotService],
  bootstrap: [AppComponent]
})
export class AppModule { }

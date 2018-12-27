import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { BotService, Message } from '../bot.service';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  constructor( public chat: BotService) { }
  messages: Observable<Message[]>;
  chatInput: string;
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val));
    window.setInterval(function() {
      var elem = document.getElementById('chat_history');
      elem.scrollTop = elem.scrollHeight;
    }, 2000);
  }
  sendMessage() {
    this.chat.converse(this.chatInput);
    this.chatInput = '';
    return true;
  }

}

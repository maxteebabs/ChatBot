import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiAiClient } from '../api-ai-javascript';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }   from 'rxjs/BehaviorSubject';

//lets define our message
export class Message {
  constructor(public message: string, public sentBy: string) {}
}
@Injectable()
export class BotService {
  constructor() { }
  readonly token = environment.dialogflow.token;
  readonly client = new ApiAiClient({accessToken: this.token});

  // build our conversation
  conversation = new BehaviorSubject<Message[]>([]);

  //sends and receives messages via dialog flow
  converse(msg: string) {
    const userMsg = new Message(msg, 'user');
    this.update(userMsg);
    let status = true;    
    //send request
    this.client.textRequest(msg).then((response) =>{
      const speech = response.result.fulfillment.speech;
      const botSpeech = new Message(speech, 'bot');
      this.update(botSpeech);
    }).catch((error) => {
        status = false;
        alert(error);
    });
    return status;
  }
  update(msg : Message) {
    this.conversation.next([msg]);
  }
  // send() {
  //   var text = $speechInput.val();
  //   $.ajax({
  //     type: "POST",
  //     url: baseUrl + "query",
  //     contentType: "application/json; charset=utf-8",
  //     dataType: "json",
  //     headers: {
  //       "Authorization": "Bearer " + accessToken
  //     },
  //     data: JSON.stringify({query: text, lang: "en", sessionId: "runbarry"}),
  
  //     success: function(data) {
  //       prepareResponse(data);
  //     },
  //     error: function() {
  //       respond(messageInternalError);
  //     }
  //   });
  // }

}

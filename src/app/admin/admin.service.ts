import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../entities/message.entity';
import { PusherService } from '../services/pusher.service';


@Injectable()
export class AdminService {
  messagesStream = new ReplaySubject<Message>(1);

  constructor(
    private pusherService: PusherService
  ) {
    this.initialize();
  }

  initialize() {
    this.pusherService.messagesChannel.bind(environment.pusher.command_channel, (message) => {
      // this.emitNewMessage(message);
    });
  }

  send(message: Message) {
    this.pusherService.messagesChannel.trigger(environment.pusher.command_channel, message);
  }

  // emitNewMessage(message: Message) {
  //   this.messagesStream.next(message);
  // }
}


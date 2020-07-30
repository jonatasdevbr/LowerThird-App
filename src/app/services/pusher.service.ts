import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.initializePusher();
  }

  initializePusher(): void {
    this.pusher = new Pusher(environment.pusher.key, { authEndpoint: 'http://localhost:3000/pusher/auth' });
    this.messagesChannel = this.pusher.subscribe('private-all-messages');
  }
}

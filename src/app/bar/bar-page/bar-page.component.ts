import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BarService } from '../bar.service';
import { Message } from '../../entities/message.entity';
import { Command } from 'src/app/entities/command.enum';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.scss'],
  animations: [
    trigger('openCloseName', [
      state('open', style({
        width: '100%'
      })),
      state('closed', style({
        width: '0px'
      })),
      transition('open => closed', [
        animate('3s ease-out')
      ]),
      transition('closed => open', [
        animate('3s cubic-bezier(0.3, 0.3, 1, 0.3)')
      ]),
    ]),
    trigger('openCloseTitle', [
      state('open', style({
        width: '100%'
      })),
      state('closed', style({
        width: '0px'
      })),
      transition('open => closed', [
        animate('2.5s ease-out')
      ]),
      transition('closed => open', [
        animate('5s cubic-bezier(0.3, 0.3, 1, 0.3)') //cubic-bezier(0.4, 0, 1, 1)')
      ]),
    ]),
  ],
})
export class BarPageComponent implements OnInit {
  isOpen = false; //FALSE

  show: boolean = true;

  timeout: number;

  name: string;
  title: string;

  constructor(
    private messageService: BarService,
  ) { }

  ngOnInit(): void {
    this.messageService.messagesStream
      .subscribe(this.newMessageEventHandler.bind(this));

    // setInterval(() => {
    //   this.isOpen = !this.isOpen;
    // }, 10000);
  }

  private newMessageEventHandler(event: Message): void {
    clearTimeout(this.timeout);

    switch (event.command) {
      case Command.close:
        this.isOpen = false;
        break;

      case Command.open:
        if (!!event.name && !!event.title) {
          this.name = event.name;
          this.title = event.title;

          this.isOpen = true;

          this.timeout = setTimeout(() => {
            this.isOpen = false;
          }, event.time || 30000);

        } else {
          this.isOpen = false;
        }

        break;

      default:
        this.isOpen = false;
        break;
    }
  }

}

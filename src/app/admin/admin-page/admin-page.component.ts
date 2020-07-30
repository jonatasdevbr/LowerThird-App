import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Command } from 'src/app/entities/command.enum';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from 'src/app/entities/message.entity';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
  });

  constructor(private messageService: AdminService) { }

  ngOnInit(): void {
  }

  open() {
    var aa: Message;

    aa = this.form.value;
    aa.command = Command.open;

    this.messageService.send(aa);
  }

  close() {
    this.messageService.send({ name: '', title: '', command: Command.close });
  }

}

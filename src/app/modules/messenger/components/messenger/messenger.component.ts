import { Component, Input, OnInit } from '@angular/core';
import { IGetDialogue } from 'src/app/shared/interfaces/messenger/get.dialogue';
import { IGetMessage } from 'src/app/shared/interfaces/messenger/get.message';
import { randomString } from '../../messenger.page.component';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
})
export class MessengerComponent implements OnInit {
  @Input() dialogue: IGetDialogue;
  public messenges: IGetMessage[];

  constructor() {}

  ngOnInit(): void {
    this.messenges = Array.from({ length: 500 }).map((_, i) => {
      return {
        Id: i.toString(),
        DialogueId: '123',
        ProfileId: `${Math.floor(Math.random() * 2) + 1}`,
        SendDate: new Date(),
        Text: randomString(),
      };
    });
    console.log(this.messenges);

  }
}

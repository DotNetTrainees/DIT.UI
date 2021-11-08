import { Component, OnInit } from '@angular/core';
import { IGetDialogue } from 'src/app/shared/interfaces/messenger/get.dialogue';

@Component({
  selector: 'app-messenger-page',
  templateUrl: './messenger.page.component.html',
  styleUrls: ['./messenger.page.component.scss']
})
export class MessengerPageComponent implements OnInit {
  public selectDialogue: IGetDialogue;

  constructor() { }

  ngOnInit(): void {
    this.selectDialogue = {
      Id: '123',
      FirstMemberProfileId: '1',
      SecondMemberProfileId: '2',
      SecondMemberName: `SecondName1`,
      FirstMemberName: `FirstName2`,
      LastMessage: {
        Id: '123124',
        DialogueId: '123',
        ProfileId: '2',
        SendDate: new Date(),
        Text: randomString(),
      },
    };
  }
}

export function randomString() {
  var rnd = '';
  while (rnd.length < 25) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, 25);
}

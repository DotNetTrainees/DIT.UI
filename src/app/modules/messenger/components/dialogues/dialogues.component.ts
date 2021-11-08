import { Component, OnInit } from '@angular/core';
import { IGetDialogue } from 'src/app/shared/interfaces/messenger/get.dialogue';
import { randomString } from '../../messenger.page.component';

@Component({
  selector: 'app-dialogues',
  templateUrl: './dialogues.component.html',
  styleUrls: ['./dialogues.component.scss'],
})
export class DialoguesComponent implements OnInit {
  public dialogues: IGetDialogue[];

  constructor() {}

  ngOnInit(): void {
    this.dialogues = Array.from({ length: 500 }).map((_, i) => {
      return {
        Id: i.toString(),
        FirstMemberProfileId: i.toString(),
        SecondMemberProfileId: i.toString(),
        SecondMemberName: `SecondName${i}`,
        FirstMemberName: `FirstName${i}`,
        LastMessage: {
          Id: i.toString(),
          DialogueId: i.toString(),
          ProfileId: i.toString(),
          SendDate: new Date(),
          Text: randomString(),
        },
      };
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { IGetDialogue } from 'src/app/shared/interfaces/messenger/get.dialogue';
import { IGetMessage } from 'src/app/shared/interfaces/messenger/get.message';

@Component({
  selector: 'app-dialogues',
  templateUrl: './dialogues.component.html',
  styleUrls: ['./dialogues.component.scss'],
})
export class DialoguesComponent implements OnInit {
  public dialogues: IGetDialogue[];

  constructor() {}

  ngOnInit(): void {
    this.dialogues = [
      {
        Id: '1',
        FirstMemberProfileId: '1',
        SecondMemberProfileId: '2',
        SecondMemberName: 'string1',
        FirstMemberName: 'string11',
        LastMessage: {
          Id: '1',
          DialogueId: '1',
          ProfileId: '1',
          SendDate: new Date(),
          Text: "Hello world1!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '3',
        SecondMemberProfileId: '5',
        SecondMemberName: 'string2',
        FirstMemberName: 'string22',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world2!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
      {
        Id: '2',
        FirstMemberProfileId: '7',
        SecondMemberProfileId: '1',
        SecondMemberName: 'string3',
        FirstMemberName: 'string33',
        LastMessage: {
          Id: '2',
          DialogueId: '2',
          ProfileId: '8',
          SendDate: new Date(),
          Text: "Hello world3!"
        },
      },
    ];
  }
}

import { IGetMessage } from "./get.message";

export interface IGetDialogue {
  Id: string;
  SecondMemberProfileId: string;
  FirstMemberProfileId: string;
  SecondMemberName: string;
  FirstMemberName: string;
  LastMessage: IGetMessage;
}

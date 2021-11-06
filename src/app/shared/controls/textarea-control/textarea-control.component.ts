import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaControl),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaControl implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

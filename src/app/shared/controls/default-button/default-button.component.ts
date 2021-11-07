import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButton implements OnInit {
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

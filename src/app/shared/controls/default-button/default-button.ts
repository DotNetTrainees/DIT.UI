import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.html',
  styleUrls: ['./default-button.scss']
})
export class DefaultButton implements OnInit {
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

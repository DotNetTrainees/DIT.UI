import {
  Component,
  forwardRef,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input-control.html',
  styleUrls: ['./input-control.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControl),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputControl implements ControlValueAccessor {
  @Input() label: string;
  @Input() isValid: boolean;

  public changed: (array: any) => void;
  public touched: () => void;
  public value: any;
  public isDisabled: any;

  public valueControl = new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9,@,.]+$/i),
    Validators.minLength(8),
  ]);

  public writeValue(array: any): void {
    this.valueControl.statusChanges.subscribe(data => console.log(data));
    this.value = array;
    this.valueControl.setValue(this.value);
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  public read(value: any): void {
    this.value = value;
    this.changed(this.value);
  }
}

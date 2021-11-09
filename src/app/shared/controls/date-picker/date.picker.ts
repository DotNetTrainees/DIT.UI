import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date.picker.html',
  styleUrls: ['./date.picker.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePicker),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePicker implements ControlValueAccessor {
  @Input() placeholder: string;
  public changed: (array: any) => void;
  public touched: () => void;
  public value: any;
  public isDisabled: any;
  public valueControl = new FormControl(null, [Validators.required]);
  public writeValue(array: any): void {
    this.value = array ? array.toString().slice(0, 10) : array;
    this.valueControl.setValue(this.value);
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabled(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public read(value: string): void {
    this.value = value;
    this.changed(this.value);
  }
}

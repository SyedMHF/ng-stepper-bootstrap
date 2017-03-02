import {
    NgModule,
    ModuleWithProviders,
    Component,
    ChangeDetectionStrategy,
    HostBinding,
    Input,
} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * <ng-stepper-basic> component.
 */
@Component({
  moduleId: module.id,
  selector: 'ng-stepper-basic',
  templateUrl: 'ng-stepper-basic.html',
  styleUrls: ['ng-stepper-basic.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgStepperBasic {
  /** Color of the progress bar. */
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  private _value: number = 0;

  /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
  @Input()
  @HostBinding('attr.aria-valuenow')
  get value() { return this._value; }
  set value(v: number) { this._value = clamp(v || 0); }

  private _bufferValue: number = 0;

  /** Buffer value of the progress bar. Defaults to zero. */
  @Input()
  get bufferValue() { return this._bufferValue; }
  set bufferValue(v: number) { this._bufferValue = clamp(v || 0); }

  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  @Input()
  @HostBinding('attr.mode')
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate';

  /** Gets the current transform value for the progress bar's primary indicator. */
  _primaryTransform() {
    let scale = this.value / 100;
    return {transform: `scaleX(${scale})`};
  }

  /**
   * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
   * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
   */
  _bufferTransform() {
    if (this.mode == 'buffer') {
      let scale = this.bufferValue / 100;
      return {transform: `scaleX(${scale})`};
    }
  }
}

/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}


@NgModule({
  imports: [CommonModule, CompatibilityModule],
  exports: [NgStepperBasic, CompatibilityModule],
  declarations: [NgStepperBasic],
})
export class NgStepperBasicModule {
  /** @deprecated */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgStepperBasicModule,
      providers: []
    };
  }
}

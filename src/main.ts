import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  template: `
  <div class="button__text" i18n="@@test">
            Value

            @if (amount && amount > 0) {
              <span class="button__currency"> 123 {{ amount }}</span>
            }
          </div>
  `,
})
export class App {
  public amount: number|undefined = 123;
}

bootstrapApplication(App).catch((err) => console.error(err));

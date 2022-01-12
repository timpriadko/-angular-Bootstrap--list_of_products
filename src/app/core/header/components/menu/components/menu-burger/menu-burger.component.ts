import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBurgerComponent {
  @Input()
  menuActive: boolean;

  // @Output()
  // menuActiveStateEvent = new EventEmitter<boolean>();

  // burgerHandler(): void {
  //   // this.menuActive = !this.menuActive;
  //   console.log(['menu-burger', !this.menuActive]);
  //   this.menuActiveStateEvent.emit(!this.menuActive);
  // }
}

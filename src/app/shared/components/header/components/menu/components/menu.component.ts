import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '../../../../model/navigation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuActive: boolean = false;

  @Input()
  menuItems: MenuItem[];

  trackByFn(item): number {
    return item.id;
  }

  burgerHandler(): void {
    this.menuActive = !this.menuActive;
  }

  menuActiveStateHandler(value: boolean): void {
    console.log(value);
  }
}

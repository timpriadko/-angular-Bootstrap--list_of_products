import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input()
  langs: String[];

  @Input()
  currentLang: String;

  @Output()
  newLangEvent = new EventEmitter<string>();

  constructor() {}

  newLangHandler(value: string): void {
    this.newLangEvent.emit(value);
    console.log(['newLang', value]);
  }

  // TODO: store selected language to be able to display translated content on the selected language
}

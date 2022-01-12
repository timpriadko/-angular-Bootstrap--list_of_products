import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalCloseReason } from '../constants';

@Component({
  selector: 'ngb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class NgbdModalBasic implements OnInit {
  @Input()
  title: String;

  modalTitle: String;

  @Input()
  modalOpened: Boolean;

  @ViewChild('modalContent', { read: TemplateRef })
  modalContent: TemplateRef<any>;

  modalReference: NgbModalRef;

  @Output()
  modalCloseEvent = new EventEmitter<boolean>();

  @Output()
  modalCloseReasonEvent = new EventEmitter<string>();

  closeReason: string = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalTitle = !!this.title ? this.title : 'Change Headline';
  }

  ngOnChanges(changes) {
    if (this.modalOpened === true) {
      this.openModal(this.modalContent);
    }
  }

  openModal(modalContent) {
    this.modalReference = this.modalService.open(modalContent);
    this.modalReference.result.then(
      (result) => {
        // close
        this.closeReason = ModalCloseReason.SAVE;
        this.closeModal(false, this.closeReason);
      },
      (reason) => {
        // dismiss
        this.closeReason = ModalCloseReason.DISMISS;
        this.closeModal(false, this.closeReason);
      }
    );
  }

  closeModal(value: boolean, reason: string): void {
    this.modalCloseReasonEvent.emit(reason);
    this.modalCloseEvent.emit(value);
  }
}

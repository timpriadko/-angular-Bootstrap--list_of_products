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
        this.closeReason = 'close';
        // close
        // console.log('close');
        this.closeModal(false, this.closeReason);
      },
      (reason) => {
        // dismiss
        this.closeReason = 'dismiss';
        // console.log('Dismissed');
        this.closeModal(false, this.closeReason);
      }
    );
  }

  closeModal(value: boolean, reason: string): void {
    this.modalCloseEvent.emit(value);
    this.modalCloseReasonEvent.emit(reason);
  }
}

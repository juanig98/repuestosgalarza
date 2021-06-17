import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { consolelog } from 'src/app/helpers/funtions';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {

  loading = false

  messageForm = new FormGroup({
    inputName: new FormControl('', Validators.required),
    inputEmail: new FormControl('', Validators.email),
    inputPhone: new FormControl('', Validators.required),
    inputSubject: new FormControl(''),
    inputMessage: new FormControl(''),
  });

  constructor(private contactService: ContactService, private messageService: MessageService) { }

  ngOnInit() {  }

  sendMessage() {
    this.loading = true;

    this.contactService.sendMessage(this.messageForm.value).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: "Listo!", detail: response });
      this.loading = false;

      this.messageForm.reset();
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Ha ocurrido un error', detail: error });
      this.loading = false;
    });
  }

}

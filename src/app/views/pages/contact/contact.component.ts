import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // location: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6812.219676702602!2d-58.03325047429895!3d-31.383534775660177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade841a10f8cbb%3A0x4a4abd6d6ca14c34!2sSan%20Lorenzo%20Oeste%20939%2C%20E3202%20Concordia%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1577579169761!5m2!1ses-419!2sar";

  constructor() { }

  ngOnInit() {
  }

}

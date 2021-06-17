import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { info } from 'src/app/config/app';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  location_maps = info.location_maps;
  telephone = info.telephone;
  teltelephone = "tel:" + info.telephone;
  phone = + info.phone;
  telphone = "tel:" + info.phone;
  bussiness_name = info.bussiness_name;
  email = info.email;
  mailto = "mailto:" + info.email;
  address = info.address;

  year: string;

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    this.year = today.getFullYear().toString()
  }

}

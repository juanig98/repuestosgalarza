import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  location_maps = environment.info_commerce.location_maps;
  telephone = environment.info_commerce.telephone;
  teltelephone = "tel:" + environment.info_commerce.telephone;
  phone = + environment.info_commerce.phone;
  telphone = "tel:" + environment.info_commerce.phone;
  bussiness_name = environment.info_commerce.bussiness_name;
  email = environment.info_commerce.email;
  mailto = "mailto:" + environment.info_commerce.email;
  address = environment.info_commerce.address;

  year: string = "";

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    this.year = today.getFullYear().toString()
  }

}

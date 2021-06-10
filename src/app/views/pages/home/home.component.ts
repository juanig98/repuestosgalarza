import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners = [];
  logos = ["toyota", "hyundai", "kia", "chevrolet", "honda", "landrover", "nissan", "ford", "subaru", "lexus", "audi", "bmw"];
  cards = [
    { title: "Calidad", description: "Productos de calidad y durabilidad.", image: "calidad" },
    { title: "Envíos", description: "Realizamos envíos a todo el país.", image: "envio" },
    { title: "Experiencia", description: "Años de experiencia en el rubro.", image: "experiencia" },
    { title: "Atención", description: "Contamos con personal capacitado y motivado.", image: "atencion" }
  ]

  alt = "Repuestos - Galarza - Repuestos importados"

  constructor(
    private bannerService: BannerService,
  ) { }

  ngOnInit(): void {
    this.bannerService.getAll().subscribe(
      response => {
        this.banners = response;
      },
      error => { }
    )
  }

  public searchImage(item) {
    if (item.image == null) return `https://repuestosgalarza.local/storage/images/no_image.png`
    return `https://repuestosgalarza.local/storage/images/${item.image}`
  }

  public searchLogo(item) {
    return `https://repuestosgalarza.local/storage/images/logos/${item}_sf.png`
  }

  public searchCard(card) {
    return `https://repuestosgalarza.local/storage/images/icons/${card.image}.png`

  }
}

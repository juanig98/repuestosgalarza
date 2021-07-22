import { Component, OnInit } from '@angular/core';
import { route_api, route_api_v2 } from 'src/app/config/routes';
import { ProductCard } from 'src/app/models/ProductCard';
import { BannerService } from 'src/app/services/banner/banner.service';
import { ProductService } from 'src/app/services/product/products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Card } from 'src/app/models/Card';
import { Banner } from 'src/app/models/Banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners!: Banner[];
  featured!: ProductCard[];
  logos: string[] = ["toyota", "hyundai", "kia", "chevrolet", "honda", "landrover", "nissan", "ford", "subaru", "lexus", "audi", "bmw"];
  cards: Card[] = [
    { title: "Calidad", description: "Productos de calidad y durabilidad.", image: "calidad" },
    { title: "Envíos", description: "Realizamos envíos a todo el país.", image: "envio" },
    { title: "Experiencia", description: "Años de experiencia en el rubro.", image: "experiencia" },
    { title: "Atención", description: "Contamos con personal capacitado y motivado.", image: "atencion" }
  ]

  alt: string = "Repuestos - Galarza - Repuestos importados"
  responsiveOptions: any[] = [];

  constructor(
    private bannerService: BannerService,
    private productService: ProductService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.responsiveOptions =
      [{ breakpoint: '1024px', numVisible: 3, numScroll: 3 },
      { breakpoint: '768px', numVisible: 2, numScroll: 2 },
      { breakpoint: '560px', numVisible: 1, numScroll: 1 }];

    this.bannerService.getAll().subscribe(response => { this.banners = response; }, error => { })
    this.productService.getFeatured().subscribe(response => { this.featured = response; }, error => { })
  }

  searchCard = this.bannerService.sourceCard
  sourceProductImage = this.productService.sourceProductImage
  sourceBannerImage = this.bannerService.sourceBannerImage
  getRoute = this.productService.getRouteToProduct


  searchLogo(item: string) { return `/assets/images/logos/${item}.png` }

  toHtml(htmlTextWithStyle: string) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }
}

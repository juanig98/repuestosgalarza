import { Component, OnInit } from '@angular/core';
import { route_server } from 'src/app/config/routes';
import { ProductCard } from 'src/app/models/ProductCard';
import { BannerService } from 'src/app/services/banner/banner.service';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners = [];
  featured: ProductCard[];
  logos = ["toyota", "hyundai", "kia", "chevrolet", "honda", "landrover", "nissan", "ford", "subaru", "lexus", "audi", "bmw"];
  cards = [
    { title: "Calidad", description: "Productos de calidad y durabilidad.", image: "calidad" },
    { title: "Envíos", description: "Realizamos envíos a todo el país.", image: "envio" },
    { title: "Experiencia", description: "Años de experiencia en el rubro.", image: "experiencia" },
    { title: "Atención", description: "Contamos con personal capacitado y motivado.", image: "atencion" }
  ]

  alt = "Repuestos - Galarza - Repuestos importados"
  responsiveOptions;
  constructor(
    private bannerService: BannerService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];


    this.bannerService.getAll().subscribe(response => { this.banners = response; }, error => { })
    this.productService.getFeatured().subscribe(response => { this.featured = response; }, error => { })


  }

  public searchImage(item) {
    if (item.image == null) return `https://repuestosgalarza.local/storage/images/no_image.png`
    return `https://repuestosgalarza.local/storage/images/${item.image}`
  }

  public sourceImageProduct(filename: string) {
    return `${route_server}/storage/uploads/products/${filename}`;
  }
  public getRoute(product: ProductCard){
    return `/productos/${product.slug}`;
  }
  public searchLogo(item) { return `../../../../assets/images/logos/${item}.png` }

  public searchCard(card) { return `https://repuestosgalarza.local/storage/images/icons/${card.image}.png` }
}

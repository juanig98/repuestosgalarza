import { Component, Input, OnInit } from '@angular/core';
import { route_server } from 'src/app/config/routes';
import { Product } from 'src/app/models/Product';
import { ProductCard } from 'src/app/models/ProductCard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

  public searchImage(image: string) {
    let file_name = (image) ? image : "no_image.png";
    return `${route_server}/storage/uploads/products/${file_name}`
  }
  public queryProduct(product: ProductCard) {
    const text = 'Hola, te consulto por el siguiente producto: ' + product.title;

    const whatsapp = `https://wa.me/543456262300?text=${encodeURI(text)}`;
    const mail = `mailto:ventas@repuestosgalarza.com.ar?subject=Consulta&body=${encodeURIComponent(text)}`;

    const html =
      `
      <div class="text-center">
        <div class="p-block">

          <div class="p-m-2">
            <a class="btn rounded-lg bg-whatsapp text-white no-decoration" target="_blank" href="${whatsapp}">
              <img src="../../../../../assets/images/icons/whatsapp.png" width="20"/>
              WhatsApp
            </a>
          </div>

          <div class="p-m-2 p-mt-6">
            <a class="btn rounded-lg bg-white no-decoration text-gray" target="_blank" href="${mail}">
              <img src="../../../../../assets/images/icons/mail.png" width="20"/>
              Correo electrónico
            </a>
          </div>

        </div>
      </div>
      `


    Swal.fire({
      title: '¿Que medio le gustaría utilizar para realizar la consulta?',
      icon: 'question',
      html: html,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    // window.open('https://wa.me/543456262300?text=Quisiera%20consultar%20sobre%20la%20oferta%20de%20departamento`')
  }
}

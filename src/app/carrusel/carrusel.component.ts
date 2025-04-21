import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrusel',
  imports: [CarouselModule, CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
})
export class CarruselComponent {
  images = [
    '../../assets/slider/1.png',
    '../../assets/slider/2.png',
    '../../assets/slider/3.png',
  ];

  imagesMovil = [
    '../../assets/slider/movil/1.png',
    '../../assets/slider/movil/2.png',
    '../../assets/slider/movil/3.png',
  ];
  customOptions: OwlOptions = {
    autoplay: true,
    loop: false,
    startPosition: 0,
    margin: 10,
    nav: true, // Activar navegación
    navText: ['&#10094;', '&#10095;'], // Iconos personalizados
    dots: false, // Opcional: desactivar los puntos si no los necesitas
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrusel-2',
  imports: [CarouselModule, CommonModule],
  templateUrl: './carrusel-2.component.html',
  styleUrl: './carrusel-2.component.css',
})
export class Carrusel2Component {
  images = [
    '../../assets/slider/image-comments-user.jpg',
    '../../assets/slider/image-comments-user.jpg',
    '../../assets/slider/image-comments-user.jpg',
    '../../assets/slider/image-comments-user.jpg',
  ];
  customOptions: OwlOptions = {
    autoplay: true,
    loop: false,
    startPosition: 0,
    margin: 10,
    nav: false, // Activar navegación
    navText: ['&#10094;', '&#10095;'], // Iconos personalizados
    dots: true, // Opcional: desactivar los puntos si no los necesitas
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

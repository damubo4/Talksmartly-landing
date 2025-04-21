import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxCarousel, NgxCarouselModule } from 'ngx-carousel';
import { CarruselComponent } from './carrusel/carrusel.component';
import { Carrusel2Component } from './carrusel-2/carrusel-2.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  imports: [
    CarruselComponent,
    Carrusel2Component,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TSWeb';
  isTooltipVisible1: boolean = false;
  isTooltipVisible2: boolean = false;
  isTooltipVisible3: boolean = false;
  isTooltipVisible4: boolean = false;
  isTooltipVisible5: boolean = false;
  isTooltipQ1: boolean = false;
  isTooltipQ2: boolean = false;
  isTooltipQ3: boolean = false;
  isTooltipQ4: boolean = false;
  isTooltipQ5: boolean = false;
  isTooltipQ6: boolean = false;
  isTooltipQ7: boolean = false;
  isTooltipQ8: boolean = false;
  isTooltipVisibleIngles: boolean = false;
  isTooltipVisibleFrances: boolean = false;
  isTooltipVisibleEspanol: boolean = false;
  FormContact: FormGroup;

  private emailService = inject(EmailService);

  constructor(private formBuilder: FormBuilder) {
    this.FormContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
    });
  }

  showTooltip1() {
    this.isTooltipVisible1 = true;
  }

  hideTooltip1() {
    this.isTooltipVisible1 = false;
  }

  showTooltip2() {
    this.isTooltipVisible2 = true;
  }

  hideTooltip2() {
    this.isTooltipVisible2 = false;
  }

  showTooltip3() {
    this.isTooltipVisible3 = true;
  }

  hideTooltip3() {
    this.isTooltipVisible3 = false;
  }

  showTooltip4() {
    this.isTooltipVisible4 = true;
  }

  hideTooltip4() {
    this.isTooltipVisible4 = false;
  }

  showTooltip5() {
    this.isTooltipVisible5 = true;
  }

  hideTooltip5() {
    this.isTooltipVisible5 = false;
  }

  showTooltipQ1() {
    console.log('asdcas');
    this.isTooltipQ1 = true;
  }

  hideTooltipQ1() {
    this.isTooltipQ1 = false;
  }

  showTooltipQ2() {
    this.isTooltipQ2 = true;
  }

  hideTooltipQ2() {
    this.isTooltipQ2 = false;
  }

  showTooltipQ3() {
    this.isTooltipQ3 = true;
  }

  hideTooltipQ3() {
    this.isTooltipQ3 = false;
  }

  showTooltipQ4() {
    this.isTooltipQ4 = true;
  }

  hideTooltipQ4() {
    this.isTooltipQ4 = false;
  }

  showTooltipQ5() {
    this.isTooltipQ5 = true;
  }

  hideTooltipQ5() {
    this.isTooltipQ5 = false;
  }

  showTooltipQ6() {
    this.isTooltipQ6 = true;
  }

  hideTooltipQ6() {
    this.isTooltipQ6 = false;
  }

  showTooltipQ7() {
    this.isTooltipQ7 = true;
  }

  hideTooltipQ7() {
    this.isTooltipQ7 = false;
  }

  showTooltipQ8() {
    this.isTooltipQ8 = true;
  }

  hideTooltipQ8() {
    this.isTooltipQ8 = false;
  }

  showTooltipIngles() {
    this.isTooltipVisibleIngles = true;
  }

  hideTooltipIngles() {
    this.isTooltipVisibleIngles = false;
  }

  showTooltipFrances() {
    this.isTooltipVisibleFrances = true;
  }

  hideTooltipFrances() {
    this.isTooltipVisibleFrances = false;
  }

  showTooltipEspanol() {
    this.isTooltipVisibleEspanol = true;
  }

  hideTooltipEspanol() {
    this.isTooltipVisibleEspanol = false;
  }

  redirectToWhatsApp(phoneNumber: string, message: string) {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  }

  sendEmail() {
    if (this.FormContact.valid) {
      const formValues = this.FormContact.value;

      this.emailService
        .enviarCorreo({
          from_name: formValues.name,
          from_phone: formValues.phone,
          from_email: formValues.email,
          from_lastName: formValues.country,
        })
        .then(
          (response) => {
            console.log('Correo enviado', response);
            alert('Mensaje enviado exitosamente');
            this.FormContact.reset();
          },
          (error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje');
          }
        );
    }
  }

  redirectToApi() {
    const url = `https://api.talksmartlyacademy.com/login
    `;
    window.open(url, '_blank');
  }

  redirectToRRSS(enlace: string) {
    const url = `https:api.talksmartlyacademy.com
    `;
    window.open(enlace, '_blank');
  }
}

import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    // Inicializa EmailJS con tu User ID
    emailjs.init('VhbdXdA5NksyR26hu');
  }

  // Método para enviar correo
  enviarCorreo(datos: any) {
    return emailjs.send('service_xu8dk7c', 'template_x0dn5he', datos);
  }
}

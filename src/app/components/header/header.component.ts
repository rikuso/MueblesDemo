import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Detecta si es navegador o servidor

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngOnInit() {
    if (this.isBrowser) {
      await this.loadScrollReveal(); // Cargar animaciones
    }
  }

  // ✅ Método para cargar ScrollReveal dinámicamente
  private async loadScrollReveal() {
    const { default: ScrollReveal } = await import('scrollreveal'); // Lazy Load
    ScrollReveal().reveal('.block1', { distance: '0px' });
    ScrollReveal().reveal('.block2', { delay: 200, origin: 'right' });
    ScrollReveal().reveal('.img1', { delay: 100, origin: 'left' });
    ScrollReveal().reveal('.img2', { delay: 400, origin: 'top' });
  }
}

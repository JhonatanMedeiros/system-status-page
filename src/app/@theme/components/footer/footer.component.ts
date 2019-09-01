import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssp-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Handmade by me © 2019</span>
    <div class="socials">
      <a href="http://github.com/jhonatanMedeiros/" target="_blank" class="fab fa-github"></a>
      <a href="https://linkedin.com/in/jhonatan-hardt-de-medeiros" target="_blank" class="fab fa-linkedin"></a>
      <a href="mailto:contato@jhonatan.medeiros.com" target="_blank" class="fa fa-envelope"></a>
    </div>
  `,
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

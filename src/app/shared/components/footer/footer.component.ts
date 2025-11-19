import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { data } from '../../models/clientInfo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  langService = inject(LanguageService);
  data = data;
}

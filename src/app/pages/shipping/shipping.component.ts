import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping',
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
})
export class ShippingComponent {
  langService = inject(LanguageService);
}

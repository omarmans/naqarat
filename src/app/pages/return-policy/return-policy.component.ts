import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-return-policy',
  imports: [CommonModule],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.scss',
})
export class ReturnPolicyComponent {
  langService = inject(LanguageService);
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  isArabic = signal(true);

  toggleLanguage() {
    this.isArabic.set(!this.isArabic());
  }

  setLanguage(isArabic: boolean) {
    this.isArabic.set(isArabic);
  }

  t(arText: string, enText: string): string {
    return this.isArabic() ? arText : enText;
  }
}

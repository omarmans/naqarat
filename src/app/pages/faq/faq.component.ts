import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FAQ } from '../../shared/models/faq.model';
import { LanguageService } from '../../shared/services/language.service';
import { data } from '../../shared/models/clientInfo';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  langService = inject(LanguageService);
  openIndex = signal<number | null>(null);
  data = data;
  faqs: FAQ[] = [
    {
      questionAr: 'كيف يمكنني تتبع طلبي؟',
      questionEn: 'How can I track my order?',
      answerAr:
        'بعد إتمام الطلب، ستصلك رسالة نصية وبريد إلكتروني يحتوي على رقم التتبع. يمكنك استخدام هذا الرقم لتتبع شحنتك عبر موقعنا أو الاتصال بخدمة العملاء.',
      answerEn:
        'After completing your order, you will receive an SMS and email with a tracking number. You can use this number to track your shipment on our website or by calling customer service.',
    },
    {
      questionAr: 'ما هي طرق الدفع المتاحة؟',
      questionEn: 'What payment methods are available?',
      answerAr:
        'نقبل الدفع نقداً عند الاستلام، البطاقات الائتمانية (فيزا، ماستركارد)، المحافظ الإلكترونية (فودافون كاش، إنستا باي)، والتحويل البنكي.',
      answerEn:
        'We accept cash on delivery, credit cards (Visa, Mastercard), e-wallets (Vodafone Cash, InstaPay), and bank transfer.',
    },
    {
      questionAr: 'كم تستغرق مدة التوصيل؟',
      questionEn: 'How long does delivery take?',
      answerAr:
        'عادة ما يستغرق التوصيل من 3 إلى 7 أيام عمل داخل القاهرة والجيزة، ومن 5 إلى 10 أيام عمل للمحافظات الأخرى.',
      answerEn:
        'Delivery usually takes 3-7 business days in Cairo and Giza, and 5-10 business days for other governorates.',
    },
    {
      questionAr: 'هل التوصيل مجاني؟',
      questionEn: 'Is delivery free?',
      answerAr: 'نعم، التوصيل مجاني تماماً لجميع الطلبات في جميع أنحاء مصر.',
      answerEn:
        'Yes, delivery is completely free for all orders throughout Egypt.',
    },
    {
      questionAr: 'ما هي سياسة الإرجاع والاستبدال؟',
      questionEn: 'What is the return and exchange policy?',
      answerAr:
        'يمكنك إرجاع أو استبدال المنتج خلال 14 يوماً من تاريخ الاستلام، بشرط أن يكون المنتج في حالته الأصلية دون استخدام. الإرجاع والاستبدال مجاني.',
      answerEn:
        'You can return or exchange the product within 14 days of receipt, provided the product is in its original condition without use. Return and exchange are free.',
    },
    {
      questionAr: 'هل يوجد ضمان على المنتجات؟',
      questionEn: 'Is there a warranty on products?',
      answerAr:
        'نعم، جميع منتجاتنا تأتي مع ضمان لمدة سنة واحدة ضد عيوب الصناعة. الضمان لا يشمل الأضرار الناتجة عن سوء الاستخدام.',
      answerEn:
        'Yes, all our products come with a one-year warranty against manufacturing defects. The warranty does not cover damage from misuse.',
    },
    {
      questionAr: 'هل يمكنني تعديل أو إلغاء طلبي؟',
      questionEn: 'Can I modify or cancel my order?',
      answerAr:
        'يمكنك تعديل أو إلغاء طلبك خلال 24 ساعة من تاريخ الطلب. بعد ذلك، لن نتمكن من التعديل لأن الطلب يكون قد دخل مرحلة الشحن.',
      answerEn:
        'You can modify or cancel your order within 24 hours of placing it. After that, we cannot make changes as the order will have entered the shipping stage.',
    },
    {
      questionAr: 'كيف أعرف المقاسات المناسبة؟',
      questionEn: 'How do I know the right sizes?',
      answerAr:
        'جميع صفحات المنتجات تحتوي على جدول مقاسات مفصل. يمكنك أيضاً التواصل مع فريق خدمة العملاء لمساعدتك في اختيار المقاس المناسب.',
      answerEn:
        'All product pages contain a detailed size chart. You can also contact our customer service team to help you choose the right size.',
    },
  ];

  toggleFAQ(index: number) {
    if (this.openIndex() === index) {
      this.openIndex.set(null);
    } else {
      this.openIndex.set(index);
    }
  }
}

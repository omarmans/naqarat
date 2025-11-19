import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 7,
      nameAr: 'كرسي جلوس مريح',
      nameEn: 'Comfort Lounge Chair',
      price: 3200,
      image: '🪑',
      category: 'living',
      rating: 4.6,
      reviews: 81,
      descAr: 'كرسي مريح بتصميم عصري مثالي لغرف الجلوس',
      descEn: 'Comfortable modern lounge chair perfect for living rooms',
    },
    {
      id: 8,
      nameAr: 'طاولة قهوة راقية',
      nameEn: 'Elegant Coffee Table',
      price: 2700,
      image: '☕',
      category: 'living',
      rating: 4.8,
      reviews: 93,
      descAr: 'طاولة قهوة خشبية بتصميم راقٍ يناسب أي ديكور',
      descEn: 'Wooden coffee table with elegant design suitable for any decor',
    },
    {
      id: 9,
      nameAr: 'سرير أطفال آمن',
      nameEn: 'Safe Kids Bed',
      price: 4800,
      image: '🧸',
      category: 'bedroom',
      rating: 4.9,
      reviews: 120,
      descAr: 'سرير مخصص للأطفال بتصميم لطيف وحواف آمنة',
      descEn: 'Children’s bed with cute design and safe rounded edges',
    },
    {
      id: 10,
      nameAr: 'وحدة تلفاز خشبية',
      nameEn: 'Wooden TV Unit',
      price: 6200,
      image: '📺',
      category: 'living',
      rating: 4.7,
      reviews: 110,
      descAr: 'وحدة تلفاز خشبية واسعة مع رفوف تخزين',
      descEn: 'Wide wooden TV unit with storage shelves',
    },
    {
      id: 11,
      nameAr: 'طقم سفرة فخم',
      nameEn: 'Luxury Dining Set',
      price: 17999,
      image: '🍽️',
      category: 'dining',
      rating: 4.9,
      reviews: 150,
      descAr: 'طقم سفرة كامل يتكون من طاولة و6 كراسي بتصميم فاخر',
      descEn: 'Complete dining set with table and 6 chairs in luxurious design',
    },
    {
      id: 12,
      nameAr: 'مكتب دراسة للأطفال',
      nameEn: 'Kids Study Desk',
      price: 2999,
      image: '✏️',
      category: 'office',
      rating: 4.6,
      reviews: 64,
      descAr: 'مكتب دراسة للأطفال مع مساحة تخزين جانبية',
      descEn: 'Kids study desk with side storage space',
    },
    {
      id: 13,
      nameAr: 'كومودينو خشبي حديث',
      nameEn: 'Modern Wooden Nightstand',
      price: 2100,
      image: '🛌',
      category: 'bedroom',
      rating: 4.7,
      reviews: 72,
      descAr: 'كومودينو خشبي صغير بتصميم عصري يناسب غرف النوم',
      descEn: 'Small wooden nightstand with modern sleek design',
    },
    {
      id: 14,
      nameAr: 'كرسي مكتب مريح',
      nameEn: 'Ergonomic Office Chair',
      price: 3500,
      image: '💺',
      category: 'office',
      rating: 4.8,
      reviews: 134,
      descAr: 'كرسي مكتب مريح يدعم الظهر لفترات العمل الطويلة',
      descEn:
        'Ergonomic office chair with full back support for long work hours',
    },
    {
      id: 15,
      nameAr: 'بارتشن خشبي أنيق',
      nameEn: 'Elegant Wooden Partition',
      price: 4500,
      image: '🪟',
      category: 'living',
      rating: 4.6,
      reviews: 59,
      descAr: 'فاصل خشبي أنيق لتقسيم المساحات داخل المنزل',
      descEn: 'Elegant wooden partition for separating spaces at home',
    },
    {
      id: 16,
      nameAr: 'وحدة رفوف ديكورية',
      nameEn: 'Decorative Shelving Unit',
      price: 3800,
      image: '🖼️',
      category: 'living',
      rating: 4.7,
      reviews: 88,
      descAr: 'وحدة رفوف ديكورية للكتب والإكسسوارات المنزلية',
      descEn: 'Decorative shelving unit for books and home accessories',
    },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    if (category === 'all') return this.products;
    return this.products.filter((p) => p.category === category);
  }

  searchProducts(query: string): Product[] {
    if (!query.trim()) return this.products;
    const lowerQuery = query.toLowerCase();
    return this.products.filter(
      (p) =>
        p.nameAr.toLowerCase().includes(lowerQuery) ||
        p.nameEn.toLowerCase().includes(lowerQuery)
    );
  }
}

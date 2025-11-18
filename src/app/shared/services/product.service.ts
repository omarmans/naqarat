import { Product } from '../models/product.model';

export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      nameAr: 'كنبة مودرن فاخرة',
      nameEn: 'Luxury Modern Sofa',
      price: 15999,
      image: '🛋️',
      category: 'living',
      rating: 4.8,
      reviews: 124,
      descAr:
        'كنبة عصرية مريحة بتصميم أنيق، مصنوعة من أجود أنواع القماش والخشب الطبيعي، تتسع لـ 4 أشخاص مع وسائد إضافية',
      descEn:
        'Comfortable modern sofa with elegant design, made from premium fabric and natural wood, seats 4 people with extra cushions',
    },
    {
      id: 2,
      nameAr: 'سرير خشبي كلاسيكي',
      nameEn: 'Classic Wood Bed',
      price: 12500,
      image: '🛏️',
      category: 'bedroom',
      rating: 4.6,
      reviews: 89,
      descAr:
        'سرير من الخشب الزان الطبيعي بتصميم كلاسيكي راقي، مقاس 180×200 سم، مع تخزين أسفل السرير',
      descEn:
        'Natural beech wood bed with elegant classic design, 180×200 cm, with under-bed storage',
    },
    {
      id: 3,
      nameAr: 'طاولة طعام عائلية',
      nameEn: 'Family Dining Table',
      price: 8999,
      image: '🪑',
      category: 'dining',
      rating: 4.9,
      reviews: 156,
      descAr:
        'طاولة طعام واسعة من الخشب الصلب تتسع لـ 8 أشخاص مع 6 كراسي مريحة ومبطنة',
      descEn:
        'Spacious solid wood dining table for 8 people with 6 comfortable padded chairs',
    },
    {
      id: 4,
      nameAr: 'خزانة ملابس حديثة',
      nameEn: 'Modern Wardrobe',
      price: 9500,
      image: '🚪',
      category: 'bedroom',
      rating: 4.7,
      reviews: 92,
      descAr:
        'خزانة ملابس بأبواب منزلقة ومرآة كاملة، مساحة تخزين كبيرة مع أدراج وأرفف منظمة',
      descEn:
        'Wardrobe with sliding doors and full mirror, large storage space with organized drawers and shelves',
    },
    {
      id: 5,
      nameAr: 'رف كتب عصري',
      nameEn: 'Modern Bookshelf',
      price: 3999,
      image: '📚',
      category: 'office',
      rating: 4.5,
      reviews: 67,
      descAr:
        'رف كتب أنيق ومتين مع تصميم عصري، 5 أرفف واسعة لتنظيم الكتب والديكور',
      descEn:
        'Elegant and sturdy bookshelf with modern design, 5 wide shelves for books and decor',
    },
    {
      id: 6,
      nameAr: 'مكتب عمل خشبي',
      nameEn: 'Wooden Work Desk',
      price: 5500,
      image: '💼',
      category: 'office',
      rating: 4.7,
      reviews: 78,
      descAr:
        'مكتب عمل واسع مع أدراج تخزين، مثالي للمنزل أو المكتب، مصنوع من الخشب عالي الجودة',
      descEn:
        'Spacious work desk with storage drawers, perfect for home or office, made from high-quality wood',
    },
    {
      id: 7,
      nameAr: 'كرسي راحة مودرن',
      nameEn: 'Modern Lounge Chair',
      price: 4200,
      image: '🪑',
      category: 'living',
      rating: 4.6,
      reviews: 93,
      descAr: 'كرسي راحة مبطن بتصميم عصري، قماش ناعم ومريح مع مسند للقدمين',
      descEn:
        'Padded lounge chair with modern design, soft and comfortable fabric with footrest',
    },
    {
      id: 8,
      nameAr: 'مكتبة تلفزيون',
      nameEn: 'TV Stand',
      price: 6800,
      image: '📺',
      category: 'living',
      rating: 4.8,
      reviews: 112,
      descAr: 'مكتبة تلفزيون عصرية مع أرفف تخزين، تناسب شاشات حتى 65 بوصة',
      descEn:
        'Modern TV stand with storage shelves, suitable for screens up to 65 inches',
    },
    {
      id: 9,
      nameAr: 'طاولة قهوة زجاجية',
      nameEn: 'Glass Coffee Table',
      price: 3500,
      image: '☕',
      category: 'living',
      rating: 4.4,
      reviews: 65,
      descAr: 'طاولة قهوة أنيقة بسطح زجاجي وقاعدة معدنية، تصميم عصري وعملي',
      descEn:
        'Elegant coffee table with glass top and metal base, modern and practical design',
    },
    {
      id: 10,
      nameAr: 'كومودينو خشبي',
      nameEn: 'Wooden Nightstand',
      price: 2200,
      image: '🛏️',
      category: 'bedroom',
      rating: 4.5,
      reviews: 54,
      descAr: 'كومودينو صغير بدرجين، مثالي بجانب السرير مع تصميم كلاسيكي',
      descEn:
        'Small nightstand with 2 drawers, perfect bedside with classic design',
    },
    {
      id: 11,
      nameAr: 'مرآة حائط كبيرة',
      nameEn: 'Large Wall Mirror',
      price: 1800,
      image: '🪞',
      category: 'bedroom',
      rating: 4.7,
      reviews: 88,
      descAr: 'مرآة حائط كبيرة بإطار ذهبي فاخر، تضيف لمسة أنيقة لأي غرفة',
      descEn:
        'Large wall mirror with luxurious gold frame, adds elegant touch to any room',
    },
    {
      id: 12,
      nameAr: 'طقم كنب زاوية',
      nameEn: 'Corner Sofa Set',
      price: 22999,
      image: '🛋️',
      category: 'living',
      rating: 4.9,
      reviews: 145,
      descAr: 'طقم كنب زاوية فاخر على شكل L، يتسع لـ 7 أشخاص مع وسائد إضافية',
      descEn:
        'Luxury L-shaped corner sofa set, seats 7 people with extra cushions',
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

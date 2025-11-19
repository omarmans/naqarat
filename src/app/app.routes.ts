import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { FaqComponent } from './pages/faq/faq.component';
import { authGuard } from './shared/guards/auth.guard';
import { ReturnPolicyComponent } from './pages/return-policy/return-policy.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'نقرات - الرئيسية | Naqarat - Home',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'نقرات - المنتجات | Naqarat - Products',
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    title: 'نقرات - تفاصيل المنتج | Naqarat - Product Details',
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
    title: 'نقرات - السلة | Naqarat - Cart',
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'نقرات - الأسئلة الشائعة | Naqarat - FAQ',
  },
  {
    path: 'return-policy',
    component: ReturnPolicyComponent,
    title: 'نقرات - سياسة الإرجاع | Naqarat - Return Policy',
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    title: 'نقرات - الشحن والتوصيل | Naqarat - Shipping',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard],
    title: 'نقرات - إتمام الطلب | Naqarat - Checkout',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'نقرات - تسجيل الدخول | Naqarat - Login',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

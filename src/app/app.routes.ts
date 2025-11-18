import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

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
    path: 'login',
    component: LoginComponent,
    title: 'نقرات - تسجيل الدخول | Naqarat - Login',
  },
  {
    path: 'about',
    component: AboutUsComponent, // يمكن عمل component خاص
    title: 'نقرات - من نحن | Naqarat - About',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

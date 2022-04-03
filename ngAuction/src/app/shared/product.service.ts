import { Injectable } from '@angular/core';
import { Product } from './product';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = products;

  getProducts(): Product[] {
    return this.products.map(p => new Product(p.id, p.title,
      p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find(p => p.id === productId);
  }
}

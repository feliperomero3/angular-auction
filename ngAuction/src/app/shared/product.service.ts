import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title,
      p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product | undefined {
    return products.find(p => p.id === productId);
  }
}

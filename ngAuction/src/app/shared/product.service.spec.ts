import { TestBed, waitForAsync } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(ProductService);
    service = new ProductService();
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the products', () => {
    expect(service.getProducts().length).toBeGreaterThan(0);
  });

  it('should get a product by id', () => {
    expect(service.getProductById(1)).toBeTruthy();
  });
});

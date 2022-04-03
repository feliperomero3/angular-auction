import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>

  @Component({ selector: 'nga-search', template: '' })
  class SearchStubComponent { }

  @Component({ selector: 'nga-footer', template: '' })
  class FooterStubComponent { }

  @Component({ selector: 'nga-navbar', template: '' })
  class NavbarStubComponent { }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        SearchStubComponent,
        FooterStubComponent,
        NavbarStubComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));


  it('should create the app component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

})

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from '../../app-routing.module';
import { resourceMock } from '../../models/resourceMock';
import { AppComponent } from '../../../../../../meep/source/src/app/app.component';
import { ListComponent } from '../../../../../../meep/source/src/app/components/list/list.component';

class RouterMock {
  getCurrentNavigation() {
    return {
      extras: {
        state: resourceMock
      }
    }
  }
}

describe('DetailComponent', () => {
  let component: DetailComponent
  let fixture: ComponentFixture<DetailComponent>
  // let location: Location
  // let router: Router

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListComponent,
        DetailComponent
      ],
      providers: [
        { provide: Router, useValue: RouterMock }
      ],
      imports: [RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

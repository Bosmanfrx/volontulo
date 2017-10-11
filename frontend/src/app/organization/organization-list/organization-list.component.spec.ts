import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrganizationListComponent } from './organization-list.component';
import { OrganizationService } from '../organization.service';

describe('OrganizationListComponent', () => {
  let component: OrganizationListComponent;
  let fixture: ComponentFixture<OrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{
        provide: OrganizationService, useValue: {},
      }],
      declarations: [OrganizationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

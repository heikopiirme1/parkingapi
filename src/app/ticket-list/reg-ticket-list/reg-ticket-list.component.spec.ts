import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTicketListComponent } from './reg-ticket-list.component';

describe('RegTicketListComponent', () => {
  let component: RegTicketListComponent;
  let fixture: ComponentFixture<RegTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

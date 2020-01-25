import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirtamtionSMSComponent } from './confirtamtion-sms.component';

describe('ConfirtamtionSMSComponent', () => {
  let component: ConfirtamtionSMSComponent;
  let fixture: ComponentFixture<ConfirtamtionSMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirtamtionSMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirtamtionSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

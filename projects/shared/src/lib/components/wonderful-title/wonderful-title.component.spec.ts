import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderfulTitleComponent } from './wonderful-title.component';

describe('WonderfulTitleComponent', () => {
  let component: WonderfulTitleComponent;
  let fixture: ComponentFixture<WonderfulTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonderfulTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderfulTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

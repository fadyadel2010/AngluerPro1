import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendProComponent } from './recommend-pro.component';

describe('RecommendProComponent', () => {
  let component: RecommendProComponent;
  let fixture: ComponentFixture<RecommendProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

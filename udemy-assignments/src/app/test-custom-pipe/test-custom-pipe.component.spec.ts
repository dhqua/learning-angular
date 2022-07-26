import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomPipeComponent } from './test-custom-pipe.component';

describe('TestCustomPipeComponent', () => {
  let component: TestCustomPipeComponent;
  let fixture: ComponentFixture<TestCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCustomPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

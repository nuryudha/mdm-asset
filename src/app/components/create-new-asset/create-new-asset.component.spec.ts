import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAssetComponent } from './create-new-asset.component';

describe('CreateNewAssetComponent', () => {
  let component: CreateNewAssetComponent;
  let fixture: ComponentFixture<CreateNewAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

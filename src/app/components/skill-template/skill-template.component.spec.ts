import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTemplateComponent } from './skill-template.component';

describe('SkillTemplateComponent', () => {
  let component: SkillTemplateComponent;
  let fixture: ComponentFixture<SkillTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillTemplateComponent]
    });
    fixture = TestBed.createComponent(SkillTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

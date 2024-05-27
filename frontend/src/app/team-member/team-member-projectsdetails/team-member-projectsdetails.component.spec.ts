import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberProjectsdetailsComponent } from './team-member-projectsdetails.component';

describe('TeamMemberProjectsdetailsComponent', () => {
  let component: TeamMemberProjectsdetailsComponent;
  let fixture: ComponentFixture<TeamMemberProjectsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberProjectsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemberProjectsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberTaskAssignmentComponent } from './team-member-task-assignment.component';

describe('TeamMemberTaskAssignmentComponent', () => {
  let component: TeamMemberTaskAssignmentComponent;
  let fixture: ComponentFixture<TeamMemberTaskAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberTaskAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemberTaskAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

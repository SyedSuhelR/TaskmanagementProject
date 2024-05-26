import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMemberService } from '../../services/team-member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  newTeamMember = {
    id: 0,
    name: '',
    role: '',
    projectId: 0
  };
  editingMemberId: number | null = null;
  // teamMembers: { id: number; name: string; role: string }[] = [];
  editingProjectId: number | null = null;
  teamMembers: { id: number; name: string; role: string; projectId: number }[] = [];
  modalVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private teamMemberService: TeamMemberService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch project ID from route parameters
    this.route.queryParams.subscribe(params => {
      const projectId = params['id'];
      //console.log('Project ID:', projectId); // Log projectId for debugging
      if (projectId) {
        //console.log(this.teamMemberService.getTeamMembers(projectId));
        this.teamMembers = this.teamMemberService.getTeamMembers(projectId);
        //console.log('Team Members:', this.teamMembers); // Log teamMembers for debugging
      }
    });
  }

  addTeamMember() {
    // Fetch project ID from route parameters
    const projectId = this.route.snapshot.queryParams['id'];
    if (projectId) {
      const newMember = { ...this.newTeamMember, projectId, id: this.generateId() }; // Include generated ID
      this.teamMemberService.addTeamMember(newMember);
      // Reset the form
      this.resetMemberForm();
      // Update the list of team members directly without fetching from the service
      this.teamMembers.push(newMember); // Add the new member to the existing list
      // Close the modal
      this.modalVisible = false;
    }
}
  
  private generateId(): number {
    // Implement your logic to generate a unique ID, for example:
    return Math.floor(Math.random() * 1000); // Replace with your actual ID generation logic
  }

  deleteTeamMember(memberId: number) {
    this.teamMemberService.deleteTeamMember(memberId);
    // Fetch project ID from route parameters
    const projectId = this.route.snapshot.queryParams['id'];
    if (projectId) {
      // Update the list of team members
      this.teamMembers = this.teamMemberService.getTeamMembers(projectId);
    }
  }

  startEditingMember(memberId: number) {
    this.editingMemberId = memberId;
    // Fetch the member details from the service
    const member = this.teamMembers.find(m => m.id === memberId);
    if (member) {
      // Populate the form fields with member details for editing
      this.newTeamMember.name = member.name;
      this.newTeamMember.role = member.role;
    }
  }

  resetMemberForm() {
    // Clear the form fields and editing state
    this.editingMemberId = null;
    this.newTeamMember.name = '';
    this.newTeamMember.role = '';
  }
  openModal() {
    this.modalVisible = true;
}

closeModal() {
    this.modalVisible = false;
}

openTaskManagement(){
  this.router.navigate(['/task-assignment']);
}
}

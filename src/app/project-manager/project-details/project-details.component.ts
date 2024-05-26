import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ProjectService } from '../../services/project.service';
import { TeamMemberService } from '../../services/team-member.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  clients: { id: number; name: string }[] = [];
  projects: { id: number; clientId: number; name: string; startDate: string; dueDate: string; }[] = [];
  newProject = {
    id: 0,
    clientId: 0,
    name: '',
    startDate: '',
    dueDate: '',
  };
  newTeamMember = {
    id: 0,
    name: '',
    role: '',
    projectId: 0
  };
  editingProjectId: number | null = null;
  editingMemberId: number | null = null;
  teamMembers: { id: number; name: string; role: string; projectId: number }[] = [];

  constructor(
    private clientService: ClientService,
    private projectService: ProjectService,
    private teamMemberService: TeamMemberService
  ) {}

  ngOnInit() {
    this.clients = this.clientService.getClients();
    this.projects = this.projectService.getProjects();
  }

  getClientName(clientId: number) {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : 'Unknown';
  }

  startEditing(projectId: number) {
    this.editingProjectId = projectId;
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      this.newProject = { ...project };
      this.teamMembers = this.teamMemberService.getTeamMembers(projectId);
    }
  }

  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId);
    this.projects = this.projectService.getProjects();
  }

  addTeamMember() {
    if (this.editingProjectId !== null) {
      this.newTeamMember.projectId = this.editingProjectId;
      if (this.editingMemberId === null) {
        this.teamMemberService.addTeamMember(this.newTeamMember);
      } else {
        this.teamMemberService.updateTeamMember(this.editingMemberId, this.newTeamMember);
        this.editingMemberId = null;
      }
      this.teamMembers = this.teamMemberService.getTeamMembers(this.editingProjectId);
      this.resetMemberForm();
    }
  }

  deleteTeamMember(memberId: number) {
    this.teamMemberService.deleteTeamMember(memberId);
    this.teamMembers = this.teamMemberService.getTeamMembers(this.editingProjectId!);
  }

  startEditingMember(memberId: number) {
    this.editingMemberId = memberId;
    const member = this.teamMembers.find(m => m.id === memberId);
    if (member) {
      this.newTeamMember = { ...member };
    }
  }

  resetMemberForm() {
    this.editingMemberId = null;
    this.newTeamMember = {
      id: 0,
      name: '',
      role: '',
      projectId: this.editingProjectId !== null ? this.editingProjectId : 0
    };
  }

  onclickView(){
    
  }
}

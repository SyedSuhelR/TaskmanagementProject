import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ProjectService } from '../../services/project.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  clients: { id: number; name: string }[] = [];
  projects: { id: number; clientId: number; name: string; startDate: string; dueDate: string; }[] = [];

  constructor(
    private clientService: ClientService,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    this.clients = this.clientService.getClients();
    this.projects = this.projectService.getProjects();
  }

  getClientName(clientId: number) {
    const client = this.clients.find(c => c.id === clientId);
    return client ? client.name : 'Unknown';
  }

 
}

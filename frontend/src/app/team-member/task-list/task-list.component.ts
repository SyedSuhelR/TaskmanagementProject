import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

interface Task {
  id: number;
  TeammemberDetails: string;
  clientInformation: {
    name: string;
    projectName: string;
    email: string;
  };
  title: string;
  createdDate: string;
  Completeddate: string;
  status: string;
  priority: string;
  newTeammemberDetails: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  selectedClient: any;
  taskOptions: string[] = [];
  teamMembers: string[] = [];
  currentUser = { username: 'user123' }; // Assuming currentUser is obtained from authentication
  loading: boolean = false; // Add a loading state

  private dummyTasks: Task[] = [];

  constructor(private router: Router, private ngZone: NgZone) { }

  async fetchTasks() {
    this.loading = true; // Set loading to true when fetching starts
    try {
      const response = await fetch('https://run.mocky.io/v3/c36b0969-d52c-4af7-9c80-d2dfb4586f22');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Task[] = await response.json();
      this.ngZone.run(() => {
        this.dummyTasks = data;
        this.loading = false; // Set loading to false when fetching ends
        this.loadTasks(); // Ensure tasks are loaded after data is fetched
      });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      this.ngZone.run(() => {
        this.loading = false; // Set loading to false even if there is an error
      });
    }
  }

  ngOnInit() {
    this.fetchTasks(); // Fetch tasks on initialization
  }

  loadTasks(filterParams: any = {}) {
    const itemsPerPage = 5;
    const startIndex = (this.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let filteredTasks = this.dummyTasks;

    if (filterParams.status) {
      filteredTasks = this.dummyTasks.filter(task => task.status === filterParams.status);
    }

    this.tasks = filteredTasks.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
    this.taskOptions = [...new Set(filteredTasks.map(task => task.title))];
    this.teamMembers = [...new Set(filteredTasks.map(task => task.TeammemberDetails))];
  }

  onFilterChanged(filterParams: any) {
    this.currentPage = 1;
    this.loadTasks(filterParams);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadTasks();
    }
  }

  onStatusChange(task: Task) {
    console.log(`Status of task ${task.id} changed to ${task.status}`);
  }

  onPriorityChange(task: Task) {
    console.log(`Priority of task ${task.id} changed to ${task.priority}`);
  }

  viewDetails(taskId: number) {
    this.router.navigate(['/task', taskId]);
  }

  showClientDetails(task: Task) {
    this.selectedClient = task.clientInformation;
    console.log('Client Information:', this.selectedClient);
  }

  showClientDetailsHeader() {
    console.log('Clicked on client information header');
  }

  onTaskTitleChange(task: Task) {
    console.log(`Task title of task ${task.id} changed to ${task.title}`);
  }

  reassignTask(task: Task) {
    console.log(`Task ${task.id} reassigned to ${task.newTeammemberDetails}`);
  }
}

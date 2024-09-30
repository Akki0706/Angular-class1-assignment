import { Injectable } from '@angular/core';
import { Task } from './Interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 0;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    task.id = ++this.idCounter;
    this.tasks.push(task);
  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

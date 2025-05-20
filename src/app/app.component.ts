import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  [x: string]: any;
  title = 'MyApp';
  newTask: string = '';
  tasks: Task[] = [];
  get getCompletedTasks():number {
    return this.tasks.filter((task) => task.completed).length;
  };
  addTask() {
    console.log(this.newTask);

    if (this.newTask.trim()) {
      this.tasks.push({
        task: this.newTask,
        completed: false,
      });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {    
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  removeChecked() {
    this.tasks = this.tasks.filter((task) => !task.completed);
  }

  editTask(event: Event ){
    console.log(event);
    
  }
}

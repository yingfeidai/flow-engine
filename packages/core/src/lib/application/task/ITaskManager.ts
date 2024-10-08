import { ITaskProperties } from '../../domain/task/ITask';

export interface ITaskManager {
  addTask(task: ITaskProperties): Promise<void>;
  removeTask(taskId: string): Promise<void>;
  getTask(taskId: string): Promise<ITaskProperties | undefined>;
  getAllTasks(): Promise<ITaskProperties[]>;
  getPendingTasks(): Promise<ITaskProperties[]>;
  getFailedTasks(): Promise<ITaskProperties[]>;
  startTask(taskId: string): Promise<void>;
  cancelTask(taskId: string): Promise<void>;
  updateTaskPosition(taskId: string, newPosition: number): Promise<void>;
  updateTaskStep(taskId: string, newStep: number): Promise<void>;
}

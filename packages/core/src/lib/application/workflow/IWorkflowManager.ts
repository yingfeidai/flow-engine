import { IWorkflowProperties } from '../../domain/workflow/IWorkflow';

export interface IWorkflowManager {
  startWorkflow(workflowId: string): Promise<void>; // Start the workflow
  stopWorkflow(workflowId: string): Promise<void>;
  restartWorkflow(workflowId: string): Promise<void>;
  pauseWorkflow(workflowId: string): Promise<void>; // Pause the workflow
  resumeWorkflow(workflowId: string): Promise<void>; // Resume the workflow
  cancelWorkflow(workflowId: string): Promise<void>; // Cancel the workflow

  addWorkflow(workflow: IWorkflowProperties): Promise<void>; // Add a workflow
  removeWorkflow(workflowId: string): Promise<void>; // Remove a workflow
  getWorkflow(workflowId: string): Promise<IWorkflowProperties | undefined>; // Get a workflow by ID
  getAllWorkflows(): Promise<IWorkflowProperties[]>; // Get all workflows
}

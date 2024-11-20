import { Schema, model, Document, Types } from 'mongoose';
import { workflowStatusEnum, WorkflowStatusEnum } from '../../domain/workflow/WorkflowStatusEnum';


interface ITask {
  taskId: Types.ObjectId;
  position: number;
  step: number;
  dependsOn?: Types.ObjectId[];
}

interface IWorkflow extends Document {
  name?: string;
  description?: string;
  status: WorkflowStatusEnum;
  createdAt: Date;
  updatedAt: Date;
  tasks: ITask[];
  concurrencyLimit: number;
  retryStrategy: {
    maxRetries: number;
    retryDelay: number;
  };
}

const workflowSchema = new Schema<IWorkflow>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: Object.values(workflowStatusEnum),
    default: workflowStatusEnum.PENDING,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  tasks: [
    {
      taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
      position: { type: Number, required: true },
      step: { type: Number, required: true },
      dependsOn: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
    }
  ],
  concurrencyLimit: {
    type: Number,
    default: 1,
  },
  retryStrategy: {
    maxRetries: {
      type: Number,
      default: 3,
    },
    retryDelay: {
      type: Number,
      default: 3000,
    },
  },
});

export const Workflow = model<IWorkflow>('Workflow', workflowSchema);

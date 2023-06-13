import { pipe } from 'fp-ts/lib/function'
import { io as IO } from 'fp-ts'
import {
  addJobToQueue,
  addProcessorToQueue,
  attachEventHandlerToQueue,
  getQueue,
} from './queues'
import { BulkSubmissionUploadJob } from './types/BulkSubmissionJob'
import { bulkSubmissionUploadProcessor } from './processors/bulkSubmissionProcessor'
import { JobQueue } from './types/JobQueue'

const BULK_SUBMISSION_UPLOAD_QUEUE_NAME = 'bulk-submission-upload-queue'

export const setupBulkSubmissionQueue = () => {
  return pipe(
    getQueue<BulkSubmissionUploadJob>(BULK_SUBMISSION_UPLOAD_QUEUE_NAME),
    IO.chainFirst(addProcessorToQueue(bulkSubmissionUploadProcessor)),
    IO.chainFirst(attachEventHandlerToQueue('error')(console.error)),
    IO.chainFirst(attachEventHandlerToQueue('failure')(console.error))
  )
}

export const BulkSubmissionUploadJobQueue: JobQueue<BulkSubmissionUploadJob> = {
  addJob: addJobToQueue(
    getQueue<BulkSubmissionUploadJob>(BULK_SUBMISSION_UPLOAD_QUEUE_NAME)()
  ),
}
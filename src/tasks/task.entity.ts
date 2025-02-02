enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}

const task = new Task()

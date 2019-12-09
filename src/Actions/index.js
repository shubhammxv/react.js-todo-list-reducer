export const onChange = (value) => ({
    type: 'ON_CHANGE',
    currentTask: value
})

export const onAdd = () => ({
    type: 'ON_ADD',
    taskId: Date.now()
})

export const onMarkComplete = (taskId) => ({
    type: 'ON_MARK_COMPLETE',
    taskId
})

export const onMarkIncomplete = (taskId) => ({
    type: 'ON_MARK_INCOMPLETE',
    taskId
})
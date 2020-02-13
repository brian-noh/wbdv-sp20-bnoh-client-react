export const CREATE_LESSON = "CREATE_LESSON"

export const DELETE_LESSON = "DELETE_LESSON"

export const deleteLesson = (lessonId) =>({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
})


// export const updateModule = (title) => ({
//
//
//
// })

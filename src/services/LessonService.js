export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260i/modules/${moduleId}/lessons
`)
        .then(response => response.json())



export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const createLesson = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260i/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers:{
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

// export const updateModule = (courseId, module) =>
//     fetch(`http://wbdv-generic-server.herokuapp.com/api/001272260i/courses/${courseId}/modules`, {
//         method: 'PUT',
//         body: JSON.stringify(module.title),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })

export const findAllLesson = () =>
    fetch("http://wbdv-generic-server.herokuapp.com/api/001272260i/lessons")
        .then(response => response.json())

export default {
    deleteLesson,
    findLessonsForModule,
    createLesson,
    findAllLesson
}
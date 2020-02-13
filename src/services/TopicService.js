export const findTopicsForLessons = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260i/topics/${lessonId}/lessons
`)
        .then(response => response.json())



export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260i/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const createTopic = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260i/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({title: "New Topic"}),
        headers:{
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

// export const updateTopic = (courseId, module) =>
//     fetch(`http://wbdv-generic-server.herokuapp.com/api/001272260i/courses/${courseId}/modules`, {
//         method: 'PUT',
//         body: JSON.stringify(module.title),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })

export const findAllTopic = () =>
    fetch("http://wbdv-generic-server.herokuapp.com/api/001272260i/topics")
        .then(response => response.json())

export default {
    deleteTopic,
    findTopicsForLessons,
    createTopic,
    findAllTopic
}
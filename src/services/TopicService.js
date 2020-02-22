
export const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/lessons/${lessonId}/topics`, {
method: "POST",
    body: JSON.stringify(topic),
    headers: {
    'content-type': 'application/json'
}
}).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/lessons/${lessonId}/topics`)
.then(response => response.json())

export const updateTopic = async (topicId,topic) =>
{
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/topics/${topicId}`, {
    method: 'PUT',
        body: JSON.stringify(topic),
    headers: {
    'content-type': 'application/json'
}
})
return await response.json()
}

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/modules/${topicId}`, {
method: "DELETE"
})
.then(response => response.json())

export default{
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic
}
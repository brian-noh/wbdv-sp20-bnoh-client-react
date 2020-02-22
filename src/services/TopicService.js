
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





export default{
    findTopicsForLesson,
    createTopic,

}
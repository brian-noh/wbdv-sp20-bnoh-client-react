export const findModuleForCourse = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001272260i/courses/${courseId}/modules`)
        .then(response => response.json())



export const deleteModule = (moduleId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001272260i/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const createModule = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001272260i/courses/${courseId}/modules`, {
            method: "POST",
            body: JSON.stringify({title: "New Module"}),
            headers:{
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())

export const updateModule = (courseId, module) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001272260i/courses/${courseId}/modules`, {
        method: 'PUT',
        body: JSON.stringify(module.title),
        headers: {
            'content-type': 'application/json'
        }
    })

export const findAllModules = () =>
    fetch("http://wbdv-generic-server.herokuapp.com/api/001272260i/modules")
        .then(response => response.json())

export default {
    deleteModule,
    findModuleForCourse,
    createModule,
    updateModule,
    findAllModules
}
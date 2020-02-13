export const CREATE_MODULE = "CREATE_MODULE"

export const deleteModule = (moduleId) =>({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const updateModule = (module) => ({
    type: "UPDATE_MODULE",
    newModule: module
})


export const DELETE_MODULE = "DELETE_MODULE"
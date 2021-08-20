interface Name {
    name: string
    lastName: string
}
export const getPersonalIcon = ( nameEmployee:Name ) => {
    return `${nameEmployee.name.substring(0, 1).toUpperCase()}${nameEmployee.lastName.substring(0, 1).toUpperCase()}`
};
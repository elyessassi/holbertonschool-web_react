export function getCurrentYear() {
    let dataobj = new Date()
    return dataobj.getFullYear()
}

export function getFooterCopy(isIndex) {
    if (isIndex == true) {
        return 'Holberton School'
    } else {
        return "Holberton School main dashboard"
    }
}

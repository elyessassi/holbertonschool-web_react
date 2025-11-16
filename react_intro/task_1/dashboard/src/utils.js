export function getCurrentYear() {
    let dataobj = new Date()
    return dataobj.getFullYear()
}

export function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard"
}
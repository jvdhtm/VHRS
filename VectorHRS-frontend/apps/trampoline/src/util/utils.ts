export function toNumber(value: any): number {
    if (value == null) return 0;
    if (typeof value === "number") return value;
    return parseInt(value, 10);
}

export function toString(value: any): string {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return `${value}`;
}

export function includeChildren(list: any, idField = 'id',
                        parentIdField = 'parentId',
                        childNodesField = 'childNodes') {
    const indexed = []; 
    // first pass - get the array indexed by the primary id  
    for (const key in list) {
        if (Object.prototype.hasOwnProperty.call(list, key)) {
            const element = list[key];
            indexed[element[idField]] = element;
            indexed[element[idField]][childNodesField] = [];
        }
    } 
      

    //second pass  
    for (const key in indexed) {
        if (Object.prototype.hasOwnProperty.call(indexed, key)) {
            const element = indexed[key];
            if(element[parentIdField]){
                indexed[element[parentIdField]][childNodesField].push(element)
            }
        }

    }

    return indexed;
}
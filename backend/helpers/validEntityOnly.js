const validEntityOnly = ({validEntities = [], objectData}) => {
    let retVal = {};
    let objectDataKeys = Object.keys(objectData);

    objectDataKeys.forEach((element, index) => {
        if(validEntities.includes(element)) {
            retVal[element]= objectData[element];
        }
    });
    
    return retVal;
}

module.exports = validEntityOnly;
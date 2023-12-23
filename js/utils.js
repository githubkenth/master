const postData = async(url = "", method = 'POST', data = {}) => {
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

const getData = async(url = "") => {
    const response = await fetch(url);
    return response.json();
}

const cleanJson = (objectData) => {
    let retVal = {};

    let objectDataKeys = Object.keys(objectData);

    objectDataKeys.forEach((key) => {
        if(objectData[key] != '') {
            retVal[key] = objectData[key]
        }
    });

    return retVal;
}
export {
    postData,
    getData,
    cleanJson
};
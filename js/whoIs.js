const whoIs = (key = '') => {
    let localStorageData = localStorage.getItem('userAuth');
    localStorageData = JSON.parse(localStorageData);
    
    return key == '' ? localStorageData : localStorageData[key];
}

module.exports = whoIs;
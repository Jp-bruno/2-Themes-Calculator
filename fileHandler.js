var fs = require('fs');

function fileHandler(fileName, successHanlder, errorHandler) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            errorHandler(err)
        } else {
            successHanlder(data)
        }
    })
}

module.exports = fileHandler
'use strict';

//a function which accepts nothing but returns someting//

const getDate = function () {
    return new Date().toISOString();
}
let _date = getDate();
console.log(`Date: ${_date}`);

_date = getDate();
console.log(`Date: ${_date}`);

_date = getDate();
console.log(`Date: ${_date}`);

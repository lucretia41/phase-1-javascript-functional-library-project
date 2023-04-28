//create fucntions library
//The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
// use alert on myEach function
//thisArg can be used on this function


function myEach(collection, alert) {
    const newCollection = Object.values(collection).map(x => alert(x));
    return collection;
}


// also using map method can create own mymap to create new collection plugging in callback and collection

function myMap(collection, callback) {
    const newCollection = Object.values(collection)
    return newCollection.map(callback)
}



//myReduce function reduces a value when passed an initail value
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. can take up to 4 arguments such as in this instance collection, callback, accummulator or (acc) in this case

function myReduce(collection, callback, acc) {
    const newCollection = Object.values(collection)
    if (acc) {
        return newCollection.reduce(callback, acc)

    } else {
        return newCollection.reduce(callback)
    }

}

//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. in this case we are looking for a true or false arguments predicate and collection

function myFind(collection, predicate) {
    const newCollection = Object.values(collection)
    return newCollection.find(predicate)

}

//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
//myFilter 
// 1) correctly filters for values that the callback evaluates as true
// 2) correctly returns an empty array if no matching values are found
// myFilter(collection, predicate)

//collection (either an object or an array)
//predicate (a callback function that returns true or false)
//Return value: An array
//Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). If no matching values are found, it should return an empty array.

function myFilter(collection, predicate) {
    const newCollection = Object.values(collection)
    return newCollection.filter(predicate)

}

//The size accessor property of Set instances returns the number of (unique) elements in this set.

// 1) correctly returns the size of the collection when an array is passed
//2) correctly returns the size of the collection (amount of keys) when an object is passed
//get the length/size of the collection

function mySize(collection) {
    const newCollection = Object.values(collection)
    return newCollection.length

}

//myFirst(array, [n])
// 1) returns the first element of the collection
// 2) returns the first n elements of the collection when the second optional argument (n) is provided
// use slice() method



function myFirst(array, n) {
    if (n) {
        return array.slice(0, n)

    } else {
        return array[0]
    }
}


//myLast
//myLast(array, [n])

//return the last element of the collection
//return the last n element of the collection when the optional second argument is provided (n)
// also use slice


function myLast(array, n) {
    if (n) {
        return array.slice(-n)

    } else {
        return parseInt(array.slice(-1))
    }

}

// myKeys(object)



function myKeys(object) {
    return Object.keys(object)

}

//myValues(object)

function myValues(object) {
    return Object.values(object)

}






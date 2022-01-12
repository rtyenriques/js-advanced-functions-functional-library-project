function myEach(collection, callback) {
    if (collection.isArray){
    for (let i=0; i < collection.length; i++);{
            callback(collection[i]);
          }
        
        };
    // else(); {

    // }

    

    

    // else(collection.isObject); {
    //     for(const element in collection) {
    //             return callback(element)
    //         }
    
    // }
//      else (collection == {}); {
//     for(const element in collection) {
//         return callback(element)
//     }
// }          
    // for (const el of collection)
    //     return callback(el)
    // if (collection === [])  
    //     for (const el of collection)
    //     return callback(el)
    //    let alert =  collection.forEach(element => {
    //         return callback(element) }
    //     // });
    
    // // collection.forEach(element => {
    // //     return callback(element)
    // // });
    // else (collection === {})
    // for(const element in collection) {
    //     return callback(element)
    // }
    return collection
}

/* Task 1 */
let mystudents = ["ahmad","anas","ali",["widad","layan","esraa"]]; 
for (let i = 0; i < mystudents.length; i++) {
    
    if(Array.isArray(mystudents[i])){
        for (let j = 0; j < mystudents[i].length; j++) {
            console.log(mystudents[i][j].toUpperCase())
        }
    }
    else{
        console.log(mystudents[i].toUpperCase())
    }
}
    

/* Task 2 */
let numbers = [90,67,11,44];

//ميثود بتضيف عنصر لاخر الاريي
numbers.push(50) //=>90 67 11 44 50

// ميثود بتحذف اخر عنصر بالاريي
numbers.pop()  //=> 90 67 11 44

//بترجع العنصر حسب الاندكس الي بحدده
numbers.at(3) //=>44

// ميثود بترتب العناصر تصاعديا (وبحالة الاحرف بترتب الاحرف ابجديا)
numbers.sort() // => 11 44 67 90 

//بترتب العناصر عكسيا او تنازليا
numbers.reverse() // =>90 67 44 11

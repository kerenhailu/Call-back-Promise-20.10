// -צרו פונקציה שמקבלת פונקציה ,
// ופונקצית פרינט מדפיסה ללוג הלו,
// הפונקציה שמקבלת מבצעת את פעלת ההדפסה -
// function print(functionPrint) {
//   functionPrint();
// }
// print(() => {
//   console.log("hello");
// });
// ----------------דרך 2

// function print(functionPrint) {
//   functionPrint("hello");
// }
// print((same) => {
//   console.log(same);
// });
//! סדר פעולות סנכרוני
//!קודם כל הפונקציה פרינט
//!דבר שני הפונקציה פונה לארגומנט שזה הקול באק
//!דבר שלישי בתוך בקול באק יש לנו פונקציה לוק אז נפעיל את הלוק
//!זה עובד לפני הסטאק במבנה נתונים שזה המחסנית .

//!promise

// let MyPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });
// MyPromise.then(res=>{console.log(res);})
// .catch(rej=>{console.log(rej);})

// ============================================
// צרו אובייקט של פרומיס עם פונקציה ריקה, עם resolve reject.
// צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "hello" במקרה של הצלחה.
// צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "goodbye" במקרה של כישלון.
// צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "yes" במקרה של הצלחה ואת המילה "no" במקרה של כישלון.
// צרו אובייקט של פרומיס עם פונקציה שמחזירה את המילה "yes" במקרה של הצלחה ואת המילה "no" במקרה של כישלון, הדפיסו את התוצאות של הפונקציה ללוג.

let promise = new Promise((resolve, reject) => {});
let promise_hello = new Promise((resolve, reject) => {
  if (true) {
    resolve("hello");
  } else {
    reject();
  }
});
promise_hello
  .then((wordOfTrue) => {
    console.log(wordOfTrue);
  })
  .catch((wordOfFalse) => {
    wordOfFalse;
  });
// ==================================================
let promise_goodbye = new Promise((resolve, reject) => {
  if (false) {
    resolve("ok");
  } else {
    reject("goodbye");
  }
});

promise_goodbye
  .then((good) => {
    console.log(good);
  })
  .catch((NotGood) => {
    console.log(NotGood);
  });
// =================================================
let promiseYesOrNo = new Promise((resolve, reject) => {
  if (true) {
    resolve("yes");
  } else {
    resolve("no");
  }
});
promiseYesOrNo
  .then((veryGood) => {
    console.log(veryGood);
  })
  .catch((tryAgain) => {
    console.log(tryAgain);
  });
// ====================הוספנו פונקציה ====================
function PromiseFun(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("yes");
    } else {
      reject("no");
    }
  });
}
PromiseFun(true)
  .then((toIt) => {
    console.log(toIt);
  })
  .catch((TryAgain) => {
    console.log(TryAgain);
  });

// צרו פונקציה שמקבלת מספר, הפונקציה מחזירה אובייקט של פרומיס,
//  אם המספר גדול מ10 היא מחזירה "big" במקרה שהוא קטן מחזירה "small"
// , הדפיסו את התוצאות של הפונקציה ללוג.

function FunctionPromise_num(num) {
  return new Promise((resolve, reject) => {
    num > 10 ? resolve("big") : reject("small");
  });
}
FunctionPromise_num(22)
  .then((big) => {
    console.log(big);
  })
  .catch((small) => {
    console.log(small);
  });
// ===================================================
function promiseName(params) {
  return new Promise((resolve, reject) => {
    params.length > 4 ? resolve("long name") : reject("short name");
  });
}
promiseName("keren")
  .then((lenghtGood) => {
    console.log(lenghtGood);
  })
  .catch((lenghtBad) => {
    console.log(lenghtBad);
  });

// ===================================================
// צרו פונקציה שמקבלת מערך שמות ושם,
//  הפונקציה מחזירה אובייקט של פרומיס, אם השם מופיע היא מחזירה "name exist"
//  במקרה שהוא לא מופיע מחזירה "  no name", הדפיסו את התוצאות של הפונקציה ללוג.

function ArrayName(array, Name) {
  return new Promise((resolve, reject) => {
    array.indexOf(Name)!=-1?resolve("name exist"):reject("no name");
  });
}
ArrayName(["lior","eden","keren","avi"],"keren").then((NameIn)=>{console.log(NameIn);}).catch((NameOut)=>{console.log(NameOut);})
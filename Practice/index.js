 const createCounter = function () {
    let count = 0;

    return {
        click: function () {
            return count += 1;
        },
        getCount: function () {
            return count;
        }
    }
 };

 const counter = createCounter();

 counter.click();
 counter.click();
 counter.click();

 console.log(counter.getCount());

 console.log(count);

 counsole.log(counter.count);



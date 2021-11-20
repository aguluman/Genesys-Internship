var Observer = function() {
    return {
        notify: function(index, message)
        {
            console.log(`Observer ${index} is notified. The message is - ${message}`)
        }
    };
};

var Subject = function (){
    var observers = [];

    return {
        subscribe: function(observer) {
            observers.push(observer);
        },
        unsubscribe: function(pbservers) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index +1, 1);
            }
        },
        notify: function(observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers[index].notify(index, "This is a message for a particular observer");
            }
        }
    }
};

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.subscribe(observer4);

subject.notify(observer2);
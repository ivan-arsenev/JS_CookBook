function getObjectValue<T extends Object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}

const user = {
    name: 'userName',
    age: 24,
    activity: 'golf',
    human: true,
};

console.log(getObjectValue(user, 'activity'));
console.log(getObjectValue(user, 'human'));

class Collection<T extends Number | String> {
    constructor(private _items: T[] = []) {}
    add(item: T) {
        this._items.push(item);
    }
    remove(item: T) {
        this._items = this._items.filter(el => el !== item);
    }
    get items(): T[] {
        return this._items;
    }
}

const stringCollection = new Collection<String>([
    `I`,
    `create`,
    `some`,
    `collection`,
]);
stringCollection.add('wow');
stringCollection.remove('wow');

const numberCollection = new Collection<Number>([1, 2, 4, 2]);
numberCollection.add(2);
numberCollection.remove(8);

interface Car {
    model: string;
    year: number;
}
function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car as Car;
}

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020,
};

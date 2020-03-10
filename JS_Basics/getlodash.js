function getProp(object, keys, defaultVal) {
    keys = Array.isArray(keys) ? keys : keys.split('.'); // проверка на массив, если нет то делаем массив
    object = object[keys[0]]; // Задаем начальную позицию в объекте
    if (object && keys.length > 1) {
        return getProp(object, keys.slice(1), defaultVal); // через рекурсию достаем по ключу значения в объекте
    }
    return object === undefined ? defaultVal : object; // достучавшись до конца, достаем объект или дефолт
}

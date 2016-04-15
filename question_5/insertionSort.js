/**
 * Created by sunzh on 4/15/2016.
 */

function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        for (var j = i; j > 0 && value < a[j - 1]; j--) {
            a[j] = a[j - 1];
            a[j - 1] = value;
        }
    }
    return array;
}


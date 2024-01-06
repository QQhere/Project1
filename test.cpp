#include <stdio.h>
#include <stdio.h>
int listSequencOfInteger(int n) {
    int arr[901];
    int i = 100;
    while (i < 1000) {
        if ( i%n == 0 ) {
            arr[i] = i;
            i += n;
        } else {
            i++;
        }
    }
    return 0;
}
# C Visualizer Plus - Full C Code Examples 

Below are all the C sample programs, extracted exactly as they appear in the list, each under its topic name.

---

## 1. memory_layout

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char value_global_init[] = "Global Init";
char value_global_uninit[15];

void show_static_and_stack();

int main() {
    char *value_heap_malloc;
    char *value_heap_calloc;
    char *value_heap_realloc;

    value_heap_malloc = (char*)malloc(30 * sizeof(char));
    if (value_heap_malloc == NULL) {
        printf("Heap part - malloc: Allocation failed\n");
        return 1;
    }
    strcpy(value_heap_malloc, "Dynamically allocated string.");
    printf("Heap part - malloc: %s\n", value_heap_malloc);

    value_heap_calloc = (char*)calloc(30, sizeof(char));
    if (value_heap_calloc == NULL) {
        printf("Heap part - calloc: Allocation failed\n");
        free(value_heap_malloc);
        return 1;
    }
    strcpy(value_heap_calloc, value_heap_malloc);
    printf("Heap part - calloc: %s\n", value_heap_calloc);

    value_heap_realloc = (char*)realloc(value_heap_calloc, 60 * sizeof(char));
    if (value_heap_realloc == NULL) {
        printf("Heap part - realloc: Allocation failed\n");
        free(value_heap_calloc);
        free(value_heap_malloc);
        return 1;
    }
    strcat(value_heap_realloc, " With more reallocated content");
    printf("Heap part - realloc: %s\n", value_heap_realloc);

    strcpy(value_global_uninit, "Global Uninit");
    printf("Global part - Initialized: %s\n", value_global_init);
    printf("Global part - Uninitialized (BSS): %s\n", value_global_uninit);

    show_static_and_stack();

    printf("Text part: main() and show_static_and_stack() are in the Text segment.\n");

    free(value_heap_malloc);
    free(value_heap_realloc);
    return 0;
}

void show_static_and_stack() {
    static char value_static_init[] = "Static Init";
    static char value_static_uninit[15];
    strcpy(value_static_uninit, "Static Uninit");

    char value_stack[] = "Stack Var";
    printf("Stack part: %s\n", value_stack);
    printf("Static part - Initialized (Data): %s\n", value_static_init);
    printf("Static part - Uninitialized (BSS): %s\n", value_static_uninit);
}
```

---

## 2. all_topics

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Point {
    int x;
    int y;
};

int add(int a, int b) {
    return a + b;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

void scaleArray(int *arr, int len, int factor) {
    int i;
    for (i = 0; i < len; i++) {
        arr[i] = arr[i] * factor;
    }
}

int main() {
    int   age    = 30;
    float pi     = 3.14f;
    char  grade  = 'A';
    double e     = 2.71828;
    printf("age=%d pi=%.2f grade=%c e=%.5f\n", age, pi, grade, e);

    int a = 17, b = 5;
    printf("%d+%d=%d  %d%%%d=%d\n", a, b, a + b, a, b, a % b);

    int score = 82;
    if (score >= 90) printf("Grade: A\n");
    else if (score >= 80) printf("Grade: B\n");
    else printf("Grade: C or below\n");

    int sum = 0, i;
    for (i = 1; i <= 5; i++) sum += i;
    printf("sum 1..5 = %d\n", sum);

    int n = 3;
    while (n > 0) {
        printf("countdown %d\n", n);
        n--;
    }

    int day = 2;
    switch (day) {
        case 1: printf("Mon\n"); break;
        case 2: printf("Tue\n"); break;
        default: printf("Other\n");
    }

    int s = add(4, 9);
    int f = factorial(5);
    printf("add=%d factorial(5)=%d\n", s, f);

    int nums[5] = {10, 20, 30, 40, 50};
    int total = 0;
    for (i = 0; i < 5; i++) total += nums[i];
    printf("array total=%d\n", total);

    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int gridSum = 0;
    int r, c;
    for (r = 0; r < 2; r++) {
        for (c = 0; c < 3; c++) {
            gridSum += grid[r][c];
            grid[r][c] = grid[r][c] * 2;
        }
    }
    printf("grid sum=%d, grid[1][2] after doubling=%d\n", gridSum, grid[1][2]);

    char name[] = "Visualizer";
    printf("name=%s length=%d\n", name, (int)strlen(name));

    struct Point p1;
    p1.x = 3;
    p1.y = 4;
    printf("point=(%d,%d)\n", p1.x, p1.y);

    int target = 99;
    int *ptr = &target;
    *ptr = 100;
    printf("target via pointer=%d\n", target);

    int small[3] = {1, 2, 3};
    scaleArray(small, 3, 10);
    printf("scaled: %d %d %d\n", small[0], small[1], small[2]);

    int *heapArr = (int*)malloc(4 * sizeof(int));
    for (i = 0; i < 4; i++) heapArr[i] = i * i;
    printf("heap: %d %d %d %d\n", heapArr[0], heapArr[1], heapArr[2], heapArr[3]);
    free(heapArr);
    heapArr = NULL;

    printf("Done.\n");
    return 0;
}
```

---

## 3. hello

```c
#include <stdio.h>

int main() {
    printf("Hello! I am Md. Anisur Rahman.\n");
    printf("Welcome to our C Visualizer Plus!\n");
    return 0;
}
```

---

## 4. variables

```c
#include <stdio.h>

// Global variable for the extern demo
int global_gold = 500;

// Simple Structure 
struct Point {
    int x;
    int y;
};

int main() {
    // 1. Basic Types
    int a = 10;
    float b = 3.14f;
    char c = 'A';
    double d = 2.71828;
    
    // 2. Constant Type
    const double PI = 3.1416;

    // 3. String & Array
    char str[10] = "Anisur ";
    int matrix[3] = {10, 20, 30};

    // 4. Pointer
    int *ptr = &a;

    // 5. Static
    static int count = 1;

    // 6. Structure instance
    struct Point pt = {15, 25};

    // Output Prints
    printf("1. Basic Types:\n");
    printf("int a = %d\n", a);
    printf("float b = %f\n", b);
    printf("char c = %c\n", c);
    printf("double d = %f\n\n", d);

    printf("2. Constant Type:\n");
    printf("double PI = %f\n\n", PI);

    printf("3. Arrays & Strings:\n");
    printf("string str = %s\n", str);
    printf("array index 0 = %d\n\n", matrix[0]);

    printf("4. Pointers:\n");
    printf("pointer value = %d\n", *ptr);
    
    printf("5. Static:\n");
    printf("static count = %d\n\n", count);

    printf("6. Structure:\n");
    printf("struct point = (%d, %d)\n", pt.x, pt.y);

    return 0;
}
```

---

## 5. const

```c
#include <stdio.h>

int main() {
    const double PI = 3.1415926535;
    const double RADIUS = 5.0;
    
    const double AREA = PI * RADIUS * RADIUS;
    const double CIRCUMFERENCE = 2.0 * PI * RADIUS;

    printf("Radius: %.2f\n", RADIUS);
    printf("Area: %.4f\n", AREA);
    printf("Circumference: %.4f\n", CIRCUMFERENCE);

    return 0;
}
```

---

## 6. arithmetic

```c
#include <stdio.h>

int main() {
    int a = 15;
    int b = 4;
    int sum  = a + b;
    int diff = a - b;
    int prod = a * b;
    int quot = a / b;
    int rem  = a % b;
    printf("%d + %d = %d\n", a, b, sum);
    printf("%d - %d = %d\n", a, b, diff);
    printf("%d * %d = %d\n", a, b, prod);
    printf("%d / %d = %d\n", a, b, quot);
    printf("%d %% %d = %d\n", a, b, rem);
    return 0;
}
```

---

## 7. if_else

```c
#include <stdio.h>

int main() {
    int score = 75;
    char grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    printf("Score: %d\n", score);
    printf("Grade: %c\n", grade);
    return 0;
}
```

---

## 8. for_loop

```c
#include <stdio.h>
int main() 
{
    int i;
    for (i = 1; i <= 10; i++) 
    {
        printf("%d\n", i);
    }
    return 0;
}
```

---

## 9. nested_for_loop

```c
#include <stdio.h>
int main() 
{
    int i;
    int j;
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) 
    {
        for (j = 1; j <= i; j++) 
        {
            printf("%d ", j); 
        }
        printf("\n");
    }
    return 0;
}
```

---

## 10. while_loop

```c
#include <stdio.h>

int main() {
    int n = 1;
    int total = 0;
    while (n <= 5) {
        total += n;
        printf("n=%d total=%d\n", n, total);
        n++;
    }
    printf("Final: %d\n", total);
    return 0;
}
```

---

## 11. do_while

```c
#include <stdio.h>

int main() {
    int count = 1;

    do {
        printf("Count is: %d\n", count);
        count++;
    } while (count <= 5);

    return 0;
}
```

---

## 12. pattern

```c
#include <stdio.h>

int main() {
    int a, b;
    int g = 7;

    for (a = 1; a <= g; a++) {
        for (b = 1; b <= g; b++) {
           
            if (a == 3 || b == 3 || a == g - 2 || b == g - 2 || a == b || a + b == g + 1 ||((a == 1 || a == 2 || a == 3 || a == g || a == g - 1) && (b == 1 || b == 2 || b == 3 || b == g || b == g - 1))) {
                printf("*  ");
            } else {
                printf("   "); 
            }
        }
        printf("\n"); 
    }

    return 0;
}
```

---

## 13. switch_case

```c
#include <stdio.h>

int main() {
    int day = 3;
    switch (day) {
        case 1:
            printf("Monday\n");
            break;
        case 2:
            printf("Tuesday\n");
            break;
        case 3:
            printf("Wednesday\n");
            break;
        default:
            printf("Other day\n");
    }
    return 0;
}
```

---

## 14. function

```c
#include <stdio.h>

int add(int x, int y) {
    int result = x + y;
    return result;
}

int square(int n) {
    return n * n;
}

int main() {
    int a = 3;
    int b = 7;
    int s  = add(a, b);
    int sq = square(a);
    printf("add(%d,%d) = %d\n", a, b, s);
    printf("square(%d) = %d\n", a, sq);
    return 0;
}
```

---

## 15. recursion

```c
#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    int result = factorial(n);
    printf("factorial(%d) = %d\n", n, result);
    return 0;
}
```

---

## 16. array

```c
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        arr[i] = arr[i] * arr[i];
    }

    printf("1 to 5 Number's Square are:\n");
    
    for (int i = 0; i < 5; i++) {
        printf("%d -> %d\n", i+1, arr[i]);
    }
    
    return 0;
}
```

---

## 17. 2darray

```c
#include <stdio.h>  
int main()
{
    int i,j;
    int num[2][2] = {10,20,30,40};
    
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {  
            printf("value of num[%d] [%d] : %d\n",i,j,num[i][j]);
        }
    }
}
```

---

## 18. matrix_2d

```c
#include <stdio.h>

int main() {
    int matrix[2][2];

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

---

## 19. string

```c
#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "Alice";
    int len = strlen(name);
    printf("Name: %s\n", name);
    printf("Length: %d\n", len);
    return 0;
}
```

---

## 20. pointer

```c
#include <stdio.h>

int main() {
    int x = 42;
    int *p = &x;
    printf("x  = %d\n", x);
    printf("p  = %p\n", p);
    printf("*p = %d\n", *p);
    *p = 100;
    printf("After *p=100:\n");
    printf("x  = %d\n", x);
    return 0;
}
```

---

## 21. swap

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5;
    int y = 10;
    printf("Before: x=%d, y=%d\n", x, y);
    swap(&x, &y);
    printf("After:  x=%d, y=%d\n", x, y);
    return 0;
}
```

---

## 22. struct

```c
#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    struct Student student1 = {"Anisur", 25, 4.56};
    struct Student student2;
    struct Student student3;
    
    char *show_name[6] = "Zahid";
    char *name_pointer= &show_name;
    student2.name = *name_pointer;
    student2.age = 25;
    student2.gpa = 4.30;
   
    strcpy(student3.name, "Abdullah");
    student3.age = 25;
    student3.gpa = 4.94;
 

    printf("Student 1 Details:\n");
    printf("Name: %s\n", student1.name);
    printf("Age: %d\n", student1.age);
    printf("GPA: %.2f\n\n", student1.gpa);

    printf("Student 2 Details:\n");
    printf("Name: %s\n", student2.name);
    printf("Age: %d\n", student2.age);
    printf("GPA: %.2f\n\n", student2.gpa);
    
    printf("Student 3 Details:\n");
    printf("Name: %s\n", student3.name);
    printf("Age: %d\n", student3.age);
    printf("GPA: %.2f\n\n", student3.gpa);

    return 0;
}
```

---

## 23. malloc

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 4;
    int *arr = (int*)malloc(n * sizeof(int));
    int i;
    for (i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }
    for (i = 0; i < n; i++) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }
    free(arr);
    arr = NULL;
    printf("Memory freed.\n");
    return 0;
}
```

---

## 24. fibonacci

```c
#include <stdio.h>

int main() {
    int a = 0, b = 1, c, i;
    printf("Fibonacci:\n");
    printf("%d\n", a);
    printf("%d\n", b);
    for (i = 2; i < 8; i++) {
        c = a + b;
        printf("%d\n", c);
        a = b;
        b = c;
    }
    return 0;
}
```

---

## 25. r_fibo

```c
#include <stdio.h>

int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
int main() {
    for (int i = 0; i <= 5; i++) {
        if (i == 0) {
            printf("fib(0) = 0\n");
        } else if (i == 1) {
            printf("fib(1) = 1\n");
        } else {
         printf("fib(%d) = fib(%d) + fib(%d) = %d\n", i, i - 1, i - 2, fib(i));
        }
    }
    return 0;
}
```

---

## 26. bubble_sort

```c
#include <stdio.h>

int main() {
    int arr[5] = {64, 34, 25, 12, 22};
    int n = 5;
    int i, j, temp;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    printf("Sorted: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}
```

---

## 27. binary_search

```c
#include <stdio.h>

int main() {
    int arr[6] = {2, 5, 8, 12, 16, 23};
    int target = 12;
    int low = 0, high = 5, mid;
    int found = -1;
    while (low <= high) {
        mid = (low + high) / 2;
        printf("Checking mid=%d, arr[mid]=%d\n", mid, arr[mid]);
        if (arr[mid] == target) {
            found = mid;
            break;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    printf("Found at index: %d\n", found);
    return 0;
}
```

---

## 28. scanf

```c
#include <stdio.h>

int main() {
    int a;
    int b;
    printf("Enter first number: ");
    scanf("%d", &a);
    printf("Enter second number: ");
    scanf("%d", &b);
    int sum = a + b;
    printf("Sum: %d + %d = %d\n", a, b, sum);
    return 0;
}
```

---

## 29. linear_search

```c
#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    int i;
    for (i = 0; i < n; i++) {
        if (arr[i] == key) 
        return i;
    }
    return -1;
}

int main() {
    int arr[7] = {5, 3, 8, 1, 9, 2, 7};
    int key = 9;
    int n = 7;
    printf("Array: ");
    int i;
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\nSearching for: %d\n", key);
    int result = linearSearch(arr, n, key);
    if (result != -1)
        printf("Found at index: %d\n", result);
    else
        printf("Not found\n");
    return 0;
}
```

---

## 30. selection_sort

```c
#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, minIdx, temp;
    for (i = 0; i < n - 1; i++) {
        minIdx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
        printf("Pass %d: ", i + 1);
        int k;
        for (k = 0; k < n; k++) 
        printf("%d ", arr[k]);
        printf("\n");
    }
}

int main() {
    int arr[6] = {64, 25, 12, 22, 11, 90};
    int n = 6;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    selectionSort(arr, n);
    printf("Sorted: ");
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
```

---

## 31. insertion_sort

```c
#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        printf("Step %d: ", i);
        int k;
        for (k = 0; k < n; k++) 
        printf("%d ", arr[k]);
        printf("\n");
    }
}

int main() {
    int arr[6] = {12, 11, 13, 5, 6, 7};
    int n = 6;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    insertionSort(arr, n);
    printf("Sorted: ");
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
```

---

## 32. merge_sort

```c
#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[10], R[10];
    int i, j, k;
    
    for (i = 0; i < n1; i++) 
    L[i] = arr[l + i];
    
    for (j = 0; j < n2; j++) 
    R[j] = arr[m + 1 + j];
    
    i = 0; j = 0; k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) 
        { 
           arr[k] = L[i]; 
           i++; 
        }
           else{ 
           arr[k] = R[j]; 
           j++; 
        }
        k++;
    }
    while (i < n1) { 
        arr[k] = L[i]; i++; 
        k++; 
        }
    while (j < n2) { 
    arr[k] = R[j]; 
    j++; 
    k++; 
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
        printf("Merged [%d..%d]: ", l, r);
        int i;
        for (i = l; i <= r; i++) 
        printf("%d ", arr[i]);
        printf("\n");
    }
}

int main() {
    int arr[6] = {38, 27, 43, 3, 9, 82};
    int n = 6;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    mergeSort(arr, 0, n - 1);
    printf("Sorted: ");
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
```

---

## 33. quick_sort

```c
#include <stdio.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1, j, temp;
    for (j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp;
        }
    }
    temp = arr[i + 1]; 
    arr[i + 1] = arr[high]; 
    arr[high] = temp;
    printf("Pivot %d placed at index %d\n", pivot, i + 1);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[7] = {10, 7, 8, 9, 1, 5, 3};
    int n = 7;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    quickSort(arr, 0, n - 1);
    printf("Sorted: ");
    for (i = 0; i < n; i++) 
    printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
```

---

## 34. stack_array

```c
#include <stdio.h>
#define MAX 10

int stack[MAX];
int top = -1;

void push(int val) {
    if (top >= MAX - 1) { printf("Stack overflow!\n"); return; }
    stack[++top] = val;
    printf("Pushed %d  (top=%d)\n", val, top);
}

int pop() {
    if (top < 0) { printf("Stack underflow!\n"); return -1; }
    int v = stack[top--];
    printf("Popped %d  (top=%d)\n", v, top);
    return v;
}

int peek() { return (top >= 0) ? stack[top] : -1; }

int main() {
    push(10);
    push(20);
    push(30);
    printf("Peek: %d\n", peek());
    pop();
    pop();
    printf("Peek: %d\n", peek());
    pop();
    pop();
    return 0;
}
```

---

## 35. queue_array

```c
#include <stdio.h>
#define MAX 8

int queue[MAX];
int front = 0, rear = -1, size = 0;

void enqueue(int val) {
    if (size >= MAX) { printf("Queue full!\n"); return; }
    rear = (rear + 1) % MAX;
    queue[rear] = val;
    size++;
    printf("Enqueued %d  (front=%d rear=%d size=%d)\n", val, front, rear, size);
}

int dequeue() {
    if (size == 0) { printf("Queue empty!\n"); return -1; }
    int v = queue[front];
    front = (front + 1) % MAX;
    size--;
    printf("Dequeued %d  (front=%d rear=%d size=%d)\n", v, front, rear, size);
    return v;
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    dequeue();
    dequeue();
    enqueue(50);
    dequeue();
    dequeue();
    dequeue();
    return 0;
}
```

---

## 36. linked_list

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node* createNode(int data) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = data;
    n->next = NULL;
    return n;
}

void printList(struct Node *head) {
    struct Node *cur = head;
    printf("List: ");
    while (cur != NULL) {
        printf("%d -> ", cur->data);
        cur = cur->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node *head = NULL;
    struct Node *n1 = createNode(10);
    struct Node *n2 = createNode(20);
    struct Node *n3 = createNode(30);
    struct Node *n4 = createNode(40);
    head = n1;
    n1->next = n2;
    n2->next = n3;
    n3->next = n4;
    printList(head);
    printf("Head: %d\n", head->data);
    printf("Head->next: %d\n", head->next->data);
    struct Node *newNode = createNode(15);
    newNode->next = n1->next;
    n1->next = newNode;
    printList(head);
    return 0;
}
```

---

## 37. linked_list_delete

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node* newNode(int d) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = d; n->next = NULL; return n;
}

struct Node* deleteNode(struct Node *head, int key) {
    struct Node *temp = head;
    struct Node *prev = NULL;
    if (temp != NULL && temp->data == key) {
        head = temp->next;
        free(temp);
        printf("Deleted head %d\n", key);
        return head;
    }
    while (temp != NULL && temp->data != key) {
        prev = temp; temp = temp->next;
    }
    if (temp == NULL) { printf("%d not found\n", key); return head; }
    prev->next = temp->next;
    free(temp);
    printf("Deleted %d\n", key);
    return head;
}

void print(struct Node *h) {
    printf("List: ");
    while (h) { printf("%d -> ", h->data); h = h->next; }
    printf("NULL\n");
}

int main() {
    struct Node *head = newNode(10);
    head->next = newNode(20);
    head->next->next = newNode(30);
    head->next->next->next = newNode(40);
    print(head);
    head = deleteNode(head, 20);
    print(head);
    head = deleteNode(head, 10);
    print(head);
    head = deleteNode(head, 99);
    print(head);
    return 0;
}
```

---

## 38. stack_linked_list

```c
#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

struct Node *top = NULL;

void push(int val) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = top;
    top = n;
    printf("Pushed %d\n", val);
}

int pop() {
    if (!top) { printf("Underflow\n"); return -1; }
    int v = top->data;
    struct Node *t = top;
    top = top->next;
    free(t);
    printf("Popped %d\n", v);
    return v;
}

int peek() { return top ? top->data : -1; }

int main() {
    push(5);
    push(15);
    push(25);
    printf("Peek: %d\n", peek());
    pop();
    printf("Peek: %d\n", peek());
    pop();
    pop();
    pop();
    return 0;
}
```

---

## 39. queue_linked_list

```c
#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };
struct Node *front = NULL; *rear = NULL;

void enqueue(int val) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val; n->next = NULL;
    if (!rear) { front = rear = n; }
    else { rear->next = n; rear = n; }
    printf("Enqueued %d\n", val);
}

int dequeue() {
    if (!front) { printf("Empty\n"); return -1; }
    int v = front->data;
    struct Node *t = front;
    front = front->next;
    if (!front) rear = NULL;
    free(t);
    printf("Dequeued %d\n", v);
    return v;
}

int main() {
    enqueue(100);
    enqueue(200);
    enqueue(300);
    dequeue();
    enqueue(400);
    dequeue();
    dequeue();
    dequeue();
    return 0;
}
```

---

## 40. bst_insert

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left; *right;
};

struct Node* newNode(int d) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = d; n->left = n->right = NULL; return n;
}

struct Node* insert(struct Node *root, int d) {
    if (!root) { printf("Insert %d as new node\n", d); return newNode(d); }
    if (d < root->data) {
        printf("Go left  from %d\n", root->data);
        root->left  = insert(root->left,  d);
    } else if (d > root->data) {
        printf("Go right from %d\n", root->data);
        root->right = insert(root->right, d);
    } else {
        printf("%d already exists\n", d);
    }
    return root;
}

void inorder(struct Node *root) {
    if (!root) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

int main() {
    struct Node *root = NULL;
    root = insert(root, 50);
    root = insert(root, 30);
    root = insert(root, 70);
    root = insert(root, 20);
    root = insert(root, 40);
    root = insert(root, 60);
    root = insert(root, 80);
    printf("Inorder: ");
    inorder(root);
    printf("\n");
    return 0;
}
```

---

## 41. bst_search

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left; *right;
};

struct Node* newNode(int d) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = d; n->left = n->right = NULL; return n;
}

struct Node* insert(struct Node *root, int d) {
    if (!root) return newNode(d);
    if (d < root->data) root->left  = insert(root->left,  d);
    else if (d > root->data) root->right = insert(root->right, d);
    return root;
}

int search(struct Node *root, int key) {
    if (!root) { printf("Not found\n"); return 0; }
    printf("Visiting %d\n", root->data);
    if (root->data == key) { printf("Found %d!\n", key); return 1; }
    if (key < root->data)  return search(root->left,  key);
    else                   return search(root->right, key);
}

int main() {
    struct Node *root = NULL;
    int vals[7] = {50, 30, 70, 20, 40, 60, 80};
    int i;
    for (i = 0; i < 7; i++) root = insert(root, vals[i]);
    printf("Search 40:\n");
    search(root, 40);
    printf("Search 99:\n");
    search(root, 99);
    return 0;
}
```

---

## 42. tree_traversal

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left; *right;
};

struct Node* newNode(int d) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = d; n->left = n->right = NULL; return n;
}

void inorder(struct Node *r)  { if(!r) return; inorder(r->left);  printf("%d ", r->data); inorder(r->right); }
void preorder(struct Node *r) { if(!r) return; printf("%d ", r->data); preorder(r->left);  preorder(r->right); }
void postorder(struct Node *r){ if(!r) return; postorder(r->left); postorder(r->right); printf("%d ", r->data); }

int main() {
    struct Node *root = newNode(1);
    root->left        = newNode(2);
    root->right       = newNode(3);
    root->left->left  = newNode(4);
    root->left->right = newNode(5);
    root->right->left = newNode(6);
    root->right->right= newNode(7);
    printf("Inorder   (L Root R): "); inorder(root);   printf("\n");
    printf("Preorder  (Root L R): "); preorder(root);  printf("\n");
    printf("Postorder (L R Root): "); postorder(root); printf("\n");
    return 0;
}
```

---

## 43. graph_bfs

```c
#include <stdio.h>
#define V 6

int adj[V][V];
int visited[V];
int queue[V];
int qFront = 0, qRear = -1, qSize = 0;

void enqueue(int v) { queue[++qRear] = v; qSize++; }
int  dequeue()      { qSize--; return queue[qFront++]; }

void addEdge(int u, int v) { adj[u][v] = 1; adj[v][u] = 1; }

void bfs(int start) {
    int i;
    for (i = 0; i < V; i++) visited[i] = 0;
    visited[start] = 1;
    enqueue(start);
    printf("BFS from %d: ", start);
    while (qSize > 0) {
        int node = dequeue();
        printf("%d ", node);
        for (i = 0; i < V; i++) {
            if (adj[node][i] && !visited[i]) {
                visited[i] = 1;
                enqueue(i);
            }
        }
    }
    printf("\n");
}

int main() {
    int i, j;
    for (i = 0; i < V; i++)
        for (j = 0; j < V; j++) adj[i][j] = 0;
    addEdge(0, 1); addEdge(0, 2);
    addEdge(1, 3); addEdge(1, 4);
    addEdge(2, 5);
    bfs(0);
    return 0;
}
```

---

## 44. graph_dfs

```c
#include <stdio.h>
#define V 6

int adj[V][V];
int visited[V];

void addEdge(int u, int v) { adj[u][v] = 1; adj[v][u] = 1; }

void dfs(int node) {
    visited[node] = 1;
    printf("%d ", node);
    int i;
    for (i = 0; i < V; i++) {
        if (adj[node][i] && !visited[i])
            dfs(i);
    }
}

int main() {
    int i, j;
    for (i = 0; i < V; i++) for (j = 0; j < V; j++) adj[i][j] = 0;
    for (i = 0; i < V; i++) visited[i] = 0;
    addEdge(0, 1); addEdge(0, 2);
    addEdge(1, 3); addEdge(1, 4);
    addEdge(2, 5);
    printf("DFS from 0: ");
    dfs(0);
    printf("\n");
    return 0;
}
```

---

## 45. hash_table

```c
#include <stdio.h>
#define SIZE 10

int hashTable[SIZE];

void init() { int i; for(i=0;i<SIZE;i++) hashTable[i] = -1; }
int  hash(int key) { return key % SIZE; }

void insert(int key) {
    int idx = hash(key);
    int start = idx;
    while (hashTable[idx] != -1) {
        idx = (idx + 1) % SIZE;
        if (idx == start) { printf("Table full!\n"); return; }
    }
    hashTable[idx] = key;
    printf("Insert %d at index %d\n", key, idx);
}

int search(int key) {
    int idx = hash(key);
    int start = idx;
    while (hashTable[idx] != -1) {
        if (hashTable[idx] == key) { printf("Found %d at index %d\n", key, idx); return idx; }
        idx = (idx + 1) % SIZE;
        if (idx == start) break;
    }
    printf("%d not found\n", key);
    return -1;
}

int main() {
    init();
    insert(5); insert(15); insert(25);
    insert(3); insert(13);
    search(15);
    search(7);
    int i;
    printf("Table: ");
    for (i = 0; i < SIZE; i++) printf("[%d]=%d ", i, hashTable[i]);
    printf("\n");
    return 0;
}
```

---

## 46. matrix_multiply

```c
#include <stdio.h>

int main() {
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[3][2] = {{7, 8}, {9, 10}, {11, 12}};
    int C[2][2] = {{0, 0}, {0, 0}};
    int i, j, k;
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            for (k = 0; k < 3; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
            printf("C[%d][%d] = %d\n", i, j, C[i][j]);
        }
    }
    return 0;
}
```

---

## 47. string_reverse

```c
#include <stdio.h>
#include <string.h>

void reverseStr(char s[]) {
    int n = strlen(s);
    int i;
    for (i = 0; i < n / 2; i++) {
        char temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
}

int main() {
    char str[] = "Hello, World!";
    printf("Original: %s\n", str);
    reverseStr(str);
    printf("Reversed: %s\n", str);

    char pal[] = "racecar";
    printf("\nIs '%s' a palindrome? ", pal);
    char copy[20];
    strcpy(copy, pal);
    reverseStr(copy);
    if (strcmp(pal, copy) == 0) printf("Yes\n");
    else printf("No\n");
    return 0;
}
```

---

## 48. string_ops

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char s1[50] = "Hello";
    char s2[50] = "World";
    printf("s1=%s  s2=%s\n", s1, s2);
    printf("strlen(s1)=%d\n", (int)strlen(s1));
    printf("strcmp(s1,s2)=%d\n", strcmp(s1, s2));
    strcat(s1, " ");
    strcat(s1, s2);
    printf("After strcat: %s\n", s1);
    char s3[50];
    strcpy(s3, s2);
    printf("strcpy s3=%s\n", s3);
    int i;
    for (i = 0; s3[i]; i++) s3[i] = toupper(s3[i]);
    printf("toupper: %s\n", s3);
    return 0;
}
```

---

## 49. pointer_arith

```c
#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;
    int i;
    printf("Using pointer arithmetic:\n");
    for (i = 0; i < 5; i++) {
        printf("*(p+%d) = %d  addr=%p\n", i, *(p + i), (p + i));
    }
    p++;
    printf("After p++: *p = %d\n", *p);
    p += 2;
    printf("After p+=2: *p = %d\n", *p);
    p--;
    printf("After p--: *p = %d\n", *p);
    return 0;
}
```

---

## 50. double_pointer

```c
#include <stdio.h>

void doubleIt(int **pp) {
    **pp = **pp * 2;
}

int main() {
    int x = 5;
    int *p = &x;
    int **pp = &p;
    printf("x   = %d\n", x);
    printf("*p  = %d\n", *p);
    printf("**pp= %d\n", **pp);
    doubleIt(pp);
    printf("After doubleIt:**pp = %d\n", **pp);
    printf("x is now = %d\n", x);
    return 0;
}
```

---

## 51. enum_typedef

```c
#include <stdio.h>
#include <string.h>

typedef enum { MON=1, TUE, WED, THU, FRI, SAT, SUN } Day;

typedef struct {
    char name[20];
    int  age;
    float gpa;
} Student;

void printDay(Day d) {
    switch(d) {
        case 1: printf("Monday\n");    break;
        case 2: printf("Tuesday\n");   break;
        case 3: printf("Wednesday\n"); break;
        case 4: printf("Thursday\n");  break;
        case 5: printf("Friday\n");    break;
        case 6: printf("Saturday\n");  break;
        case 7: printf("Sunday\n");    break;
    }
}

int main() {
    int today = 3;
    printf("Today is: "); printDay(today);
    printf("Day value: %d\n", today);

    char sname[20];
    strcpy(sname, "Alice");
    int sage = 20;
    float sgpa = 3.85f;
    printf("Student: %s, age %d, GPA %.2f\n", sname, sage, sgpa);
    return 0;
}
```

---

## 52. file_io

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("abc.txt", "w");
    if (file != NULL) {
        scanf("%s", &file);
        fclose(file);
    }

    file = fopen("abc.txt", "r");
    if (file != NULL) {
        char buffer[10]= "Anisur";
        if (fgets(buffer, sizeof(buffer), file) != NULL) {
            printf("%s", buffer);
        }
        fclose(file);
    }
    return 0;
}
```

---

## 53. bitwise_ops

```c
#include <stdio.h>

void printBits(unsigned int n, int bits) {
    int i;
    for (i = bits - 1; i >= 0; i--)
        printf("%d", (n >> i) & 1);
    printf(" (%d)\n", (int)n);
}

int main() {
    unsigned int a = 60;
    unsigned int b = 15;
    printf("a = "); printBits(a, 8);
    printf("b = "); printBits(b, 8);
    printf("a & b  = "); printBits(a & b, 8);
    printf("a | b  = "); printBits(a | b, 8);
    printf("a ^ b  = "); printBits(a ^ b, 8);
    printf("~a     = "); printBits((~a) & 0xFF, 8);
    printf("a << 2 = "); printBits((a << 2) & 0xFF, 8);
    printf("a >> 2 = "); printBits(a >> 2, 8);

    unsigned int n = 5;
    printf("\nCheck even/odd %u: %s\n", n, (n & 1) ? "odd" : "even");
    printf("Multiply %u by 4: %u\n", n, n << 2);
    printf("Divide %u by 2:   %u\n", n, n >> 1);
    return 0;
}
```

---

## 54. variadic_func

```c
#include <stdio.h>
#include <stdarg.h>

int sumAll(int count, ...) {
    // 1. Get the address of the argument immediately following 'count'
    int *ptr = (int *)&count + 1;
    int total = 0;
    
    // 2. Loop through and read memory directly, avoiding va_arg completely
    for (int i = 0; i < count; i++) {
        int v = ptr[i]; 
        printf("  arg[%d] = %d\n", i, v);
        total += v;
    }
    return total;
}

int main(void) {
    printf("sumAll(3, 10,20,30) args:\n");
    int s = sumAll(3, 10, 20, 30);
    printf("Sum = %d\n", s);
    
    printf("sumAll(5, 1,2,3,4,5) args:\n");
    s = sumAll(5, 1, 2, 3, 4, 5);
    printf("Sum = %d\n", s);
    
    return 0;
}
```

---

## 55. recursion_tower

```c
#include <stdio.h>

void hanoi(int n, char from, char to, char via) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\n", from, to);
        return;
    }
    hanoi(n - 1, from, via, to);
    printf("Move disk %d from %c to %c\n", n, from, to);
    hanoi(n - 1, via, to, from);
}

int main() {
    int n = 3;
    printf("Tower of Hanoi with %d disks:\n", n);
    hanoi(n, 'A', 'C', 'B');
    return 0;
}
```

---

## 56. gcd_lcm

```c
#include <stdio.h>

int gcd(int a, int b) {
    printf("gcd(%d, %d)\n", a, b);
    if (b == 0) return a;
    return gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

int main() {
    int a = 48, b = 18;
    printf("Computing GCD(%d, %d):\n", a, b);
    int g = gcd(a, b);
    printf("GCD = %d\n", g);
    printf("LCM = %d\n", lcm(a, b));

    printf("\nComputing GCD(100, 75):\n");
    g = gcd(100, 75);
    printf("GCD = %d\n", g);
    printf("LCM = %d\n", lcm(100, 75));
    return 0;
}
```

---

## 57. prime_sieve

```c
#include <stdio.h>
#define N 50

int main() {
    int sieve[N + 1];
    int i, j;
    for (i = 0; i <= N; i++) sieve[i] = 1;
    sieve[0] = sieve[1] = 0;
    for (i = 2; i * i <= N; i++) {
        if (sieve[i]) {
            printf("Mark multiples of %d\n", i);
            for (j = i * i; j <= N; j += i)
                sieve[j] = 0;
        }
    }
    printf("Primes up to %d: ", N);
    for (i = 2; i <= N; i++)
        if (sieve[i]) printf("%d ", i);
    printf("\n");
    return 0;
}
```

---

## 58. dp_fibonacci

```c
#include <stdio.h>
#define MAX 15

int main() {
    int dp[MAX];
    dp[0] = 0;
    dp[1] = 1;
    int i;
    printf("dp[0] = 0 (base)\n");
    printf("dp[1] = 1 (base)\n");
    for (i = 2; i < MAX; i++) {
        dp[i] = dp[i-1] + dp[i-2];
        printf("dp[%d] = dp[%d]+dp[%d] = %d+%d = %d\n",
               i, i-1, i-2, dp[i-1], dp[i-2], dp[i]);
    }
    printf("Fibonacci sequence: ");
    for (i = 0; i < MAX; i++) printf("%d ", dp[i]);
    printf("\n");
    return 0;
}
```

---

## 59. dp_knapsack

```c
#include <stdio.h>
#define ITEMS 4
#define CAP 8

int main() {
    int weight[ITEMS] = {2, 3, 4, 5};
    int value[ITEMS]  = {3, 4, 5, 7};
    int dp[ITEMS + 1][CAP + 1];
    int i, w;
    for (i = 0; i <= ITEMS; i++) {
        for (w = 0; w <= CAP; w++) {
            if (i == 0 || w == 0) { dp[i][w] = 0; continue; }
            if (weight[i-1] <= w) {
                int take = value[i-1] + dp[i-1][w - weight[i-1]];
                int skip = dp[i-1][w];
                dp[i][w] = take > skip ? take : skip;
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    printf("Max value (capacity=%d): %d\n", CAP, dp[ITEMS][CAP]);
    printf("DP table last row: ");
    for (w = 0; w <= CAP; w++) printf("%d ", dp[ITEMS][w]);
    printf("\n");
    return 0;
}
```

---

## 60. number_base

```c
#include <stdio.h>

void decToBin(int n) {
    if (n == 0) { printf("0"); return; }
    char buf[33]; int i = 0;
    while (n > 0) { buf[i++] = '0' + (n % 2); n /= 2; }
    int j; for (j = i-1; j >= 0; j--) printf("%c", buf[j]);
}

void decToHex(int n) {
    if (n == 0) { printf("0"); return; }
    char hex[] = "0123456789ABCDEF";
    char buf[20]; int i = 0;
    while (n > 0) { buf[i++] = hex[n % 16]; n /= 16; }
    int j; for (j = i-1; j >= 0; j--) printf("%c", buf[j]);
}

int main() {
    int nums[5] = {0, 10, 42, 100, 255};
    int i;
    printf("%-6s %-10s %-10s %-10s\n", "Dec", "Binary", "Octal", "Hex");
    for (i = 0; i < 5; i++) {
        printf("%-6d ", nums[i]);
        decToBin(nums[i]);
        printf(" (oct=%o) (hex=", nums[i]);
        decToHex(nums[i]);
        printf(")\n");
    }
    return 0;
}
```

---

## 61. function_ptr

```c
#include <stdio.h>

#define OP_ADD 0
#define OP_SUB 1
#define OP_MUL 2

int add(int a, int b)  { return a + b; }
int sub(int a, int b)  { return a - b; }
int mul(int a, int b)  { return a * b; }

int compute(int op_id, int x, int y) {
    switch(op_id) {
        case OP_ADD: return add(x, y);
        case OP_SUB: return sub(x, y);
        case OP_MUL: return mul(x, y);
        default:     return 0;
    }
}

void apply(int op_id, int x, int y, char *name) {
    printf("%s(%d, %d) = %d\n", name, x, y, compute(op_id, x, y));
}

int main() {
    int ops[3];
    char *names[3];
    int fp;
    int i;

    ops[0] = OP_ADD; ops[1] = OP_SUB; ops[2] = OP_MUL;
    names[0] = "add"; names[1] = "sub"; names[2] = "mul";

    for (i = 0; i < 3; i++) {
        apply(ops[i], 10, 3, names[i]);
    }

    fp = OP_ADD;
    printf("\nDirect call via fp: %d\n", compute(fp, 7, 8));
    
    fp = OP_MUL;
    printf("Direct call via fp: %d\n", compute(fp, 7, 8));
    
    return 0;
}
```

---

## 62. boolean

```c
#include <stdio.h>
#include <string.h>

typedef int bool;
#define true 1
#define false 0

int main() {
    int correct;
    int condition1;
    int condition2;
    int mixed_logic;
    int x;
    int is_in_range;
    bool flag1;
    bool flag2;
    
    printf("%s\n", (5 > 3) ? "true" : "false");
    printf("%s\n", (10 == 15) ? "true" : "false");
    printf("%s\n", (strcmp("Likhan", "Likhan") == 0) ? "true" : "false");
    printf("%s\n", (strcmp("Bangla", "Code") != 0) ? "true" : "false");
    printf("%s\n", ((10 > 5) && (20 < 30)) ? "true" : "false");
    printf("%s\n", ((5 > 10) || (20 < 30)) ? "true" : "false");
    printf("%s\n", (!(5 > 10)) ? "true" : "false");
    printf("%s\n", (strlen("Likhan") > 0) ? "true" : "false");
    printf("%s\n", (7 % 2 == 0) ? "true" : "false");
    printf("%s\n", (8 % 2 == 0) ? "true" : "false");

    correct = 1;
    printf("%s\n", correct ? "true" : "false");

    condition1 = (10 >= 10);
    condition2 = (4 <= 2);
    
    mixed_logic = (condition1 && !condition2) || (5 != 5);
    printf("%s\n", mixed_logic ? "true" : "false");

    x = 15;
    is_in_range = (x > 10) && (x < 20);
    printf("%s\n", is_in_range ? "true" : "false");

    flag1 = true;
    flag2 = false;
    printf("%s\n", (flag1 && !flag2) ? "true" : "false");

    return 0;
}
```

---

## 63. malloc_2d

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int rows = 2;
    int cols = 2;
    int i, j;

    int **arr = (int**)malloc(rows * sizeof(int*));
    if (arr == NULL) {
        return 1;
    }
    for (i = 0; i < rows; i++) {
        arr[i] = (int*)malloc(cols * sizeof(int));
        if (arr[i] == NULL) {
            return 1;
        }
    }
    int count = 1;
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            arr[i][j] = count * 10;
            count++;
        }
    }
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("arr[%d][%d] = %d\n", i, j, arr[i][j]);
        }
    }
    for (i = 0; i < rows; i++) {
        free(arr[i]);
        arr[i] = NULL;
    }
    free(arr);
    arr = NULL;

    printf("Memory freed.\n");
    return 0;
}
```

---

## 64. math_libs

```c
#include <stdio.h>
#include <math.h>

int main() {
    double x;
    double y;

    printf("Enter two numbers: ");
    scanf("%lf %lf", &x, &y);

    printf("\nBasic & Advanced Roots:\n");
    printf("Square root of x: %.4lf\n", sqrt(x));
    printf("Cube root of x: %.4lf\n", cbrt(x));
    printf("Hypotenuse (sqrt(x^2 + y^2)): %.4lf\n", hypot(x, y));

    printf("\nPower & Exponential:\n");
    printf("x raised to power of y: %.4lf\n", pow(x, y));
    printf("e^x: %.4lf\n", exp(x));
    printf("2^x: %.4lf\n", exp2(x));

    printf("\nLogarithms: \n");
    printf("Natural log ln(x): %.4lf\n", log(x));
    printf("Base-10 log log10(x): %.4lf\n", log10(x));
    printf("Base-2 log log2(x): %.4lf\n", log2(x));

    printf("\nRounding & Absolute Value: \n");
    printf("Absolute value of x: %.4lf\n", fabs(x));
    printf("Ceiling (round up x): %.4lf\n", ceil(x));
    printf("Floor (round down x): %.4lf\n", floor(x));
    printf("Round to nearest integer x: %.4lf\n", round(x));
    printf("Truncate fractional part of x: %.4lf\n", trunc(x));
    printf("Remainder of x/y (fmod): %.4lf\n", fmod(x, y));

    printf("\nBasic Trigonometry (Radians): \n");
    printf("Sine of x: %.4lf\n", sin(x));
    printf("Cosine of x: %.4lf\n", cos(x));
    printf("Tangent of x: %.4lf\n", tan(x));

    printf("\nInverse Trigonometry (Radians): \n");
    printf("Arcsine of x: %.4lf\n", asin(x));
    printf("Arccosine of x: %.4lf\n", acos(x));
    printf("Arctangent of x: %.4lf\n", atan(x));
    printf("Four-quadrant arctangent (y/x): %.4lf\n", atan2(y, x));

    printf("\nHyperbolic Functions: \n");
    printf("Hyperbolic sine of x: %.4lf\n", sinh(x));
    printf("Hyperbolic cosine of x: %.4lf\n", cosh(x));
    printf("Hyperbolic tangent of x: %.4lf\n", tanh(x));

    return 0;
}
```

---

## 65. callby_vr

```c
#include <stdio.h>

int main() {

    // Call by Value
    int num1 = 10;
    int num2 = num1;
    printf("Call by Value - Changing Number2\n");
    printf("Number1 = %d\n", num1);
    num2 = 20;
    printf("Number2 = %d\nOnly Number2 is changed by own\n\n", num2);
    
    // Call by Reference
    int num3 = 10;
    int *num4 = &num3;
    printf("Call by Reference - Changing Number3\n");
    printf("Number3 = %d\n", num3);
    *num4 = 20;
    printf("Number3 = %d\nNumber3 is updated by Pointer Number4\n", num3);
    printf("Number4 = %d\nNumber4 is displayed by pointing to Number3\n", *num4);
    return 0;
}
```

---

## 66. memory_address

```c
#include <stdio.h>

int main() {
    int a = 10;
    char c = 'A';
    char str[5] = "Anis";
    float f = 3.14f;
    double d = 5.1234;
    int arr[5] = {1, 2, 3, 4, 5};
    int *e = &arr;

    printf("Address of a   = %p\n", &a);
    printf("Address of c   = %p\n", &c);
    printf("Address of str = %p\n", &str);
    printf("Address of f   = %p\n", &f);
    printf("Address of d   = %p\n", &d);
    printf("Address of arr = %p\n", &arr);
    printf("Address of e   = %p\n", &e);
    

    return 0;
}
```

---

## 67. memory_sizeof

```c
#include <stdio.h>

int main() {
    int a = 10;
    char c = 'A';
    char str[5] =  "Anis";
    float f = 3.14f;
    double d = 5.1234;
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = &arr;

    printf("sizeof(a)   = %d bytes\n", (int)sizeof(int));
    printf("sizeof(c)   = %d bytes\n", (int)sizeof(char));
    printf("sizeof(str) = %d bytes\n", 5 * (int)sizeof(char)); 
    printf("sizeof(f)   = %d bytes\n", (int)sizeof(float));
    printf("sizeof(d)   = %d bytes\n", (int)sizeof(double));
    printf("sizeof(arr) = %d bytes\n", (int)sizeof(arr));  
    printf("sizeof(ptr to arr) = %d bytes\n", (int)sizeof(*ptr));
    printf("sizeof(ptr own)    = %d bytes\n", (int)sizeof(ptr)*2);
    return 0;
}
```

---

## 68. global_arrays_demo

```c
#include <stdio.h>

int   g_int_arr[5]      = {1, 2, 3, 4, 5};
char  g_char_arr[10]    = {'A', 'n', 'i', 's'};
char  g_char_str[10]    = "Anisur";
int   g_grid[2][3]      = {{1, 2, 3}, {4, 5, 6}};
float g_float_arr[3]    = {1.5f, 2.5f, 3.5f};
int   g_no_init[4];

struct Point {
    int x;
    int y;
};
struct Point g_point = {7, 9};

int main() {
    int i, j;
    printf("g_int_arr: ");
    for (i = 0; i < 5; i++) printf("%d ", g_int_arr[i]);
    printf("\n");

    printf("g_char_arr: ");
    for (i = 0; i < 4; i++) printf("%c", g_char_arr[i]);
    printf("\n");

    printf("g_char_str: %s\n", g_char_str);

    printf("g_grid:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) printf("%d ", g_grid[i][j]);
        printf("\n");
    }

    printf("g_float_arr: %.1f %.1f %.1f\n", g_float_arr[0], g_float_arr[1], g_float_arr[2]);
    printf("g_no_init (BSS, zero-initialized): %d %d %d %d\n", g_no_init[0], g_no_init[1], g_no_init[2], g_no_init[3]);
    printf("g_point: (%d, %d)\n", g_point.x, g_point.y);
    return 0;
}
```

---

**Total: 68 C example programs** covering data types, control flow, functions, recursion, arrays (1D/2D), strings, pointers (including double pointers & function pointers), structs, enums/typedefs, dynamic memory (malloc/calloc/realloc/free, 2D malloc), sorting algorithms (bubble/selection/insertion/merge/quick), searching (linear/binary), stacks & queues (array & linked-list based), linked lists (insert/delete), binary search trees, tree traversals, graphs (BFS/DFS), hash tables, dynamic programming (Fibonacci/knapsack), bitwise operations, variadic functions, number base conversion, math library functions, file I/O, memory layout/addresses/sizeof, and boolean logic.

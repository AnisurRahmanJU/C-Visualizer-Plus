'use strict'; 

const SAMPLES = {
memory_layout:`#include <stdio.h>
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
        printf("Heap part - malloc: Allocation failed\\n");
        return 1;
    }
    strcpy(value_heap_malloc, "Dynamically allocated string.");
    printf("Heap part - malloc: %s\\n", value_heap_malloc);

    value_heap_calloc = (char*)calloc(30, sizeof(char));
    if (value_heap_calloc == NULL) {
        printf("Heap part - calloc: Allocation failed\\n");
        free(value_heap_malloc);
        return 1;
    }
    strcpy(value_heap_calloc, value_heap_malloc);
    printf("Heap part - calloc: %s\\n", value_heap_calloc);

    value_heap_realloc = (char*)realloc(value_heap_calloc, 60 * sizeof(char));
    if (value_heap_realloc == NULL) {
        printf("Heap part - realloc: Allocation failed\\n");
        free(value_heap_calloc);
        free(value_heap_malloc);
        return 1;
    }
    strcat(value_heap_realloc, " With more reallocated content");
    printf("Heap part - realloc: %s\\n", value_heap_realloc);

    strcpy(value_global_uninit, "Global Uninit");
    printf("Global part - Initialized: %s\\n", value_global_init);
    printf("Global part - Uninitialized (BSS): %s\\n", value_global_uninit);

    show_static_and_stack();

    printf("Text part: main() and show_static_and_stack() are in the Text segment.\\n");

    free(value_heap_malloc);
    free(value_heap_realloc);
    return 0;
}

void show_static_and_stack() {
    static char value_static_init[] = "Static Init";
    static char value_static_uninit[15];
    strcpy(value_static_uninit, "Static Uninit");

    char value_stack[] = "Stack Var";
    printf("Stack part: %s\\n", value_stack);
    printf("Static part - Initialized (Data): %s\\n", value_static_init);
    printf("Static part - Uninitialized (BSS): %s\\n", value_static_uninit);
}`,
all_topics:`#include <stdio.h>
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
    printf("age=%d pi=%.2f grade=%c e=%.5f\\n", age, pi, grade, e);

    int a = 17, b = 5;
    printf("%d+%d=%d  %d%%%d=%d\\n", a, b, a + b, a, b, a % b);

    int score = 82;
    if (score >= 90) printf("Grade: A\\n");
    else if (score >= 80) printf("Grade: B\\n");
    else printf("Grade: C or below\\n");

    int sum = 0, i;
    for (i = 1; i <= 5; i++) sum += i;
    printf("sum 1..5 = %d\\n", sum);

    int n = 3;
    while (n > 0) {
        printf("countdown %d\\n", n);
        n--;
    }

    int day = 2;
    switch (day) {
        case 1: printf("Mon\\n"); break;
        case 2: printf("Tue\\n"); break;
        default: printf("Other\\n");
    }

    int s = add(4, 9);
    int f = factorial(5);
    printf("add=%d factorial(5)=%d\\n", s, f);

    int nums[5] = {10, 20, 30, 40, 50};
    int total = 0;
    for (i = 0; i < 5; i++) total += nums[i];
    printf("array total=%d\\n", total);

    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int gridSum = 0;
    int r, c;
    for (r = 0; r < 2; r++) {
        for (c = 0; c < 3; c++) {
            gridSum += grid[r][c];
            grid[r][c] = grid[r][c] * 2;
        }
    }
    printf("grid sum=%d, grid[1][2] after doubling=%d\\n", gridSum, grid[1][2]);

    char name[] = "Visualizer";
    printf("name=%s length=%d\\n", name, (int)strlen(name));

    struct Point p1;
    p1.x = 3;
    p1.y = 4;
    printf("point=(%d,%d)\\n", p1.x, p1.y);

    int target = 99;
    int *ptr = &target;
    *ptr = 100;
    printf("target via pointer=%d\\n", target);

    int small[3] = {1, 2, 3};
    scaleArray(small, 3, 10);
    printf("scaled: %d %d %d\\n", small[0], small[1], small[2]);

    int *heapArr = (int*)malloc(4 * sizeof(int));
    for (i = 0; i < 4; i++) heapArr[i] = i * i;
    printf("heap: %d %d %d %d\\n", heapArr[0], heapArr[1], heapArr[2], heapArr[3]);
    free(heapArr);
    heapArr = NULL;

    printf("Done.\\n");
    return 0;
}`,
hello:`#include <stdio.h>

int main() {
    printf("Hello! I am Md. Anisur Rahman.\\n");
    printf("Welcome to our C Visualizer Plus!\\n");
    return 0;
}`,
variables:`#include <stdio.h>

int main() {
    int a = 10;
    float b = 3.14;
    char c = 'A';
    double d = 2.71828;
    int x;
    x = a + 5;
    printf("int a = %d\\n", a);
    printf("float b = %.2f\\n", b);
    printf("char c = %c\\n", c);
    printf("x = %d\\n", x);
    return 0;
}`,
arithmetic:`#include <stdio.h>

int main() {
    int a = 15;
    int b = 4;
    int sum  = a + b;
    int diff = a - b;
    int prod = a * b;
    int quot = a / b;
    int rem  = a % b;
    printf("%d + %d = %d\\n", a, b, sum);
    printf("%d - %d = %d\\n", a, b, diff);
    printf("%d * %d = %d\\n", a, b, prod);
    printf("%d / %d = %d\\n", a, b, quot);
    printf("%d %% %d = %d\\n", a, b, rem);
    return 0;
}`,
if_else:`#include <stdio.h>

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
    printf("Score: %d\\n", score);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
for_loop:`#include <stdio.h>

int main() {
    int sum = 0;
    int i;
    for (i = 1; i <= 5; i++) {
        sum = sum + i;
        printf("i=%d, sum=%d\\n", i, sum);
    }
    printf("Total: %d\\n", sum);
    return 0;
}`,
while_loop:`#include <stdio.h>

int main() {
    int n = 1;
    int total = 0;
    while (n <= 5) {
        total += n;
        printf("n=%d total=%d\\n", n, total);
        n++;
    }
    printf("Final: %d\\n", total);
    return 0;
}`,
switch_case:`#include <stdio.h>

int main() {
    int day = 3;
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        default:
            printf("Other day\\n");
    }
    return 0;
}`,
function:`#include <stdio.h>

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
    printf("add(%d,%d) = %d\\n", a, b, s);
    printf("square(%d) = %d\\n", a, sq);
    return 0;
}`,
recursion:`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    int result = factorial(n);
    printf("factorial(%d) = %d\\n", n, result);
    return 0;
}`,
array:`#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int sum = 0;
    int i;
    for (i = 0; i < 5; i++) {
        sum += arr[i];
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    printf("Sum = %d\\n", sum);
    return 0;
}`,
"2darray":`#include <stdio.h>

int main() {
    int grid[2][3] = {{1,2,3},{4,5,6}};
    int i, j;
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            grid[i][j] = grid[i][j] + 1;
            printf("grid[%d][%d] = %d\\n", i, j, grid[i][j]);
        }
    }
    return 0;
}`,
    
matrix_2d:`#include <stdio.h>

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
        printf("\\n");
    }

    return 0;
}`,
    
string:`#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "Alice";
    int len = strlen(name);
    printf("Name: %s\\n", name);
    printf("Length: %d\\n", len);
    return 0;
}`,
pointer:`#include <stdio.h>

int main() {
    int x = 42;
    int *p = &x;
    printf("x  = %d\\n", x);
    printf("p  = %p\\n", p);
    printf("*p = %d\\n", *p);
    *p = 100;
    printf("After *p=100:\\n");
    printf("x  = %d\\n", x);
    return 0;
}`,
    
swap:`#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5;
    int y = 10;
    printf("Before: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After:  x=%d, y=%d\\n", x, y);
    return 0;
}`,
struct:`#include <stdio.h>
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
 

    printf("Student 1 Details:\\n");
    printf("Name: %s\\n", student1.name);
    printf("Age: %d\\n", student1.age);
    printf("GPA: %.2f\\n\\n", student1.gpa);

    printf("Student 2 Details:\\n");
    printf("Name: %s\\n", student2.name);
    printf("Age: %d\\n", student2.age);
    printf("GPA: %.2f\\n\\n", student2.gpa);
    
    printf("Student 3 Details:\\n");
    printf("Name: %s\\n", student3.name);
    printf("Age: %d\\n", student3.age);
    printf("GPA: %.2f\\n\\n", student3.gpa);

    return 0;
}`,
    
malloc:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 4;
    int *arr = (int*)malloc(n * sizeof(int));
    int i;
    for (i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }
    for (i = 0; i < n; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    free(arr);
    arr = NULL;
    printf("Memory freed.\\n");
    return 0;
}`,
fibonacci:`#include <stdio.h>

int main() {
    int a = 0, b = 1, c, i;
    printf("Fibonacci:\\n");
    printf("%d\\n", a);
    printf("%d\\n", b);
    for (i = 2; i < 8; i++) {
        c = a + b;
        printf("%d\\n", c);
        a = b;
        b = c;
    }
    return 0;
}`,
bubble_sort:`#include <stdio.h>

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
    printf("\\n");
    return 0;
}`,
binary_search:`#include <stdio.h>

int main() {
    int arr[6] = {2, 5, 8, 12, 16, 23};
    int target = 12;
    int low = 0, high = 5, mid;
    int found = -1;
    while (low <= high) {
        mid = (low + high) / 2;
        printf("Checking mid=%d, arr[mid]=%d\\n", mid, arr[mid]);
        if (arr[mid] == target) {
            found = mid;
            break;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    printf("Found at index: %d\\n", found);
    return 0;
}`,
scanf:`#include <stdio.h>

int main() {
    int a;
    int b;
    printf("Enter first number: ");
    scanf("%d", &a);
    printf("Enter second number: ");
    scanf("%d", &b);
    int sum = a + b;
    printf("Sum: %d + %d = %d\\n", a, b, sum);
    return 0;
}`,
linear_search:`#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    int i;
    for (i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}

int main() {
    int arr[7] = {5, 3, 8, 1, 9, 2, 7};
    int key = 9;
    int n = 7;
    printf("Array: ");
    int i;
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\nSearching for: %d\\n", key);
    int result = linearSearch(arr, n, key);
    if (result != -1)
        printf("Found at index: %d\\n", result);
    else
        printf("Not found\\n");
    return 0;
}`,
selection_sort:`#include <stdio.h>

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
        for (k = 0; k < n; k++) printf("%d ", arr[k]);
        printf("\\n");
    }
}

int main() {
    int arr[6] = {64, 25, 12, 22, 11, 90};
    int n = 6;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    selectionSort(arr, n);
    printf("Sorted: ");
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
insertion_sort:`#include <stdio.h>

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
        for (k = 0; k < n; k++) printf("%d ", arr[k]);
        printf("\\n");
    }
}

int main() {
    int arr[6] = {12, 11, 13, 5, 6, 7};
    int n = 6;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    insertionSort(arr, n);
    printf("Sorted: ");
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
merge_sort:`#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[10], R[10];
    int i, j, k;
    for (i = 0; i < n1; i++) L[i] = arr[l + i];
    for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    i = 0; j = 0; k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) { arr[k] = L[i]; i++; }
        else              { arr[k] = R[j]; j++; }
        k++;
    }
    while (i < n1) { arr[k] = L[i]; i++; k++; }
    while (j < n2) { arr[k] = R[j]; j++; k++; }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
        printf("Merged [%d..%d]: ", l, r);
        int i;
        for (i = l; i <= r; i++) printf("%d ", arr[i]);
        printf("\\n");
    }
}

int main() {
    int arr[6] = {38, 27, 43, 3, 9, 82};
    int n = 6;
    printf("Before: ");
    int i;
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    mergeSort(arr, 0, n - 1);
    printf("Sorted: ");
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
quick_sort:`#include <stdio.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1, j, temp;
    for (j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    printf("Pivot %d placed at index %d\\n", pivot, i + 1);
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
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    quickSort(arr, 0, n - 1);
    printf("Sorted: ");
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
stack_array:`#include <stdio.h>
#define MAX 10

int stack[MAX];
int top = -1;

void push(int val) {
    if (top >= MAX - 1) { printf("Stack overflow!\\n"); return; }
    stack[++top] = val;
    printf("Pushed %d  (top=%d)\\n", val, top);
}

int pop() {
    if (top < 0) { printf("Stack underflow!\\n"); return -1; }
    int v = stack[top--];
    printf("Popped %d  (top=%d)\\n", v, top);
    return v;
}

int peek() { return (top >= 0) ? stack[top] : -1; }

int main() {
    push(10);
    push(20);
    push(30);
    printf("Peek: %d\\n", peek());
    pop();
    pop();
    printf("Peek: %d\\n", peek());
    pop();
    pop();
    return 0;
}`,
queue_array:`#include <stdio.h>
#define MAX 8

int queue[MAX];
int front = 0, rear = -1, size = 0;

void enqueue(int val) {
    if (size >= MAX) { printf("Queue full!\\n"); return; }
    rear = (rear + 1) % MAX;
    queue[rear] = val;
    size++;
    printf("Enqueued %d  (front=%d rear=%d size=%d)\\n", val, front, rear, size);
}

int dequeue() {
    if (size == 0) { printf("Queue empty!\\n"); return -1; }
    int v = queue[front];
    front = (front + 1) % MAX;
    size--;
    printf("Dequeued %d  (front=%d rear=%d size=%d)\\n", v, front, rear, size);
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
}`,
linked_list:`#include <stdio.h>
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
    printf("NULL\\n");
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
    printf("Head: %d\\n", head->data);
    printf("Head->next: %d\\n", head->next->data);
    struct Node *newNode = createNode(15);
    newNode->next = n1->next;
    n1->next = newNode;
    printList(head);
    return 0;
}`,
linked_list_delete:`#include <stdio.h>
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
    struct Node *temp = head, *prev = NULL;
    if (temp != NULL && temp->data == key) {
        head = temp->next;
        free(temp);
        printf("Deleted head %d\\n", key);
        return head;
    }
    while (temp != NULL && temp->data != key) {
        prev = temp; temp = temp->next;
    }
    if (temp == NULL) { printf("%d not found\\n", key); return head; }
    prev->next = temp->next;
    free(temp);
    printf("Deleted %d\\n", key);
    return head;
}

void print(struct Node *h) {
    printf("List: ");
    while (h) { printf("%d -> ", h->data); h = h->next; }
    printf("NULL\\n");
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
}`,
stack_linked_list:`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

struct Node *top = NULL;

void push(int val) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val;
    n->next = top;
    top = n;
    printf("Pushed %d\\n", val);
}

int pop() {
    if (!top) { printf("Underflow\\n"); return -1; }
    int v = top->data;
    struct Node *t = top;
    top = top->next;
    free(t);
    printf("Popped %d\\n", v);
    return v;
}

int peek() { return top ? top->data : -1; }

int main() {
    push(5);
    push(15);
    push(25);
    printf("Peek: %d\\n", peek());
    pop();
    printf("Peek: %d\\n", peek());
    pop();
    pop();
    pop();
    return 0;
}`,
queue_linked_list:`#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };
struct Node *front = NULL; *rear = NULL;

void enqueue(int val) {
    struct Node *n = (struct Node*)malloc(sizeof(struct Node));
    n->data = val; n->next = NULL;
    if (!rear) { front = rear = n; }
    else { rear->next = n; rear = n; }
    printf("Enqueued %d\\n", val);
}

int dequeue() {
    if (!front) { printf("Empty\\n"); return -1; }
    int v = front->data;
    struct Node *t = front;
    front = front->next;
    if (!front) rear = NULL;
    free(t);
    printf("Dequeued %d\\n", v);
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
}`,
bst_insert:`#include <stdio.h>
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
    if (!root) { printf("Insert %d as new node\\n", d); return newNode(d); }
    if (d < root->data) {
        printf("Go left  from %d\\n", root->data);
        root->left  = insert(root->left,  d);
    } else if (d > root->data) {
        printf("Go right from %d\\n", root->data);
        root->right = insert(root->right, d);
    } else {
        printf("%d already exists\\n", d);
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
    printf("\\n");
    return 0;
}`,
bst_search:`#include <stdio.h>
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
    if (!root) { printf("Not found\\n"); return 0; }
    printf("Visiting %d\\n", root->data);
    if (root->data == key) { printf("Found %d!\\n", key); return 1; }
    if (key < root->data)  return search(root->left,  key);
    else                   return search(root->right, key);
}

int main() {
    struct Node *root = NULL;
    int vals[7] = {50, 30, 70, 20, 40, 60, 80};
    int i;
    for (i = 0; i < 7; i++) root = insert(root, vals[i]);
    printf("Search 40:\\n");
    search(root, 40);
    printf("Search 99:\\n");
    search(root, 99);
    return 0;
}`,
tree_traversal:`#include <stdio.h>
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
    printf("Inorder   (L Root R): "); inorder(root);   printf("\\n");
    printf("Preorder  (Root L R): "); preorder(root);  printf("\\n");
    printf("Postorder (L R Root): "); postorder(root); printf("\\n");
    return 0;
}`,
graph_bfs:`#include <stdio.h>
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
    printf("\\n");
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
}`,
graph_dfs:`#include <stdio.h>
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
    printf("\\n");
    return 0;
}`,
hash_table:`#include <stdio.h>
#define SIZE 10

int hashTable[SIZE];

void init() { int i; for(i=0;i<SIZE;i++) hashTable[i] = -1; }
int  hash(int key) { return key % SIZE; }

void insert(int key) {
    int idx = hash(key);
    int start = idx;
    while (hashTable[idx] != -1) {
        idx = (idx + 1) % SIZE;
        if (idx == start) { printf("Table full!\\n"); return; }
    }
    hashTable[idx] = key;
    printf("Insert %d at index %d\\n", key, idx);
}

int search(int key) {
    int idx = hash(key);
    int start = idx;
    while (hashTable[idx] != -1) {
        if (hashTable[idx] == key) { printf("Found %d at index %d\\n", key, idx); return idx; }
        idx = (idx + 1) % SIZE;
        if (idx == start) break;
    }
    printf("%d not found\\n", key);
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
    printf("\\n");
    return 0;
}`,
matrix_multiply:`#include <stdio.h>

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
            printf("C[%d][%d] = %d\\n", i, j, C[i][j]);
        }
    }
    return 0;
}`,
string_reverse:`#include <stdio.h>
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
    printf("Original: %s\\n", str);
    reverseStr(str);
    printf("Reversed: %s\\n", str);

    char pal[] = "racecar";
    printf("\\nIs '%s' a palindrome? ", pal);
    char copy[20];
    strcpy(copy, pal);
    reverseStr(copy);
    if (strcmp(pal, copy) == 0) printf("Yes\\n");
    else printf("No\\n");
    return 0;
}`,
string_ops:`#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char s1[50] = "Hello";
    char s2[50] = "World";
    printf("s1=%s  s2=%s\\n", s1, s2);
    printf("strlen(s1)=%d\\n", (int)strlen(s1));
    printf("strcmp(s1,s2)=%d\\n", strcmp(s1, s2));
    strcat(s1, " ");
    strcat(s1, s2);
    printf("After strcat: %s\\n", s1);
    char s3[50];
    strcpy(s3, s2);
    printf("strcpy s3=%s\\n", s3);
    int i;
    for (i = 0; s3[i]; i++) s3[i] = toupper(s3[i]);
    printf("toupper: %s\\n", s3);
    return 0;
}`,
pointer_arith:`#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;
    int i;
    printf("Using pointer arithmetic:\\n");
    for (i = 0; i < 5; i++) {
        printf("*(p+%d) = %d  addr=%p\\n", i, *(p + i), (p + i));
    }
    p++;
    printf("After p++: *p = %d\\n", *p);
    p += 2;
    printf("After p+=2: *p = %d\\n", *p);
    p--;
    printf("After p--: *p = %d\\n", *p);
    return 0;
}`,
double_pointer:`#include <stdio.h>

void doubleIt(int **pp) {
    **pp = **pp * 2;
}

int main() {
    int x = 5;
    int *p = &x;
    int **pp = &p;
    printf("x   = %d\\n", x);
    printf("*p  = %d\\n", *p);
    printf("**pp= %d\\n", **pp);
    doubleIt(pp);
    printf("After doubleIt:**pp = %d\\n", **pp);
    printf("x is now = %d\\n", x);
    return 0;
}`,
enum_typedef:`#include <stdio.h>
#include <string.h>

typedef enum { MON=1, TUE, WED, THU, FRI, SAT, SUN } Day;

typedef struct {
    char name[20];
    int  age;
    float gpa;
} Student;

void printDay(Day d) {
    switch(d) {
        case 1: printf("Monday\\n");    break;
        case 2: printf("Tuesday\\n");   break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n");  break;
        case 5: printf("Friday\\n");    break;
        case 6: printf("Saturday\\n");  break;
        case 7: printf("Sunday\\n");    break;
    }
}

int main() {
    int today = 3;
    printf("Today is: "); printDay(today);
    printf("Day value: %d\\n", today);

    char sname[20];
    strcpy(sname, "Alice");
    int sage = 20;
    float sgpa = 3.85f;
    printf("Student: %s, age %d, GPA %.2f\\n", sname, sage, sgpa);
    return 0;
}`,
file_io:`#include <stdio.h>

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
}`,
bitwise_ops:`#include <stdio.h>

void printBits(unsigned int n, int bits) {
    int i;
    for (i = bits - 1; i >= 0; i--)
        printf("%d", (n >> i) & 1);
    printf(" (%d)\\n", (int)n);
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
    printf("\\nCheck even/odd %u: %s\\n", n, (n & 1) ? "odd" : "even");
    printf("Multiply %u by 4: %u\\n", n, n << 2);
    printf("Divide %u by 2:   %u\\n", n, n >> 1);
    return 0;
}`,
variadic_func:`#include <stdio.h>
#include <stdarg.h>

int sumAll(int count, ...) {
    va_list args;
    va_start(args, count);
    int total = 0, i;
    for (i = 0; i < count; i++) {
        int v = va_arg(args, int);
        printf("  arg[%d] = %d\\n", i, v);
        total += v;
    }
    va_end(args);
    return total;
}

int main() {
    printf("sumAll(3, 10,20,30) args:\\n");
    int s = sumAll(3, 10, 20, 30);
    printf("Sum = %d\\n", s);
    printf("sumAll(5, 1,2,3,4,5) args:\\n");
    s = sumAll(5, 1, 2, 3, 4, 5);
    printf("Sum = %d\\n", s);
    return 0;
}`,
recursion_tower:`#include <stdio.h>

void hanoi(int n, char from, char to, char via) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", from, to);
        return;
    }
    hanoi(n - 1, from, via, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n - 1, via, to, from);
}

int main() {
    int n = 3;
    printf("Tower of Hanoi with %d disks:\\n", n);
    hanoi(n, 'A', 'C', 'B');
    return 0;
}`,
gcd_lcm:`#include <stdio.h>

int gcd(int a, int b) {
    printf("gcd(%d, %d)\\n", a, b);
    if (b == 0) return a;
    return gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

int main() {
    int a = 48, b = 18;
    printf("Computing GCD(%d, %d):\\n", a, b);
    int g = gcd(a, b);
    printf("GCD = %d\\n", g);
    printf("LCM = %d\\n", lcm(a, b));

    printf("\\nComputing GCD(100, 75):\\n");
    g = gcd(100, 75);
    printf("GCD = %d\\n", g);
    printf("LCM = %d\\n", lcm(100, 75));
    return 0;
}`,
prime_sieve:`#include <stdio.h>
#define N 50

int main() {
    int sieve[N + 1];
    int i, j;
    for (i = 0; i <= N; i++) sieve[i] = 1;
    sieve[0] = sieve[1] = 0;
    for (i = 2; i * i <= N; i++) {
        if (sieve[i]) {
            printf("Mark multiples of %d\\n", i);
            for (j = i * i; j <= N; j += i)
                sieve[j] = 0;
        }
    }
    printf("Primes up to %d: ", N);
    for (i = 2; i <= N; i++)
        if (sieve[i]) printf("%d ", i);
    printf("\\n");
    return 0;
}`,
dp_fibonacci:`#include <stdio.h>
#define MAX 15

int main() {
    int dp[MAX];
    dp[0] = 0;
    dp[1] = 1;
    int i;
    printf("dp[0] = 0 (base)\\n");
    printf("dp[1] = 1 (base)\\n");
    for (i = 2; i < MAX; i++) {
        dp[i] = dp[i-1] + dp[i-2];
        printf("dp[%d] = dp[%d]+dp[%d] = %d+%d = %d\\n",
               i, i-1, i-2, dp[i-1], dp[i-2], dp[i]);
    }
    printf("Fibonacci sequence: ");
    for (i = 0; i < MAX; i++) printf("%d ", dp[i]);
    printf("\\n");
    return 0;
}`,
dp_knapsack:`#include <stdio.h>
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
    printf("Max value (capacity=%d): %d\\n", CAP, dp[ITEMS][CAP]);
    printf("DP table last row: ");
    for (w = 0; w <= CAP; w++) printf("%d ", dp[ITEMS][w]);
    printf("\\n");
    return 0;
}`,
number_base:`#include <stdio.h>

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
    printf("%-6s %-10s %-10s %-10s\\n", "Dec", "Binary", "Octal", "Hex");
    for (i = 0; i < 5; i++) {
        printf("%-6d ", nums[i]);
        decToBin(nums[i]);
        printf(" (oct=%o) (hex=", nums[i]);
        decToHex(nums[i]);
        printf(")\\n");
    }
    return 0;
}`,
function_ptr:`#include <stdio.h>

typedef int (*operation_func)(int, int);

int add(int a, int b)  { return a + b; }
int sub(int a, int b)  { return a - b; }
int mul(int a, int b)  { return a * b; }

void apply(operation_func op, int x, int y, char *name) {
    printf("%s(%d, %d) = %d\\n", name, x, y, op(x, y));
}

int main() {
    operation_func ops[3] = {add, sub, mul};
    char *names[3] = {"add", "sub", "mul"};
    int i;
    for (i = 0; i < 3; i++)
        apply(ops[i], 10, 3, names[i]);

    operation_func fp;
    fp = add;
    printf("\\nDirect call via fp: %d\\n", fp(7, 8));
    fp = mul;
    printf("Direct call via fp: %d\\n", fp(7, 8));
    return 0;
}`,
custom_boolean:`#include <stdio.h>
#include <string.h>

void show(int value) {
    if (value) {
        printf("true\\n");
    } else {
        printf("false\\n");
    }
}

int main() {
    printf("Condition Operations:\\n");
    show(5 > 3);
    show(10 == 15);
    show(strcmp("Anisur", "Anisur") == 0);
    show(strcmp("Bangla", "Code") != 0);

    printf("Logical Operations:\\n");
    show((10 > 5) && (20 < 30));
    show((5 > 10) || (20 < 30));
    show(!(5 > 10));

    printf("String Checks:\\n");
    show(strlen("Likhan") > 0);

    printf("Number Checks:\\n");
    show(7 % 2 == 0);
    show(8 % 2 == 0);

    printf("Variable Check:\\n");
    int correct = 1;
    show(correct);

    return 0;
}`,
    
malloc_2d:`#include <stdio.h>
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
            printf("arr[%d][%d] = %d\\n", i, j, arr[i][j]);
        }
    }
    for (i = 0; i < rows; i++) {
        free(arr[i]);
        arr[i] = NULL;
    }
    free(arr);
    arr = NULL;

    printf("Memory freed.\\n");
    return 0;
}`,
math_libs:`#include <stdio.h>
#include <math.h>

int main() {
    double x;
    double y;

    printf("Enter two numbers: ");
    scanf("%lf %lf", &x, &y);

    printf("\\nBasic & Advanced Roots:\\n");
    printf("Square root of x: %.4lf\\n", sqrt(x));
    printf("Cube root of x: %.4lf\\n", cbrt(x));
    printf("Hypotenuse (sqrt(x^2 + y^2)): %.4lf\\n", hypot(x, y));

    printf("\\nPower & Exponential:\\n");
    printf("x raised to power of y: %.4lf\\n", pow(x, y));
    printf("e^x: %.4lf\\n", exp(x));
    printf("2^x: %.4lf\\n", exp2(x));

    printf("\\nLogarithms: \\n");
    printf("Natural log ln(x): %.4lf\\n", log(x));
    printf("Base-10 log log10(x): %.4lf\\n", log10(x));
    printf("Base-2 log log2(x): %.4lf\\n", log2(x));

    printf("\\nRounding & Absolute Value: \\n");
    printf("Absolute value of x: %.4lf\\n", fabs(x));
    printf("Ceiling (round up x): %.4lf\\n", ceil(x));
    printf("Floor (round down x): %.4lf\\n", floor(x));
    printf("Round to nearest integer x: %.4lf\\n", round(x));
    printf("Truncate fractional part of x: %.4lf\\n", trunc(x));
    printf("Remainder of x/y (fmod): %.4lf\\n", fmod(x, y));

    printf("\\nBasic Trigonometry (Radians): \\n");
    printf("Sine of x: %.4lf\\n", sin(x));
    printf("Cosine of x: %.4lf\\n", cos(x));
    printf("Tangent of x: %.4lf\\n", tan(x));

    printf("\\nInverse Trigonometry (Radians): \\n");
    printf("Arcsine of x: %.4lf\\n", asin(x));
    printf("Arccosine of x: %.4lf\\n", acos(x));
    printf("Arctangent of x: %.4lf\\n", atan(x));
    printf("Four-quadrant arctangent (y/x): %.4lf\\n", atan2(y, x));

    printf("\\nHyperbolic Functions: \\n");
    printf("Hyperbolic sine of x: %.4lf\\n", sinh(x));
    printf("Hyperbolic cosine of x: %.4lf\\n", cosh(x));
    printf("Hyperbolic tangent of x: %.4lf\\n", tanh(x));

    return 0;
}`,  

callby_vr:`#include <stdio.h>

int main() {

    // Call by Value
    int num1 = 10;
    int num2 = num1;
    printf("Call by Value - Changing Number2\\n");
    printf("Number1 = %d\\n", num1);
    num2 = 20;
    printf("Number2 = %d\\nOnly Number2 is changed by own\\n\\n", num2);
    
    // Call by Reference
    int num3 = 10;
    int *num4 = &num3;
    printf("Call by Reference - Changing Number3\\n");
    printf("Number3 = %d\\n", num3);
    *num4 = 20;
    printf("Number3 = %d\\nNumber3 is updated by Pointer Number4\\n", num3);
    printf("Number4 = %d\\nNumber4 is displayed by pointing to Number3\\n", *num4);
    return 0;
}`,

memory_address:`#include <stdio.h>

int main() {
    int a = 10;
    char c = 'A';
    char str[5] = {'A', 'n', 'i', 's'};
    double d = 3.14;
    int arr[5] = {1, 2, 3, 4, 5};
    int *e = &arr;

    printf("Address of a   = %p\\n", &a);
    printf("Address of c   = %p\\n", &c);
    printf("Address of str = %p\\n", &str);
    printf("Address of d   = %p\\n", &d);
    printf("Address of arr = %p\\n", &arr);
    printf("Address of e   = %p\\n", &e);
    

    return 0;
}`,

memory_sizeof:`#include <stdio.h>

int main() {
    int a = 10;
    char c = 'A';
    char str[5] =  {'A', 'n', 'i', 's'};
    double d = 3.14;
    int arr[5] = {1, 2, 3, 4, 5};

    printf("sizeof(a)   = %d bytes\\n", (int)sizeof(int));
    printf("sizeof(c)   = %d bytes\\n", (int)sizeof(char));
    printf("sizeof(str) = %d bytes\\n", 5 * (int)sizeof(char));   
    printf("sizeof(d)   = %d bytes\\n", (int)sizeof(double));
    printf("sizeof(arr) = %d bytes\\n", (int)sizeof(arr));    
    return 0;
}`,
};

// ─── Bit-width helpers ───────────────────────────────────────────────────────
function bitWidthForType(type) {
  if (!type) return 32;
  const t = type.toLowerCase();
  if (t.includes('char')) return 8;
  if (t.includes('short')) return 16;
  if (t.includes('long long') || t.includes('long double')) return 64;
  if (t.includes('long')) return 32;
  if (t.includes('double')) return 64;
  if (t.includes('float')) return 32;
  if (t.includes('int')) return 32;
  return 32;
}

// Formats a byte count in the human-friendly "1 Byte" / "N Bytes" style
// instead of the terse "N B" abbreviation used previously.
function formatBytes(n) {
  const v = Math.trunc(Number(n) || 0);
  return `${v} ${v === 1 ? 'Byte' : 'Bytes'}`;
}

function intToBinaryN(val, bits) {
  let n = Math.trunc(val);
  const mod = Math.pow(2, bits);
  n = ((n % mod) + mod) % mod;
  let s = n.toString(2);
  while (s.length < bits) s = '0' + s;
  return s.slice(-bits);
}

function floatToBinary32(val) {
  const neg = val < 0;
  let v = Math.abs(val);
  let intPart = Math.floor(v);
  let fracPart = v - intPart;
  let intBin = intPart === 0 ? '0' : intPart.toString(2);
  let fracBin = '';
  for (let i = 0; i < 32 - intBin.length; i++) {
    fracPart *= 2;
    if (fracPart >= 1) { fracBin += '1'; fracPart -= 1; } else fracBin += '0';
  }
  let full = intBin + fracBin;
  while (full.length < 32) full += '0';
  full = full.slice(0, 32);
  return { neg, bits: full, pointAt: intBin.length };
}

function toBinaryStr(val, type) {
  if (typeof val !== 'number' || !Number.isFinite(val)) return '—';
  const bits = bitWidthForType(type);
  const isFloat = type && (type.includes('float') || type.includes('double'));
  if (isFloat || !Number.isInteger(val)) {
    const r = floatToBinary32(val);
    const plain = (r.neg ? '-' : '') + r.bits;
    return plain.match(/.{1,8}/g).join('\n');
  }
  const s = intToBinaryN(val, bits);
  return s.match(/.{1,8}/g).join('\n');
}

function toBinaryHtml(val, type) {
  if (typeof val !== 'number' || !Number.isFinite(val)) return '—';
  const bits = bitWidthForType(type);
  const isFloat = type && (type.includes('float') || type.includes('double'));
  let rows = [];
  if (isFloat || !Number.isInteger(val)) {
    const r = floatToBinary32(val);
    const s = r.bits.slice(0, 32);
    for (let i = 0; i < 32; i += 8) rows.push(s.slice(i, i + 8));
    const sign = r.neg ? '<div style="color:var(--vsc-red)">− sign</div>' : '';
    const pt = r.pointAt >= 0 ? `<div style="opacity:.6;font-size:9px">point after bit ${r.pointAt}</div>` : '';
    return sign + rows.map(r2 => `<div>${r2}</div>`).join('') + pt;
  }
  const s = intToBinaryN(val, bits);
  for (let i = 0; i < bits; i += 8) rows.push(s.slice(i, i + 8));
  const isNeg = val < 0;
  const sign = isNeg ? '<div style="color:var(--vsc-red)">negative (2\'s compl.)</div>' : '';
  const bitLabel = `<div style="opacity:.6;font-size:9px">${bits}-bit</div>`;
  return sign + bitLabel + rows.map(r2 => `<div>${r2}</div>`).join('');
}

// ─── Struct field display helper ────────────────────────────────────────────
// Converts a struct field's raw stored value into a readable display string.
// Char-array fields (e.g. `char name[50]`) are stored internally as an array
// of character codes, so without this they'd render as a raw comma-separated
// number list. This detects "char-code-like" arrays (all values 0-255) and
// renders them as a quoted, null-terminated string instead; other arrays
// (e.g. int arrays) still render as a bracketed list.
function fieldToDisplay(v2) {
  if (Array.isArray(v2)) {
    const isCharLike = v2.length > 0 && v2.every(x => typeof x === 'number' && x >= 0 && x <= 255);
    if (isCharLike) {
      let s = '';
      for (const c of v2) {
        if (c === 0) break;
        s += String.fromCharCode(c);
      }
      return `"${s.replace(/</g, '&lt;')}"`;
    }
    return '[' + v2.slice(0, 6).join(',') + (v2.length > 6 ? '…' : '') + ']';
  }
  return String(v2);
}

// Computes a display-friendly byte size for a variable entry {type, value},
// mirroring the same level of approximation used elsewhere in the app
// (e.g. the interpreter's own sizeof() support). Handles scalars, pointers,
// 1D/2D arrays, and struct instances. Returns "1 Byte" / "N Bytes" style
// text via formatBytes().
function sizeOfDisplay(v) {
  const type = v.type || '';
  const val = v.value;
  if (type === 'va_list') return '—';
  if (Array.isArray(val)) {
    const is2D = val.length > 0 && Array.isArray(val[0]);
    const elemBytes = Math.floor(bitWidthForType(type) / 8) || 4;
    if (is2D) {
      const rows = val.length;
      const cols = val[0] ? val[0].length : 0;
      return formatBytes(rows * cols * elemBytes);
    }
    return formatBytes(val.length * elemBytes);
  }
  if (val && typeof val === 'object') {
    // struct instance — approximate by summing field sizes
    let total = 0;
    for (const fv of Object.values(val)) {
      if (Array.isArray(fv)) {
        const isCharLike = fv.length > 0 && fv.every(x => typeof x === 'number' && x >= 0 && x <= 255);
        total += fv.length * (isCharLike ? 1 : 4);
      } else {
        total += 4;
      }
    }
    return formatBytes(total);
  }
  if (type.includes('*')) return formatBytes(8); // pointer
  return formatBytes(Math.floor(bitWidthForType(type) / 8));
}

// ─── C Interpreter ───────────────────────────────────────────────────────────
class CInterpreter {
  constructor(code, stdinQ) {
    this.code = code;
    this.steps = [];
    this.errors = [];
    this.stdinQueue = stdinQ || [];
    this._stdinIdx = 0;
    this._addrCtr = 0x7fff0000;
    this._heapCtr = 0x7FFE0000;
    this._heap = {};
    this.functions = {};
    this.structs = {};
    this.globals = {};
    this._globalFrame = { name:'[Global]', vars:{}, isGlobal:true };
    this._callStack = [];
    this._staticStore = {};
    this.output = '';
    this._vaLists = {};
    this._vaListCallArgs = [];
    this._declaredVars = new Set();
    this._functionScopes = {};
    // Tracks how many times each function has been entered (by name), so
    // that exponential/naive recursion (e.g. a textbook recursive Fibonacci
    // `fib(n) = fib(n-1) + fib(n-2)` with no memoization) is caught early
    // instead of silently running to the global step cap. Linear recursion
    // (factorial, gcd, single-branch tree walks, etc.) stays comfortably
    // under this limit for any input a learner would realistically try.
    this._fnCallCounts = {};
    this._MAX_CALLS_PER_FN = 60;
    try { this._tokenize(); this._buildAST(); this._initGlobals(); this._run(); }
    catch(e) { this.errors.push(e.message || String(e)); }
  }

  _nextAddr() { this._addrCtr -= 4; return '0x'+this._addrCtr.toString(16).toUpperCase(); }
  _heapAddr() { const a='0x'+this._heapCtr.toString(16).toUpperCase().padStart(8,'0'); this._heapCtr+=16; return a; }

  _tokenize() {
    const src = this.code; this.tokens = []; let i=0, line=1;
    while(i<src.length){
      if(src[i]==='\n'){line++;i++;continue;}
      if(/\s/.test(src[i])){i++;continue;}
      if(src[i]==='/'&&src[i+1]==='/'){while(i<src.length&&src[i]!=='\n')i++;continue;}
      if(src[i]==='/'&&src[i+1]==='*'){i+=2;while(i<src.length&&!(src[i]==='*'&&src[i+1]==='/')){if(src[i]==='\n')line++;i++;}i+=2;continue;}
      if(src[i]==='#'){const s=i;while(i<src.length&&src[i]!=='\n')i++;this.tokens.push({t:'pp',v:src.slice(s,i),ln:line});continue;}
      if(src[i]==='"'){let s='',j=i+1;while(j<src.length&&src[j]!=='"'){if(src[j]==='\\'&&j+1<src.length){const e=src[j+1];if(e==='n')s+='\n';else if(e==='t')s+='\t';else if(e==='\\')s+='\\';else if(e==='"')s+='"';else if(e==='0')s+='\0';else s+='\\'+e;j+=2;}else{s+=src[j];j++;}}this.tokens.push({t:'str',v:s,ln:line});i=j+1;continue;}
      if(src[i]==="'"){let ch,j=i+1;if(src[j]==='\\'){const e=src[j+1];ch=e==='n'?'\n':e==='t'?'\t':e==='0'?'\0':e==='\\'?'\\':e==="'"?"'":e;j+=2;}else{ch=src[j];j++;}this.tokens.push({t:'char',v:ch,ln:line});i=j+1;continue;}
      if(/[0-9]/.test(src[i])||(src[i]==='.'&&/[0-9]/.test(src[i+1]))){let n='',j=i,f=false;
        if(src[j]==='0'&&(src[j+1]==='x'||src[j+1]==='X')){n='0x';j+=2;while(j<src.length&&/[0-9a-fA-F]/.test(src[j]))n+=src[j++];this.tokens.push({t:'num',v:parseInt(n,16),ln:line,isFloat:false});i=j;continue;}
        if(src[j]==='0'&&src[j+1]==='b'){n='0b';j+=2;while(j<src.length&&/[01]/.test(src[j]))n+=src[j++];this.tokens.push({t:'num',v:parseInt(n.slice(2),2),ln:line,isFloat:false});i=j;continue;}
        while(j<src.length&&(/[0-9]/.test(src[j])||(src[j]==='.'&&!f))){if(src[j]==='.')f=true;n+=src[j];j++;}
        let hasFloatSuffix=false;
        if(src[j]==='f'||src[j]==='F'){hasFloatSuffix=true;j++;}
        while(src[j]==='u'||src[j]==='U'||src[j]==='l'||src[j]==='L')j++;
        const isFloatLit=f||hasFloatSuffix;
        this.tokens.push({t:'num',v:isFloatLit?parseFloat(n):parseInt(n),ln:line,isFloat:isFloatLit});i=j;continue;}
      if(/[a-zA-Z_]/.test(src[i])){let id='',j=i;while(j<src.length&&/[a-zA-Z0-9_]/.test(src[j])){id+=src[j];j++;}this.tokens.push({t:'id',v:id,ln:line});i=j;continue;}
      const two=src.slice(i,i+2);
      if(['++','--','==','!=','<=','>=','&&','||','->','+=','-=','*=','/=','%=','<<','>>'].includes(two)){this.tokens.push({t:'op',v:two,ln:line});i+=2;continue;}
      this.tokens.push({t:'op',v:src[i],ln:line});i++;
    }
    this._ti=0;
  }
  _pk(o=0){return this.tokens[this._ti+o]||{t:'eof',v:'',ln:0};}
  _nx(){return this.tokens[this._ti++]||{t:'eof',v:'',ln:0};}
  _ex(v){const t=this._nx();if(t.v!==v)throw new Error(`Expected '${v}' got '${t.v}' near line ${t.ln}`);return t;}
  _isType(v){return['int','float','double','char','void','long','short','unsigned','struct','const','size_t','signed','va_list','FILE'].includes(v);}

  _buildAST(){
    while(this._pk().t!=='eof'){
      const t=this._pk();
      if(t.t==='pp'){this._nx();continue;}
      if(t.v==='struct'&&this._pk(2).v==='{'){this._parseStructDef();continue;}
      if(t.v==='typedef'){this._parseTypedef();continue;}
      if(this._isType(t.v)||t.v==='*'){this._parseTopLevel();continue;}
      this._nx();
    }
  }

  _parseTypedef(){
    this._ex('typedef');
    if(this._pk().v==='struct'&&this._pk(2).v==='{'){
      this._nx();this._nx();this._ex('{');
      const fields=[];
      while(this._pk().v!=='}'){const type=this._parseType();const nm=this._nx().v;this._ex(';');fields.push({type,name:nm});}
      this._ex('}');const alias=this._nx().v;this._ex(';');
      this.structs[alias]=fields;
    } else if(this._pk().v==='enum'){
      this._nx();
      if(this._pk().v==='{'){
        this._nx();
        let enumVal=0;
        while(this._pk().v!=='}'){
          if(this._pk().v===','){this._nx();continue;}
          const eName=this._nx().v;
          if(this._pk().v==='='){this._nx();enumVal=this._eval(this._parseExpr(),this._globalFrame);}
          this._globalFrame.vars[eName]={type:'int',value:enumVal,addr:this._nextAddr(),seg:'data'};
          enumVal++;
        }
        this._ex('}');
        const alias=this._nx().v; this._ex(';');
      } else {
        while(this._pk().v!==';'&&this._pk().t!=='eof')this._nx();
        this._ex(';');
      }
    } else {
      while(this._pk().v!==';'&&this._pk().t!=='eof')this._nx();
      this._ex(';');
    }
  }

  _parseStructDef(){
    this._ex('struct');const name=this._nx().v;this._ex('{');
    const fields=[];
    while(this._pk().v!=='}'){
      const type=this._parseType();const nm=this._nx().v;
      let isArr=false,sz=null;
      if(this._pk().v==='['){this._nx();isArr=true;if(this._pk().v!==']')sz=this._parseExpr();this._ex(']');}
      this._ex(';');fields.push({type,name:nm,isArr,sz});
    }
    this._ex('}');if(this._pk().v!==';'){}
    this._ex(';');this.structs[name]=fields;
  }

  _parseType(){
    let t='';
    while(['const','unsigned','signed','long','short'].includes(this._pk().v))t+=this._nx().v+' ';
    if(this._pk().v==='struct')t+=this._nx().v+' ';
    t+=this._nx().v;
    while(this._pk().v==='*')t+=this._nx().v;
    return t.trim();
  }

  _parseTopLevel(){
    const type=this._parseType();const name=this._nx().v;
    if(this._pk().v==='('){
      this._ex('(');const params=[];
      while(this._pk().v!==')'){
        if(this._pk().v===','){this._nx();continue;}
        if(this._pk().v==='...'){this._nx();params.push({type:'...',name:'__varargs__',isVariadic:true});continue;}
        if(this._pk().v==='void'&&this._pk(1).v===')'){this._nx();break;}
        const pt=this._parseType();const pn=this._pk().t==='id'?this._nx().v:'_';
        let ia=false;if(this._pk().v==='['){this._nx();ia=true;if(this._pk().v!==']')this._parseExpr();this._ex(']');}
        params.push({type:pt,name:pn,isArr:ia});
      }
      this._ex(')');
      if(this._pk().v===';'){this._nx();return;}
      const body=this._parseBlock();
      this.functions[name]={name,type,params,body,line:body.length?body[0].ln:1};
      this._functionScopes[name] = new Set();
      for(const p of params) {
        if(!p.isVariadic) this._functionScopes[name].add(p.name);
      }
    } else {
      let isArr=false,sz=null;
      if(this._pk().v==='['){this._nx();isArr=true;if(this._pk().v!==']')sz=this._parseExpr();this._ex(']');}
      let init=null;if(this._pk().v==='='){this._nx();init=this._parseExpr();}
      const decls=[{name,isArr,arrSize:sz,init}];
      while(this._pk().v===','){
        this._nx();const nm2=this._nx().v;let ia2=false,sz2=null,init2=null;
        if(this._pk().v==='['){this._nx();ia2=true;if(this._pk().v!==']')sz2=this._parseExpr();this._ex(']');}
        if(this._pk().v==='='){this._nx();init2=this._parseExpr();}
        decls.push({name:nm2,isArr:ia2,arrSize:sz2,init:init2});
      }
      this._ex(';');
      for(const d of decls) {
        if (this._globalFrame.vars[d.name] !== undefined) {
          throw new Error(`error: redefinition of '${d.name}' (line ${this._pk().ln})`);
        }
        this.globals[d.name]={type,name:d.name,init:d.init,isArr:d.isArr,arrSize:d.arrSize};
        this._declaredVars.add(d.name);
      }
    }
  }

  _parseBlock(){this._ex('{');const s=[];while(this._pk().v!=='}'&&this._pk().t!=='eof'){const st=this._parseStmt();if(st)s.push(st);}this._ex('}');return s;}

  _parseStmt(){
    const t=this._pk();
    if(t.v==='{')return{type:'block',body:this._parseBlock(),ln:t.ln};
    if(t.v==='return')return this._parseReturn();
    if(t.v==='if')return this._parseIf();
    if(t.v==='while')return this._parseWhile();
    if(t.v==='for')return this._parseFor();
    if(t.v==='do')return this._parseDo();
    if(t.v==='switch')return this._parseSwitch();
    if(t.v==='break'){this._nx();this._ex(';');return{type:'break',ln:t.ln};}
    if(t.v==='continue'){this._nx();this._ex(';');return{type:'continue',ln:t.ln};}
    if(t.t==='pp'){this._nx();return null;}
    if(t.v===';'){this._nx();return null;}
    if(t.v==='static'){
      this._nx();
      const d=this._parseDecl();
      d.isStatic=true;
      return d;
    }
    if(t.v==='struct'||this._isType(t.v)){
      const save=this._ti;
      try { return this._parseDecl(); }
      catch(e) { this._ti=save; const e2=this._parseExpr(); this._ex(';'); return{type:'expr',expr:e2,ln:t.ln}; }
    }
    const e=this._parseExpr();this._ex(';');return{type:'expr',expr:e,ln:t.ln};
  }

  _parseReturn(){const ln=this._pk().ln;this._ex('return');let v=null;if(this._pk().v!==';')v=this._parseExpr();this._ex(';');return{type:'return',val:v,ln};}
  _parseIf(){const ln=this._pk().ln;this._ex('if');this._ex('(');const c=this._parseExpr();this._ex(')');const th=this._parseStmt();let el=null;if(this._pk().v==='else'){this._nx();el=this._parseStmt();}return{type:'if',cond:c,then:th,else:el,ln};}
  _parseWhile(){const ln=this._pk().ln;this._ex('while');this._ex('(');const c=this._parseExpr();this._ex(')');const b=this._parseStmt();return{type:'while',cond:c,body:b,ln};}
  _parseFor(){
    const ln=this._pk().ln;this._ex('for');this._ex('(');
    let ini=null,cond=null,upd=null;
    if(this._pk().v!==';'){if(this._isType(this._pk().v)||this._pk().v==='struct'){ini=this._parseDecl(true);this._ex(';');}else{ini=this._parseExpr();this._ex(';');}}else this._ex(';');
    if(this._pk().v!==';')cond=this._parseExpr();this._ex(';');
    if(this._pk().v!==')')upd=this._parseExpr();this._ex(')');const b=this._parseStmt();
    return{type:'for',init:ini,cond,update:upd,body:b,ln};
  }
  _parseDo(){const ln=this._pk().ln;this._ex('do');const b=this._parseStmt();this._ex('while');this._ex('(');const c=this._parseExpr();this._ex(')');this._ex(';');return{type:'do',cond:c,body:b,ln};}

  _parseSwitch(){
    const ln=this._pk().ln;this._ex('switch');this._ex('(');const disc=this._parseExpr();this._ex(')');this._ex('{');
    const cases=[];
    while(this._pk().v!=='}'&&this._pk().t!=='eof'){
      if(this._pk().v==='case'){
        this._nx();const cv=this._parseExpr();this._ex(':');
        const body=[];
        while(!['case','default','}'].includes(this._pk().v)&&this._pk().t!=='eof'){const st=this._parseStmt();if(st)body.push(st);}
        cases.push({val:cv,body,isDefault:false});
      } else if(this._pk().v==='default'){
        this._nx();this._ex(':');
        const body=[];
        while(!['case','default','}'].includes(this._pk().v)&&this._pk().t!=='eof'){const st=this._parseStmt();if(st)body.push(st);}
        cases.push({val:null,body,isDefault:true});
      } else this._nx();
    }
    this._ex('}');
    return{type:'switch',disc,cases,ln};
  }

  _parseDecl(noSemi=false){
    const ln=this._pk().ln;const vt=this._parseType();
    if(this._pk().t!=='id') throw new Error('Not a declaration near line '+ln);
    const decls=[];
    do{
      if(this._pk().v===',')this._nx();
      const name=this._nx().v;let ia=false,as=null,as2=null,init=null;
      if(this._pk().v==='['){this._nx();ia=true;if(this._pk().v!==']')as=this._parseExpr();this._ex(']');
        if(this._pk().v==='['){this._nx();ia=true;if(this._pk().v!==']')as2=this._parseExpr();this._ex(']');}
      }
      if(this._pk().v==='='){this._nx();init=this._parse2DInit();}
      decls.push({name,isArr:ia,arrSize:as,arrSize2:as2,init,line:ln});
    }while(this._pk().v===',');
    if(!noSemi)this._ex(';');
    return{type:'decl',varType:vt,decls,ln};
  }

  _parse2DInit(){
    if(this._pk().v==='{'){
      this._nx();const items=[];
      while(this._pk().v!=='}'){
        if(this._pk().v===','){this._nx();continue;}
        items.push(this._parse2DInit());
      }
      this._ex('}');
      return{type:'arrlit',items};
    }
    return this._parseExpr();
  }

  _parseExpr(p=-1){
    let left=this._parseUnary();
    while(true){
      const op=this._pk().v;
      const pr=this._prec(op);if(pr<=p)break;
      this._nx();
      if(op==='?'){const th=this._parseExpr(0);this._ex(':');const el=this._parseExpr(0.4);left={type:'tern',c:left,t:th,e:el};continue;}
      const asgnOps=['=','+=','-=','*=','/=','%='];
      if(asgnOps.includes(op)){
        left={type:'bin',op,l:left,r:this._parseExpr(pr-1)};
      } else {
        left={type:'bin',op,l:left,r:this._parseExpr(pr)};
      }
    }
    return left;
  }
  _prec(op){const P={',':-1,'=':0,'+=':0,'-=':0,'*=':0,'/=':0,'%=':0,'?':0.4,'||':1,'&&':2,'|':3,'^':4,'&':5,'==':6,'!=':6,'<':7,'>':7,'<=':7,'>=':7,'<<':8,'>>':8,'+':9,'-':9,'*':10,'/':10,'%':10};return P[op]??-2;}

  _parseUnary(){
    const t=this._pk();
    if(t.v==='!'){this._nx();return{type:'un',op:'!',x:this._parseUnary()};}
    if(t.v==='-'){this._nx();return{type:'un',op:'-',x:this._parseUnary()};}
    if(t.v==='+'){this._nx();return this._parseUnary();}
    if(t.v==='~'){this._nx();return{type:'un',op:'~',x:this._parseUnary()};}
    if(t.v==='*'){this._nx();return{type:'deref',x:this._parseUnary()};}
    if(t.v==='&'){this._nx();return{type:'addr',x:this._parseUnary()};}
    if(t.v==='++'){this._nx();return{type:'pre',op:'++',x:this._parseUnary()};}
    if(t.v==='--'){this._nx();return{type:'pre',op:'--',x:this._parseUnary()};}
    if(t.v==='('){
      if(this._isType(this._pk(1).v)||this._pk(1).v==='struct'){
        const si=this._ti;this._nx();
        try{const ct=this._parseType();if(this._pk().v===')'){this._nx();return{type:'cast',ct,x:this._parseUnary()};}}
        catch(e){}
        this._ti=si;
      }
      this._nx();const e=this._parseExpr();this._ex(')');return e;
    }
    if(t.v==='sizeof'){
      this._nx();
      if(this._pk().v==='('){
        this._nx();
        if(this._isType(this._pk().v)){const tp=this._parseType();this._ex(')');return{type:'sizeof',tp};}
        const e=this._parseExpr();this._ex(')');return{type:'sizeof',x:e};
      }
      const e2=this._parseUnary();return{type:'sizeof',x:e2};
    }
    return this._parsePost();
  }

  _parsePost(){
    let e=this._parsePrim();
    while(true){
      const op=this._pk().v;
      if(op==='++'){this._nx();e={type:'post',op:'++',x:e};}
      else if(op==='--'){this._nx();e={type:'post',op:'--',x:e};}
      else if(op==='['){this._nx();const i=this._parseExpr();this._ex(']');e={type:'sub',x:e,i};}
      else if(op==='('){this._nx();const args=[];while(this._pk().v!==')'){if(this._pk().v===','){this._nx();continue;}args.push(this._parseExpr());}this._ex(')');e={type:'call',fn:e,args};}
      else if(op==='.'){this._nx();e={type:'mem',x:e,f:this._nx().v};}
      else if(op==='->'){this._nx();e={type:'pmem',x:e,f:this._nx().v};}
      else break;
    }
    return e;
  }

  _parsePrim(){
  const t=this._nx();
  if(t.t==='num')return{type:'lit',v:t.v,isFloat:!!t.isFloat, ln:t.ln};
  if(t.t==='str')return{type:'slit',v:t.v, ln:t.ln};
  if(t.t==='char')return{type:'clit',v:t.v, ln:t.ln};
  if(t.t==='id'){if(t.v==='NULL')return{type:'lit',v:null, ln:t.ln};if(t.v==='true')return{type:'lit',v:1, ln:t.ln};if(t.v==='false')return{type:'lit',v:0, ln:t.ln};return{type:'id',n:t.v,ln:t.ln};}
  if(t.v==='{'){
    let depth=1;while(depth>0&&this._pk().t!=='eof'){if(this._pk().v==='{')depth++;if(this._pk().v==='}')depth--;this._nx();}
    return{type:'lit',v:0, ln:t.ln};
  }
  return{type:'lit',v:0, ln:t.ln};
}

  _initGlobals(){
    for(const [name,g] of Object.entries(this.globals)){
      if(this._globalFrame.vars[name]) continue;
      let val;
      if(g.isArr){
        if(g.init){
          val=this._flattenInit(g.init,this._globalFrame);
          if(g.arrSize){
            const declaredSz=this._eval(g.arrSize,this._globalFrame);
            if(val.length>declaredSz){
              throw new Error(`initializer-string for char array '${name}' is too long — increase your array size`);
            }
            while(val.length<declaredSz) val.push(0);
          }
        }
        else val=[];
      } else if(g.init){
        val=this._eval(g.init,this._globalFrame);
      } else {
        // FIX: a global `struct Foo bar;` with no initializer used to fall
        // through to `val = 0`, leaving `bar` as a plain number instead of
        // an object with fields. Any later `bar.field` (via '.', '->', or
        // as a buffer target for strcpy/strcat) then silently failed
        // because `_eval`'s 'mem' case does `obj[e.f]` on a number, which
        // is always 0/undefined, and strcpy's `_resolveBuffer` can't
        // resolve a number to an array either. Default-construct a struct
        // object (with zeroed scalar fields and correctly-sized zero
        // arrays for array fields) so member access and strcpy/strcat into
        // char-array fields work exactly like a real uninitialized struct.
        const structName = g.type.replace(/^struct\s+/, '').trim();
        const fields = this.structs[structName] || this.structs[g.type];
        if (fields) {
          const obj = {};
          for (const f of fields) {
            if (f.isArr) {
              const sz = f.sz ? this._eval(f.sz, this._globalFrame) : 0;
              obj[f.name] = new Array(sz).fill(0);
            } else {
              obj[f.name] = 0;
            }
          }
          val = obj;
        } else {
          val = 0;
        }
      }
      this._globalFrame.vars[name]={type:g.type,value:val,addr:this._nextAddr(),seg:g.init?'data':'bss'};
    }
  }

  _literalKind(node){
  if(!node) return null;
  if(node.type==='slit') return 'string';
  if(node.type==='clit') return 'char';
  if(node.type==='lit'){
    if(node.v===null) return null;
    return node.isFloat ? 'float' : 'int';
  }
  if(node.type==='un' && node.op==='-') {
    const inner = this._literalKind(node.x);
    if(inner && node.x) {
      if(node.x.ln) node.ln = node.x.ln;
    }
    return inner;
  }
  return null;
}

  _checkHomogeneous(node){
    // Enforce homogeneous literal kinds within a plain array brace-initializer
    // like `int arr[3] = {1, 2, 3};` or `{{1,2},{3,4}}`. This is intentionally
    // ONLY ever reached for genuine array declarations — see call sites: it's
    // invoked exclusively from _flattenInit(), which is itself only called on
    // the top-level initializer of a real array (`d.isArr` in _execDecl, or
    // `g.isArr` in _initGlobals). Struct literals such as
    // `struct Student s = {"Anisur", 25, 4.56};` are handled by a completely
    // separate branch in _execDecl that walks `d.init.items` field-by-field
    // and only recurses into _flattenInit for an individual field that is
    // itself a nested `{...}` (e.g. an array-typed struct field, which really
    // is homogeneous by C's type system). So this check never fires for
    // struct/union/enum initializers — only for actual arrays.
    if(!node || node.type!=='arrlit') return;
    let kind=null, kindLn=null;
    for(const item of node.items){
      if(item && item.type==='arrlit'){ this._checkHomogeneous(item); continue; }
      const k=this._literalKind(item);
      if(k===null) continue; // skip non-literal items (variables/expressions) — can't classify statically
      if(kind===null){ kind=k; kindLn=item.ln; }
      else if(kind!==k){
        const ln=item.ln||kindLn||0;
        throw new Error(`Use homogeneous data in array line at ${ln}`);
      }
    }
  }

  _flattenInit(node,frame){
    if(node&&node.type==='arrlit'){
      this._checkHomogeneous(node);
      return node.items.map(it=>it.type==='arrlit'?this._flattenInit(it,frame):this._eval(it,frame));
    }
    if(node&&node.type==='slit'){const v=node.v.split('').map(c=>c.charCodeAt(0));v.push(0);return v;}
    const v=this._eval(node,frame);return Array.isArray(v)?v:[v];
  }

  _validateVariable(name, line, frame) {
    if (frame && frame.vars && frame.vars[name] !== undefined) {
      return true;
    }
    if (this._globalFrame.vars[name] !== undefined) {
      return true;
    }
    const currentFn = this._callStack.length > 0 ? this._callStack[this._callStack.length-1] : null;
    if (currentFn && currentFn.vars && currentFn.vars[name] !== undefined) {
      return true;
    }
    if (this.functions[name]) {
      return true;
    }
    if (this.structs[name]) {
      return true;
    }
    throw new Error(`error: '${name}' undeclared (first use in this function) (line ${line})`);
  }

  // Builds a human-readable type string for a single declared variable,
  // e.g. "int" or "int [10]" / "char [10]", used both to remember what a
  // name was first declared as, and to report a real redefinition.
  _declTypeStr(s, d, frame) {
    let t = s.varType;
    if (d.isArr) {
      let sz = '';
      try {
        if (d.arrSize) {
          const v = this._eval(d.arrSize, frame);
          if (v !== undefined && v !== null) sz = String(v);
        }
      } catch (e) { /* size not evaluable yet — leave blank */ }
      t += ` [${sz}]`;
    }
    return t;
  }

  // ── Lexical block scoping for redeclaration tracking ──────────────────────
  // Every `{ ... }` block, every `for` loop (init clause + its iterations),
  // and every `switch` body pushes a scope. A scope remembers exactly which
  // names it declared ("own") and what those names resolved to in the
  // enclosing scope before it shadowed them ("outerSaved"). When the scope
  // ends we restore the enclosing view — this is what lets the same name
  // (e.g. a loop counter `i`) be legally re-declared in a *sibling* scope
  // (two separate `for` loops in the same function) while still catching a
  // genuine duplicate declaration written twice in the *same* block.
  _pushScope(frame) {
    frame._declTypes = frame._declTypes || {};
    frame._scopeStack = frame._scopeStack || [];
    const scope = { own: new Map(), outerSaved: new Map() };
    frame._scopeStack.push(scope);
    return scope;
  }
  _popScope(frame, scope) {
    if (!frame._scopeStack) return;
    const idx = frame._scopeStack.lastIndexOf(scope);
    if (idx !== -1) frame._scopeStack.splice(idx, 1);
    for (const name of scope.own.keys()) {
      if (scope.outerSaved.has(name)) {
        const outer = scope.outerSaved.get(name);
        if (outer === undefined) delete frame._declTypes[name];
        else frame._declTypes[name] = outer;
      } else {
        delete frame._declTypes[name];
      }
    }
  }

  // Builds the GCC-style two-part error ("redefinition ... / note: previous
  // definition is here ...") for both the same-datatype and different-datatype
  // cases.
  _buildRedefError(s, d, prevRecord, typeStr, sameType) {
    const newSizeM = typeStr.match(/\[(.*)\]$/);
    const prevSizeM = prevRecord.type.match(/\[(.*)\]$/);
    const newBase = newSizeM ? typeStr.slice(0, newSizeM.index).trim() : typeStr;
    const prevBase = prevSizeM ? prevRecord.type.slice(0, prevSizeM.index).trim() : prevRecord.type;
    const newDecl = `${newBase} ${d.name}${newSizeM ? `[${newSizeM[1]}]` : ''};`;
    const prevDecl = `${prevBase} ${d.name}${prevSizeM ? `[${prevSizeM[1]}]` : ''};`;

    if (sameType) {
      return new Error(
        `/user-input:${s.ln}:1: error: redefinition of '${d.name}' with a datatype: '${typeStr}'<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;${newDecl}<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^<br>` +
        `/user-input:${prevRecord.line}:1: note: previous definition is here<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;${prevDecl}<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^`
      );
    }
    return new Error(
      `/user-input:${s.ln}:1: error: redefinition of '${d.name}' with a datatype: ` +
      `'${typeStr}' vs '${prevRecord.type}'<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${newDecl}<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^<br>` +
      `/user-input:${prevRecord.line}:1: note: previous definition is here<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${prevDecl}<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^`
    );
  }

  _checkRedeclaration(s, d, frame) {
    // Redefinition detection, matching real C block-scoping rules:
    //  - Declaring the same name a SECOND time within the SAME lexical
    //    scope is always an error — even when the datatype matches exactly
    //    (e.g. `int matrix[2][2]; int matrix[2][2];` back to back in the
    //    same block). This is the case that must be flagged now, in
    //    addition to the pre-existing different-datatype case.
    //  - Declaring the same name again in a DIFFERENT (sibling or nested)
    //    scope — e.g. the loop counter `i` in two separate, sequential
    //    `for` loops, or a decl inside a loop body that re-executes once
    //    per iteration — is completely legal C and must NOT be flagged.
    //    This is handled by _pushScope/_popScope: each block/for/switch
    //    scope tracks only the names it itself declared ("own"), so a name
    //    only conflicts with a PRIOR declaration made in that very same
    //    scope, never with an enclosing or already-exited sibling scope.
    if (!frame) return;
    frame._declTypes = frame._declTypes || {};
    const typeStr = this._declTypeStr(s, d, frame);
    const scope = frame._scopeStack && frame._scopeStack.length
      ? frame._scopeStack[frame._scopeStack.length - 1]
      : null;

    if (!scope) {
      // Defensive fallback (should not normally happen — _callFn always
      // pushes a function-level scope before executing a function body).
      const prev = frame._declTypes[d.name];
      if (prev) {
        const sameType = prev.type === typeStr;
        throw this._buildRedefError(s, d, prev, typeStr, sameType);
      }
      frame._declTypes[d.name] = { type: typeStr, line: s.ln };
      return;
    }

    const ownPrev = scope.own.get(d.name);
    if (ownPrev) {
      // A second, textually distinct declaration of the same name within
      // THIS scope — a genuine redefinition error whether or not the
      // datatype also matches.
      const sameType = ownPrev.type === typeStr;
      throw this._buildRedefError(s, d, ownPrev, typeStr, sameType);
    }

    // First declaration of this name within the current scope. Remember
    // whatever this name resolved to in an enclosing scope (or nothing),
    // so it can be restored once this scope ends — this is what makes
    // shadowing / reusing a name in a sibling scope legal.
    if (!scope.outerSaved.has(d.name)) {
      scope.outerSaved.set(d.name, frame._declTypes[d.name]);
    }
    const record = { type: typeStr, line: s.ln };
    scope.own.set(d.name, record);
    frame._declTypes[d.name] = record;
  }

  _validateExprVariables(node, frame) {
    if (!node) return;
    if (node.type === 'id') {
      const name = node.n;
      if (this.functions[name]) return;
      if (['printf','scanf','strlen','strcpy','strncpy','strcat','strncat','strcmp','strncmp',
           'malloc','calloc','realloc','free','sizeof','toupper','tolower','isdigit','isalpha',
           'isspace','abs','fabs','labs','sqrt','cbrt','pow','floor','ceil','round','trunc',
           'fmod','fmin','fmax','hypot','exp','exp2','log','log2','log10','sin','cos','tan',
           'asin','acos','atan','atan2','sinh','cosh','tanh','asinh','acosh','atanh','rand',
           'srand','atoi','atof','putchar','puts','exit','fopen','fclose','fprintf','fgets',
           'va_start','va_arg','va_end'].includes(name)) return;
      this._validateVariable(name, node.ln || 0, frame);
      return;
    }
    for (const key of Object.keys(node)) {
      if (key === 'type' || key === 'ln') continue;
      const child = node[key];
      if (Array.isArray(child)) {
        for (const item of child) {
          if (item && typeof item === 'object') {
            this._validateExprVariables(item, frame);
          }
        }
      } else if (child && typeof child === 'object') {
        this._validateExprVariables(child, frame);
      }
    }
  }

  _run(){
    this._addStep({ln:1,desc:'Program starts &rarr; calling <b>main()</b>',frames:[],heap:{},out:'',cs:[]});
    if(!this.functions['main']){this.errors.push('No main() function found.');return;}
    this._callFn('main',[],null);
    this._addStep({ln:1,desc:'<b>Program finished executing.</b>',frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
  }

  _callFn(name,args,callSite){
    const fn=this.functions[name];
    if(!fn)throw new Error('Undefined function: '+name+(callSite?.ln?(' (line '+callSite.ln+')'):''));

    // Guard against naive exponential recursion (e.g. a textbook recursive
    // Fibonacci with no memoization: fib(n) = fib(n-1) + fib(n-2)). Such
    // functions call themselves so many times that the trace balloons into
    // hundreds of steps for even modest inputs, which is both slow to
    // generate and unhelpful to step through. Normal recursion (factorial,
    // gcd, single-branch tree/list walks, divide-and-conquer sorts, etc.)
    // stays well under this call count for realistic inputs, so this only
    // triggers for genuinely exponential call patterns.
    this._fnCallCounts[name] = (this._fnCallCounts[name] || 0) + 1;
    if (this._fnCallCounts[name] > this._MAX_CALLS_PER_FN) {
      throw new Error(
        `Stopped: '${name}()' was called more than ${this._MAX_CALLS_PER_FN} times. ` +
        `This usually means naive exponential recursion (e.g. a recursive Fibonacci ` +
        `without memoization). Try a smaller input, or rewrite '${name}' iteratively ` +
        `or with memoization.`
      );
    }

    const frame={name,vars:{},retVal:undefined,_variadicArgs:[]};
    const isVariadic=fn.params.some(p=>p.isVariadic);
    fn.params.forEach((p,i)=>{
      if(p.isVariadic){ frame._variadicArgs = args.slice(i); return; }
      frame.vars[p.name]={type:p.type,value:args[i]??0,addr:this._nextAddr(),isParam:true,seg:'stack'};
      this._declaredVars.add(p.name);
      if (this._functionScopes[name]) {
        this._functionScopes[name].add(p.name);
      }
    });
    // Function-level scope: the base scope for the whole function body,
    // so top-level `int x;` declarations use the same duplicate-detection
    // path as nested block declarations.
    const fnScope=this._pushScope(frame);
    this._callStack.push(frame);
    if(this._callStack.length>200) throw new Error('Stack overflow — possible infinite recursion in '+name+'()');
    this._addStep({ln:fn.line||1,desc:`Called <b>${name}(${args.map(a=>this._fv(a)).join(', ')})</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    try{this._execBlock(fn.body,frame);}
    catch(e){if(e.type==='ret')frame.retVal=e.val;else if(e.type!=='break'&&e.type!=='cont')throw e;}
    this._popScope(frame, fnScope);
    this._callStack.pop();
    this._addStep({ln:callSite?.ln||fn.line||1,desc:`<b>${name}()</b> returned ${frame.retVal!==undefined?this._fv(frame.retVal):'void'}`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    return frame.retVal;
  }

  _execBlock(stmts,frame){for(const s of stmts){if(s)this._execStmt(s,frame);}}

  _execStmt(s,frame){
    switch(s.type){
      case 'block': {
        // A bare `{ ... }` block (or the body of an `if`/`while`/`do`)
        // introduces its own lexical scope: declarations made directly
        // inside it are un-declared again once the block exits, so a
        // sibling block (e.g. the next loop iteration, or an `else`
        // branch) can freely reuse the same names.
        const scope=this._pushScope(frame);
        try { this._execBlock(s.body,frame); }
        finally { this._popScope(frame,scope); }
        break;
      }
      case 'decl':    this._execDecl(s,frame);break;
      case 'expr':    this._execExprStmt(s,frame);break;
      case 'return':  this._execRet(s,frame);break;
      case 'if':      this._execIf(s,frame);break;
      case 'while':   this._execWhile(s,frame);break;
      case 'for':     this._execFor(s,frame);break;
      case 'do':      this._execDo(s,frame);break;
      case 'switch':  this._execSwitch(s,frame);break;
      case 'break':   throw{type:'break'};
      case 'continue':throw{type:'cont'};
    }
  }

  _execDecl(s,frame){
    for(const d of s.decls){
      this._checkRedeclaration(s, d, frame);
      
      let val;const vt=s.varType;
      if(vt==='va_list'){
        frame.vars[d.name]={type:'va_list',value:'<va_list>',addr:this._nextAddr(),seg:'stack',_vaIdx:0,_declNode:d};
        this._declaredVars.add(d.name);
        this._addStep({ln:s.ln,desc:`Declare <code>va_list ${d.name}</code> (variadic arg list)`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name),chg:d.name});
        continue;
      }
      if(s.isStatic){
        const key=frame.name+'::'+d.name;
        if(this._staticStore[key]){ frame.vars[d.name]=this._staticStore[key]; continue; }
      }
      if(d.isArr){
        const sz=d.arrSize?this._eval(d.arrSize,frame):0;
        if(d.arrSize2){
          const sz2=this._eval(d.arrSize2,frame);
          if(d.init){
            const flat=this._flattenInit(d.init,frame);
            const isNested = flat.length>0 && Array.isArray(flat[0]);
            const rows=[];
            if(isNested){
              for(let r=0;r<sz;r++){
                const srcRow = flat[r]||[];
                const row=srcRow.slice(0,sz2);
                while(row.length<sz2) row.push(0);
                rows.push(row);
              }
            } else {
              if(flat.length>sz*sz2){
                throw new Error(`initializer for array '${d.name}' has too many elements for size [${sz}][${sz2}] (line ${s.ln})`);
              }
              for(let r=0;r<sz;r++){
                const row=[];
                for(let c=0;c<sz2;c++){
                  const idx=r*sz2+c;
                  row.push(idx<flat.length?flat[idx]:0);
                }
                rows.push(row);
              }
            }
            val=rows;
          } else {
            val=Array.from({length:sz},()=>new Array(sz2).fill(0));
          }
        } else if(d.init){
          val=this._flattenInit(d.init,frame);
          if(d.arrSize){
            if(val.length>sz){
              throw new Error(`initializer for array '${d.name}' is too long for the specified size (line ${s.ln}) — increase your array size`);
            }
            while(val.length<sz) val.push(0);
          }
        }
        else val=new Array(sz).fill(0);
      } else {
        if (d.init && d.init.type === 'arrlit') {
          const structName = vt.replace(/^struct\s+/, '').trim();
          const fields = this.structs[structName] || this.structs[vt];
          if (fields) {
            const obj = {};
            d.init.items.forEach((item, fi) => {
              const f = fields[fi];
              if (!f) return;
              obj[f.name] = item.type === 'arrlit' ? this._flattenInit(item, frame) : this._eval(item, frame);
            });
            val = obj;
          } else if (/^struct\b/.test(vt)) {
            throw new Error(`error: unknown type name 'struct ${structName}' — no 'struct ${structName} { ... };' was defined (line ${s.ln})`);
          } else {
            val = this._flattenInit(d.init, frame);
          }
        } else if (!d.init) {
          const structName = vt.replace(/^struct\s+/, '').trim();
          const fields = this.structs[structName] || this.structs[vt];
          if (fields) {
            const obj = {};
            for (const f of fields) {
              if (f.isArr) {
                const sz = f.sz ? this._eval(f.sz, frame) : 0;
                obj[f.name] = new Array(sz).fill(0);
              } else {
                obj[f.name] = 0;
              }
            }
            val = obj;
          } else {
            val = 0;
          }
        } else {
          val = this._eval(d.init, frame);
        }
      }
      const entry={type:vt,value:val,addr:this._nextAddr(),changed:true,seg:s.isStatic?'static':'stack',_declNode:d};
      frame.vars[d.name]=entry;
      this._declaredVars.add(d.name);
      if (frame.name && this._functionScopes[frame.name]) {
        this._functionScopes[frame.name].add(d.name);
      }
      if(s.isStatic) this._staticStore[frame.name+'::'+d.name]=entry;
      this._addStep({ln:s.ln,desc:`Declare <code>${s.isStatic?'static ':''}${vt} ${d.name}</code>${d.init?` = <b>${this._fv(val, vt)}</b>`:''}`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name),chg:d.name});
      frame.vars[d.name].changed=false;
    }
  }

  _execExprStmt(s,frame){
    this._validateExprVariables(s.expr, frame);
    const v=this._eval(s.expr,frame);
    const e=s.expr;
    if(e.type==='bin'&&['=','+=','-=','*=','/=','%='].includes(e.op)){
      const nm=this._exprName(e.l);
      this._addStep({ln:s.ln,desc:`Assign <code>${nm}</code> ${e.op} &rarr; <b>${this._fv(v)}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name),chg:nm});
    } else if(e.type==='post'||e.type==='pre'){
      const nm=this._exprName(e.x);
      this._addStep({ln:s.ln,desc:`<code>${nm}${e.op}</code> &rarr; now <b>${this._fv(v)}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name),chg:nm});
    }
  }
  _exprName(e){ if(!e)return'?'; if(e.type==='id')return e.n; if(e.type==='sub')return this._exprName(e.x); if(e.type==='mem')return this._exprName(e.x); if(e.type==='deref')return this._exprName(e.x); return '?'; }

  _execRet(s,frame){
    if (s.val) {
      this._validateExprVariables(s.val, frame);
      const v=this._eval(s.val,frame);
      this._addStep({ln:s.ln,desc:`return <b>${v!==undefined?this._fv(v):'void'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      throw{type:'ret',val:v};
    } else {
      this._addStep({ln:s.ln,desc:`return void`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      throw{type:'ret',val:undefined};
    }
  }

  _execIf(s,frame){
    this._validateExprVariables(s.cond, frame);
    const c=this._eval(s.cond,frame);
    this._addStep({ln:s.ln,desc:`<b>if</b> condition is <b>${c?'true ✓':'false ✗'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    if(c)this._execStmt(s.then,frame);else if(s.else)this._execStmt(s.else,frame);
  }

  _execWhile(s,frame){
    let iter=0;
    while(iter++<2000){
      this._validateExprVariables(s.cond, frame);
      const c=this._eval(s.cond,frame);
      this._addStep({ln:s.ln,desc:`<b>while</b> condition is <b>${c?'true ✓':'false ✗'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      if(!c)break;
      try{this._execStmt(s.body,frame);}catch(e){if(e.type==='break')break;if(e.type!=='cont')throw e;}
    }
  }

  _execFor(s,frame){
    // The whole `for (init; cond; update) body` statement is one lexical
    // scope, so a variable declared in the init clause (e.g. `int i`) is
    // local to this loop only — it goes out of scope once the loop ends,
    // letting a later, separate `for (int i = ...)` reuse the same name
    // without triggering a redefinition error.
    const scope=this._pushScope(frame);
    try{
      if(s.init){if(s.init.type==='decl')this._execDecl(s.init,frame);else {
        this._validateExprVariables(s.init, frame);
        this._eval(s.init,frame);
      }}
      let iter=0;
      while(iter++<2000){
        if(s.cond){
          this._validateExprVariables(s.cond, frame);
          const c=this._eval(s.cond,frame);
          this._addStep({ln:s.ln,desc:`<b>for</b> condition is <b>${c?'true ✓':'false ✗'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
          if(!c)break;
        }
        try{this._execStmt(s.body,frame);}catch(e){if(e.type==='break')break;if(e.type!=='cont')throw e;}
        if(s.update){
          this._validateExprVariables(s.update, frame);
          this._eval(s.update,frame);
        }
      }
    } finally {
      this._popScope(frame,scope);
    }
  }

  _execDo(s,frame){
    let iter=0;
    do{
      try{this._execStmt(s.body,frame);}catch(e){if(e.type==='break')break;if(e.type!=='cont')throw e;}
      this._validateExprVariables(s.cond, frame);
      const c=this._eval(s.cond,frame);
      this._addStep({ln:s.ln,desc:`<b>do-while</b> condition is <b>${c?'true ✓':'false ✗'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      if(!c)break;
    }while(iter++<2000);
  }

  _execSwitch(s,frame){
    // The entire switch body — across all `case`/`default` labels — is one
    // lexical scope in real C (fall-through labels share declarations), so
    // push a single scope for the whole statement rather than per-case.
    const scope=this._pushScope(frame);
    try{
      this._validateExprVariables(s.disc, frame);
      const dv=this._eval(s.disc,frame);
      this._addStep({ln:s.ln,desc:`<b>switch</b> on value <b>${this._fv(dv)}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      let matched=false;
      try{
        for(const c of s.cases){
          if(!matched){ 
            if(c.isDefault) matched=true; 
            else {
              this._validateExprVariables(c.val, frame);
              if(this._eval(c.val,frame)===dv) matched=true; 
            }
          }
          if(matched){ this._execBlock(c.body,frame); }
        }
      }catch(e){ if(e.type!=='break') throw e; }
    } finally {
      this._popScope(frame,scope);
    }
  }

  _eval(e,frame){
    if(!e)return 0;
    switch(e.type){
      case 'lit': return e.v===null?null:e.v;
      case 'clit':return e.v.charCodeAt(0);
      case 'slit':return e.v;
      case 'arrlit': return e.items.map(it=>it.type==='arrlit'?this._eval(it,frame):this._eval(it,frame));
      case 'sizeof':return e.tp?this._szType(e.tp):this._szOf(this._eval(e.x,frame));
      case 'id': {
        const n=e.n;
        if (this.functions[n]) return n;
        for(let i=this._callStack.length-1;i>=0;i--){if(this._callStack[i].vars[n]!==undefined)return this._callStack[i].vars[n].value;}
        if(this._globalFrame.vars[n]!==undefined)return this._globalFrame.vars[n].value;
        return 0;
      }
      case 'un': {
        const vv=this._eval(e.x,frame);
        if(e.op==='-')return -vv;
        if(e.op==='!')return vv?0:1;
        if(e.op==='~'){ const n=Math.trunc(Number(vv)||0); return (~n)|0; }
        return vv;
      }
      case 'pre': { const ref=this._lval(e.x,frame);if(!ref)return 0; const cur=ref.get();const nv=e.op==='++'?cur+1:cur-1;ref.set(nv);return nv; }
      case 'post': { const ref=this._lval(e.x,frame);if(!ref)return 0; const old=ref.get();ref.set(e.op==='++'?old+1:old-1);return old; }
      case 'cast': { const prevHint=this._lastCastType; this._lastCastType=e.ct; const rv=this._castVal(this._eval(e.x,frame),e.ct); this._lastCastType=prevHint; return rv; }
      case 'addr': { return this._addrOf(e.x,frame); }
      case 'deref': {
        const ptr=this._eval(e.x,frame);
        if(this._addrCells&&this._addrCells[ptr]) return this._addrCells[ptr].get();
        for(const f of[...this._callStack,this._globalFrame]){if(!f)continue;for(const[k,v]of Object.entries(f.vars)){if(v.addr===ptr)return v.value;}}
        return 0;
      }
      case 'bin': return this._evalBin(e,frame);
      case 'tern':return this._eval(e.c,frame)?this._eval(e.t,frame):this._eval(e.e,frame);
      case 'sub': {
        const arr=this._eval(e.x,frame);const idx=this._eval(e.i,frame);
        if(Array.isArray(arr))return arr[idx]??0;
        if(typeof arr==='string'&&this._heap[arr]){const blk=this._heap[arr];return(blk.arr&&blk.arr[idx]!==undefined)?blk.arr[idx]:0;}
        if(typeof arr==='string')return arr.charCodeAt(idx)||0;
        return 0;
      }
      case 'mem': { const obj=this._eval(e.x,frame); if(obj&&typeof obj==='object'&&!Array.isArray(obj))return obj[e.f]??0; return 0; }
      case 'pmem': {
        const ptr=this._eval(e.x,frame);
        if(this._heap[ptr])return this._heap[ptr].data[e.f]??0;
        for(const f of[...this._callStack,this._globalFrame]){if(!f)continue;for(const[k,v]of Object.entries(f.vars)){if(v.addr===ptr&&v.value&&typeof v.value==='object')return v.value[e.f]??0;}}
        return 0;
      }
      case 'call': return this._evalCall(e,frame);
      default: return 0;
    }
  }

  _evalBin(e,frame){
    if(e.op===','){ this._eval(e.l,frame); return this._eval(e.r,frame); }
    const asgn=['=','+=','-=','*=','/=','%='];
    if(asgn.includes(e.op)){
      let rhs=this._eval(e.r,frame);
      const ref=this._lval(e.l,frame);
      if(ref){
        let cur=ref.get();
        if(e.op==='+=')rhs=(typeof cur==='string'?cur:(cur||0))+rhs;
        else if(e.op==='-=')rhs=(cur||0)-rhs;
        else if(e.op==='*=')rhs=(cur||0)*rhs;
        else if(e.op==='/=')rhs=rhs?Math.trunc((cur||0)/rhs):0;
        else if(e.op==='%=')rhs=rhs?(cur||0)%rhs:0;
        ref.set(rhs);
      }
      return rhs;
    }
    const l=this._eval(e.l,frame),r=this._eval(e.r,frame);
    switch(e.op){
      case '+': return(typeof l==='string'||typeof r==='string')?String(l)+String(r):l+r;
      case '-': return l-r; case '*': return l*r;
      case '/': return r?(Number.isInteger(l)&&Number.isInteger(r)?Math.trunc(l/r):l/r):0;
      case '%': return r?l%r:0;
      case '<': return l<r?1:0; case '>': return l>r?1:0;
      case '<=':return l<=r?1:0; case '>=':return l>=r?1:0;
      case '==':return l==r?1:0; case '!=':return l!=r?1:0;
      case '&&':return(l&&r)?1:0; case '||':return(l||r)?1:0;
      case '&': return (Math.trunc(l) & Math.trunc(r))|0;
      case '|': return (Math.trunc(l) | Math.trunc(r))|0;
      case '^': return (Math.trunc(l) ^ Math.trunc(r))|0;
      case '<<': { const shift=Math.trunc(r)&31; return (Math.trunc(l)<<shift)|0; }
      case '>>': { const shift=Math.trunc(r)&31; return (Math.trunc(l)>>shift)|0; }
      default:return 0;
    }
  }

  _addrOf(e,frame){
    if(!this._addrCells) this._addrCells={};
    if(e.type==='id'){
      const n=e.n;
      for(let i=this._callStack.length-1;i>=0;i--){if(this._callStack[i].vars[n])return this._callStack[i].vars[n].addr;}
      if(this._globalFrame.vars[n])return this._globalFrame.vars[n].addr;
      return '0x0';
    }
    const ref=this._lval(e,frame);
    if(!ref) return '0x0';
    const key=this._exprAddrKey(e,frame);
    if(this._addrCells[key]) return key;
    this._addrCells[key]={get:()=>ref.get(),set:v=>ref.set(v)};
    return key;
  }
  _exprAddrKey(e,frame){
    if(e.type==='sub'){ const baseKey=this._exprAddrKey(e.x,frame); const idx=this._eval(e.i,frame); return baseKey+'['+idx+']'; }
    if(e.type==='mem'){ const baseKey=this._exprAddrKey(e.x,frame); return baseKey+'.'+e.f; }
    if(e.type==='id'){
      for(let i=this._callStack.length-1;i>=0;i--){if(this._callStack[i].vars[e.n])return this._callStack[i].vars[e.n].addr;}
      if(this._globalFrame.vars[e.n])return this._globalFrame.vars[e.n].addr;
      return '0xCELL'+e.n;
    }
    return '0xCELL'+JSON.stringify(e).slice(0,20);
  }

  _lval(e,frame){
    if(e.type==='id'){
      const n=e.n;
      for(let i=this._callStack.length-1;i>=0;i--){
        const f=this._callStack[i];
        if(f.vars[n]!==undefined)return{get:()=>f.vars[n].value,set:v=>{f.vars[n].value=v;f.vars[n].changed=true;}};
      }
      if(this._globalFrame.vars[n]!==undefined){
        const gf=this._globalFrame;
        return{get:()=>gf.vars[n].value,set:v=>{gf.vars[n].value=v;gf.vars[n].changed=true;}};
      }
      const cf=frame||this._callStack[this._callStack.length-1];
      if(cf){cf.vars[n]={type:'int',value:0,addr:this._nextAddr()};return{get:()=>cf.vars[n].value,set:v=>{cf.vars[n].value=v;}};}
    }
    if(e.type==='sub'){
      const ref=this._lval(e.x,frame); const idx=this._eval(e.i,frame);
      if(ref){
        const cur=ref.get();
        if(Array.isArray(cur))return{get:()=>cur[idx]??0,set:v=>{cur[idx]=v;}};
        if(typeof cur==='string'&&this._heap[cur]){
          const blk=this._heap[cur]; if(!blk.arr)blk.arr=[];
          return{get:()=>blk.arr[idx]??0,set:v=>{
            blk.arr[idx]=v;
            blk.data[idx]=v;
            if(blk.init) blk.init[idx]=true; // mark cell as written so the UI stops showing '?'
          }};
        }
      }
      const base=this._eval(e.x,frame);
      if(Array.isArray(base))return{get:()=>base[idx]??0,set:v=>{base[idx]=v;}};
      if(typeof base==='string'&&this._heap[base]){
        const blk=this._heap[base]; if(!blk.arr)blk.arr=[];
        return{get:()=>blk.arr[idx]??0,set:v=>{
          blk.arr[idx]=v;
          blk.data[idx]=v;
          if(blk.init) blk.init[idx]=true; // mark cell as written so the UI stops showing '?'
        }};
      }
    }
    if(e.type==='deref'){
      const ptr=this._eval(e.x,frame);
      if(this._addrCells&&this._addrCells[ptr]){ const cell=this._addrCells[ptr]; return{get:()=>cell.get(),set:v=>cell.set(v)}; }
      if(this._heap[ptr]){
        const blk=this._heap[ptr];
        if(!blk.arr)blk.arr=[];
        return{get:()=>blk.arr[0]??0,set:v=>{
          blk.arr[0]=v;
          if(blk.init) blk.init[0]=true; // mark cell as written so the UI stops showing '?'
        }};
      }
      for(const f of[...this._callStack,this._globalFrame]){if(!f)continue;for(const[k,v]of Object.entries(f.vars)){if(v.addr===ptr)return{get:()=>v.value,set:nv=>{v.value=nv;v.changed=true;}};}}
    }
    if(e.type==='mem'){
      const ref=this._lval(e.x,frame);if(!ref)return null;
      let obj=ref.get();if(!obj||typeof obj!=='object'){obj={};ref.set(obj);}
      return{get:()=>obj[e.f]??0,set:v=>{obj[e.f]=v;ref.set(obj);}};
    }
    if(e.type==='pmem'){
      const ptr=this._eval(e.x,frame);
      if(this._heap[ptr])return{get:()=>this._heap[ptr].data[e.f]??0,set:v=>{this._heap[ptr].data[e.f]=v;}};
      for(const f of[...this._callStack,this._globalFrame]){if(!f)continue;for(const[k,v]of Object.entries(f.vars)){if(v.addr===ptr){if(!v.value||typeof v.value!=='object')v.value={};return{get:()=>v.value[e.f]??0,set:nv=>{v.value[e.f]=nv;v.changed=true;}};}}}
    }
    return null;
  }

  _evalCall(e,frame){
    const fnName=e.fn.n||(e.fn.type==='id'?e.fn.n:'?');
    const args=e.args.map(a=>{
      this._validateExprVariables(a, frame);
      return this._eval(a,frame);
    });
    const ln=e.fn.ln||1;

    if(fnName==='va_start'){
      const vaListName = e.args[0] && e.args[0].n;
      if(vaListName){
        const curFrame = this._callStack[this._callStack.length-1];
        const vaArgs = curFrame ? (curFrame._variadicArgs || []) : [];
        if(!this._vaLists) this._vaLists={};
        this._vaLists[vaListName]={args: vaArgs.slice(), idx:0};
        if(curFrame && curFrame.vars[vaListName]){
          curFrame.vars[vaListName].value = `<va_list:${vaArgs.length} args>`;
          curFrame.vars[vaListName]._vaIdx = 0;
        }
        this._addStep({ln,desc:`<code>va_start(${vaListName}, ...)</code> — ready to read <b>${vaArgs.length}</b> variadic arg(s): [${vaArgs.map(x=>this._fv(x)).join(', ')}]`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      }
      return 0;
    }
    if(fnName==='va_arg'){
      const vaListName = e.args[0] && e.args[0].n;
      if(vaListName && this._vaLists && this._vaLists[vaListName]){
        const vl = this._vaLists[vaListName];
        const val = vl.idx < vl.args.length ? vl.args[vl.idx++] : 0;
        this._addStep({ln,desc:`<code>va_arg(${vaListName}, ...)</code> — got arg[${vl.idx-1}] = <b>${this._fv(val)}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        return val;
      }
      return 0;
    }
    if(fnName==='va_end'){
      const vaListName = e.args[0] && e.args[0].n;
      if(vaListName && this._vaLists) delete this._vaLists[vaListName];
      this._addStep({ln,desc:`<code>va_end(${vaListName||'...'})</code> — variadic list closed`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      return 0;
    }

    switch(fnName){
      case 'printf':  return this._printf(args,e.fn);
      case 'scanf':   return this._scanf(args,e.fn,frame);
      case 'sprintf': {const fmt=args[1]||'';const out=this._sprintfFmt(fmt,args.slice(2));return out.length;}
      case 'strlen':  return this._cstrLen(args[0]);
      case 'strcpy':case 'strncpy':{
        let s = this._readCString(args[1]);
        if(fnName==='strncpy'&&args[2]!==undefined) s=s.slice(0,args[2]);
        this._writeCString(args[0], s);
        this._addStep({ln,desc:`<code>${fnName}(...)</code> &rarr; wrote <b>"${s.replace(/</g,'&lt;')}"</b> into the array (see cells below)`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        return args[0];
      }
      case 'strcat':case 'strncat':{
        const destLen=this._cstrLen(args[0]);
        let s=this._readCString(args[1]);
        if(fnName==='strncat'&&args[2]!==undefined) s=s.slice(0,args[2]);
        this._writeCString(args[0], s, destLen);
        this._addStep({ln,desc:`<code>${fnName}(...)</code> &rarr; appended <b>"${s.replace(/</g,'&lt;')}"</b> to the array (see cells below)`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        return args[0];
      }
      case 'strcmp':case 'strncmp':{
        let a=this._readCString(args[0]), b=this._readCString(args[1]);
        if(fnName==='strncmp'&&args[2]!==undefined){a=a.slice(0,args[2]);b=b.slice(0,args[2]);}
        return a<b?-1:a>b?1:0;
      }
      case 'toupper': return typeof args[0]==='number'?String.fromCharCode(args[0]).toUpperCase().charCodeAt(0):args[0];
      case 'tolower': return typeof args[0]==='number'?String.fromCharCode(args[0]).toLowerCase().charCodeAt(0):args[0];
      case 'isdigit': return (args[0]>=48&&args[0]<=57)?1:0;
      case 'isalpha': return ((args[0]>=65&&args[0]<=90)||(args[0]>=97&&args[0]<=122))?1:0;
      case 'isspace': return (args[0]===32||args[0]===9||args[0]===10||args[0]===13)?1:0;
      case 'malloc':case 'calloc': {
        const sz=fnName==='calloc'?args[0]*args[1]:args[0];
        const isChar=(this._lastCastType||'').includes('char');
        const elemLen=isChar?Math.max(1,sz):Math.max(1,Math.floor(sz/4)||sz);
        const addr=this._heapAddr();
        const zeroed=(fnName==='calloc');
        this._heap[addr]={size:sz,data:{},arr:new Array(elemLen).fill(0),isChar,init:new Array(elemLen).fill(zeroed)};
        this._addStep({ln,desc:`<code>${fnName}(${sz})</code> &rarr; allocated at heap <b>${addr}</b>${zeroed?' (zero-initialized)':' (uninitialized memory)'}`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        return addr;
      }
      case 'realloc': {
        const oldPtr=args[0], newSize=args[1];
        const old=this._heap[oldPtr];
        const isChar=old?old.isChar:(this._lastCastType||'').includes('char');
        const newElemLen=isChar?Math.max(1,newSize):Math.max(1,Math.floor(newSize/4)||newSize);
        const newAddr=this._heapAddr();
        const newArr=new Array(newElemLen).fill(0);
        const newInit=new Array(newElemLen).fill(false);
        if(old&&old.arr){ for(let i=0;i<Math.min(old.arr.length,newArr.length);i++){newArr[i]=old.arr[i];newInit[i]=old.init?!!old.init[i]:false;} }
        this._heap[newAddr]={size:newSize,data:{},arr:newArr,isChar,init:newInit};
        if(old) delete this._heap[oldPtr];
        this._addStep({ln,desc:`<code>realloc(${oldPtr}, ${newSize})</code> &rarr; moved/resized to heap <b>${newAddr}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        return newAddr;
      }
      case 'free': {
        const addr=args[0];if(addr&&this._heap[addr]){delete this._heap[addr];
        this._addStep({ln,desc:`<code>free(${addr})</code> &mdash; memory released`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});}
        return null;
      }
        
      case 'abs':case 'fabs':case 'labs':return Math.abs(args[0]);
      case 'sqrt':return Math.sqrt(args[0]); case 'cbrt':return Math.cbrt(args[0]);
      case 'pow':return Math.pow(args[0],args[1]); case 'floor':return Math.floor(args[0]);
      case 'ceil':return Math.ceil(args[0]); case 'round':return Math.round(args[0]);
      case 'trunc':return Math.trunc(args[0]); case 'fmod':return args[1]?args[0]%args[1]:0;
      case 'fmin':return Math.min(args[0],args[1]); case 'fmax':return Math.max(args[0],args[1]);
      case 'hypot':return Math.hypot(args[0],args[1]); case 'exp':return Math.exp(args[0]);
      case 'exp2':return Math.pow(2,args[0]); case 'log':return Math.log(args[0]);
      case 'log2':return Math.log2(args[0]); case 'log10':return Math.log10(args[0]);
      case 'sin':return Math.sin(args[0]); case 'cos':return Math.cos(args[0]);
      case 'tan':return Math.tan(args[0]); case 'asin':return Math.asin(args[0]);
      case 'acos':return Math.acos(args[0]); case 'atan':return Math.atan(args[0]);
      case 'atan2':return Math.atan2(args[0],args[1]); case 'sinh':return Math.sinh(args[0]);
      case 'cosh':return Math.cosh(args[0]); case 'tanh':return Math.tanh(args[0]);
      case 'asinh':return Math.asinh(args[0]); case 'acosh':return Math.acosh(args[0]);
      case 'atanh':return Math.atanh(args[0]); case 'rand':return Math.floor(Math.random()*32768);
      case 'srand':return 0; case 'atoi':return parseInt(args[0])||0; case 'atof':return parseFloat(args[0])||0;
      case 'putchar':{const ch=String.fromCharCode(args[0]);this.output+=ch;return args[0];}
      case 'puts':{const s=typeof args[0]==='string'?args[0]:String(args[0]);this.output+=s+'\n';return 0;}
      case 'exit':{ throw{type:'ret',val:args[0]}; }
      case 'fopen':return args[0]?'<FILE>':null;
      case 'fclose':return 0;
      case 'fprintf':{
        if(args[0]){
          const out=this._sprintfFmt(typeof args[1]==='string'?args[1]:String(args[1]||''),args.slice(2));
          this.output+=out;
          this._addStep({ln,desc:`<code>fprintf</code> outputs: <b>"${out.replace(/\n/g,'↵').replace(/</g,'&lt;').slice(0,60)}"</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        }
        return 0;
      }
      case 'fgets':return args[2];
    }

    if(typeof fnName==='string' && this.functions[fnName])
      return this._callFn(fnName,args,e.fn);

    if(e.fn.type==='id'){
      const fnRef=this._eval(e.fn,frame);
      if(typeof fnRef==='string'&&this.functions[fnRef])
        return this._callFn(fnRef,args,e.fn);
    }
    if(e.fn.type==='sub'){
      const arr=this._eval(e.fn.x,frame);
      const idx=this._eval(e.fn.i,frame);
      const fnPtr=Array.isArray(arr)?arr[idx]:null;
      if(typeof fnPtr==='string'&&this.functions[fnPtr])
        return this._callFn(fnPtr,args,e.fn);
    }

    if(['main'].includes(fnName))return 0;
    console.warn(`Unknown function '${fnName}' — skipping`);
    return 0;
  }

  _printf(args,callSite){
    if(!args.length)return 0;
    const out=this._sprintfFmt(typeof args[0]==='string'?args[0]:String(args[0]),args.slice(1));
    this.output+=out;
    let descExtra='';
    const outLow=out.toLowerCase();
    if(outLow.includes('overflow'))  descExtra=' <span style="color:var(--vsc-red);font-weight:700">⚠ OVERFLOW detected</span>';
    else if(outLow.includes('underflow')) descExtra=' <span style="color:var(--vsc-red);font-weight:700">⚠ UNDERFLOW detected</span>';
    else if(outLow.includes('full'))   descExtra=' <span style="color:var(--vsc-orange);font-weight:700">⚠ FULL</span>';
    else if(outLow.includes('empty'))  descExtra=' <span style="color:var(--vsc-orange);font-weight:700">⚠ EMPTY</span>';
    else if(outLow.includes('not found')) descExtra=' <span style="color:var(--vsc-orange)">✗ not found</span>';
    else if(outLow.includes('found'))  descExtra=' <span style="color:var(--vsc-green)">✓ found</span>';
    this._addStep({ln:callSite?.ln||1,desc:`<code>printf</code>: <b>"${out.replace(/\n/g,'↵').replace(/</g,'&lt;').slice(0,80)}"</b>${descExtra}`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    return out.length;
  }

  // Writes a scalar value to the memory cell identified by `addr` — used by
  // scanf() to store into whatever &var / &arr[i] / &struct.field resolved
  // to. Mirrors the same two lookup paths used everywhere else in the
  // interpreter (an addr-cell created by &-of a non-plain-id expression, or
  // a plain stack/global variable whose .addr matches).
  _writeScalar(addr, value) {
    if (this._addrCells && this._addrCells[addr]) {
      this._addrCells[addr].set(value);
      return true;
    }
    for (const f of [...this._callStack, this._globalFrame]) {
      if (!f) continue;
      for (const [k, v] of Object.entries(f.vars)) {
        if (v.addr === addr) { v.value = value; v.changed = true; return true; }
      }
    }
    return false;
  }

  _scanf(args,callSite,frame){
    const fmt=args[0]||'';
    // Match every real conversion spec: %[flags][width][.precision][length]conv
    // Length modifiers (l, ll, h, hh, L, j, z, t) and any width/precision are
    // now captured and consumed correctly, so formats like %lf, %.2f, %.6lf,
    // %ld, %hu, %u, %x, %c, %s, %p etc. are all recognized. The previous
    // regex only matched a bare %[diouxXeEfgGcsp] directly after the '%',
    // so ANY spec with a length modifier — including the very common %lf
    // for a double — produced zero matches, meaning scanf() silently read
    // nothing and never prompted for input at all.
    const specRe = /%[-+0 #]*\d*(?:\.\d+)?(hh|h|ll|l|L|j|z|t)?([diouxXeEfFgGaAcsp])/g;
    const specs = [];
    let m;
    while ((m = specRe.exec(fmt)) !== null) {
      specs.push({ full: m[0], length: m[1] || '', conv: m[2] });
    }
    let read=0;
    for(let i=0;i<specs.length;i++){
      const { conv, full } = specs[i];
      const target = args[i+1];
      let raw;
      if(this._stdinIdx < this.stdinQueue.length){
        raw = String(this.stdinQueue[this._stdinIdx++]);
      } else {
        const label = conv==='c' ? 'a single character' : conv==='s' ? 'a word (no spaces)' : `a value for ${full}`;
        const prompted = window.prompt(`Program needs input\n\nscanf("${full}", ...) — enter ${label}:`, '');
        raw = (prompted !== null) ? prompted : '';
        this.stdinQueue.push(raw);
        this._stdinIdx++;
      }

      let displayVal, wrote=false;
      if(conv==='s'){
        // %s: read one whitespace-delimited token and write it as a
        // null-terminated C string into the destination buffer (array or
        // heap block) — reuses the same writer strcpy() uses.
        const word = raw.trim().split(/\s+/)[0] || '';
        this._writeCString(target, word);
        displayVal = `"${word.replace(/</g,'&lt;')}"`;
        wrote = true;
      } else if(conv==='c'){
        // %c: exactly one character, stored as its char code.
        const ch = raw.length>0 ? raw[0] : '\0';
        const code = ch.charCodeAt(0) || 0;
        wrote = this._writeScalar(target, code);
        displayVal = `'${ch==='\0'?'\\0':ch}'`;
      } else if(conv==='p'){
        // %p: store the entered address/text as-is.
        const val = raw.trim();
        wrote = this._writeScalar(target, val);
        displayVal = val || 'NULL';
      } else {
        const trimmed = raw.trim();
        let parsed;
        if(['f','F','e','E','g','G','a','A'].includes(conv)){
          // %f/%lf/%.2f/%.6lf/%e/%g/... — all floating point forms (float
          // or double — JS numbers don't distinguish the width, but the
          // parsed value is correct either way).
          parsed = parseFloat(trimmed); if(isNaN(parsed)) parsed = 0;
        } else if(conv==='x'||conv==='X'){
          parsed = parseInt(trimmed,16) || 0;
        } else if(conv==='o'){
          parsed = parseInt(trimmed,8) || 0;
        } else if(conv==='u'){
          parsed = Math.abs(parseInt(trimmed,10) || 0);
        } else { // d, i  (and their l/ll/h/hh length-modified forms: %ld, %lld, %hd...)
          parsed = parseInt(trimmed,10) || 0;
        }
        wrote = this._writeScalar(target, parsed);
        displayVal = String(parsed);
      }
      if(wrote) read++;

      this.output += raw + '\n';
      this._addStep({ln: callSite?.ln || 1, desc: `<code>scanf</code> read <b>"${full}"</b>: typed <b>"${raw.replace(/</g,'&lt;')}"</b> &rarr; stored as <b>${displayVal}</b>`,
        frames: this._snapFrames(), heap: this._snapHeap(), out: this.output, cs: this._callStack.map(f=>f.name)});
    }
    return read;
  }

  _sprintfFmt(fmt,vals){
    let r='',vi=0,i=0;
    while(i<fmt.length){
      if(fmt[i]==='%'){
        i++;let w='',pr='',sp='',flags='';
        while(i<fmt.length&&'-+0 #'.includes(fmt[i]))flags+=fmt[i++];
        while(i<fmt.length&&/[0-9]/.test(fmt[i]))w+=fmt[i++];
        if(fmt[i]==='.'){i++;while(i<fmt.length&&/[0-9]/.test(fmt[i]))pr+=fmt[i++];}
        while(fmt[i]==='l'||fmt[i]==='h')i++;
        sp=fmt[i++];
        const v=vals[vi++];
        let seg='';
        if(sp==='d'||sp==='i') seg=Math.trunc(Number(v||0)).toString();
        else if(sp==='u') seg=((Math.trunc(Number(v||0))>>>0)).toString();
        else if(sp==='x') seg=((Math.trunc(Number(v||0))>>>0)).toString(16);
        else if(sp==='X') seg=((Math.trunc(Number(v||0))>>>0)).toString(16).toUpperCase();
        else if(sp==='o') seg=((Math.trunc(Number(v||0))>>>0)).toString(8);
        else if(sp==='f') seg=(Number(v||0)).toFixed(pr?parseInt(pr):6);
        else if(sp==='g'||sp==='G') seg=parseFloat((Number(v||0)).toPrecision(pr?parseInt(pr):6)).toString();
        else if(sp==='e') seg=(Number(v||0)).toExponential(pr?parseInt(pr):6);
        else if(sp==='c') seg=v===undefined?'':String.fromCharCode(Number(v));
        else if(sp==='s'){let s=v===null?'(null)':this._readCString(v);if(pr)s=s.slice(0,parseInt(pr));seg=s;}
        else if(sp==='p') seg=v===null?'0x0':String(v);
        else if(sp==='%'){seg='%';vi--;}
        else seg='%'+sp;
        const wNum=parseInt(w);
        if(wNum>0&&seg.length<wNum){
          const padChar=flags.includes('0')?'0':' ';
          if(flags.includes('-')) seg=seg.padEnd(wNum,padChar);
          else seg=seg.padStart(wNum,padChar);
        }
        r+=seg;
      } else r+=fmt[i++];
    }
    return r;
  }

  _castVal(v,t){
    if(t.includes('*')) return v;
    if(t.includes('unsigned int')) return ((Math.trunc(Number(v)||0))>>>0);
    if(t.includes('unsigned char')) return (Math.trunc(Number(v)||0))&0xFF;
    if(t.includes('unsigned short')) return (Math.trunc(Number(v)||0))&0xFFFF;
    if(t.includes('char')) return ((Math.trunc(Number(v)||0))&0xFF)<<24>>24;
    if(t.includes('short')) return ((Math.trunc(Number(v)||0))&0xFFFF)<<16>>16;
    if(t.includes('int')) return (Math.trunc(Number(v)||0))|0;
    if(t.includes('long long')) return Math.trunc(Number(v)||0);
    if(t.includes('float')||t.includes('double')) return Number(v)||0;
    return v;
  }
  _resolveBuffer(target){
    if(Array.isArray(target)) return target;
    if(typeof target==='string' && this._heap[target]) return this._heap[target].arr;
    return null;
  }
  _readCString(target){
    if(typeof target==='string' && !this._heap[target]) return target;
    const buf=this._resolveBuffer(target);
    if(!buf) return '';
    let s='';
    for(let i=0;i<buf.length;i++){ if(buf[i]===0) break; s+=String.fromCharCode(buf[i]); }
    return s;
  }
  _cstrLen(target){
    if(typeof target==='string' && !this._heap[target]) return target.length;
    const buf=this._resolveBuffer(target);
    if(!buf) return 0;
    let i=0; while(i<buf.length && buf[i]!==0) i++;
    return i;
  }
  _writeCString(target, str, offset){
    offset = offset||0;
    const buf=this._resolveBuffer(target);
    if(!buf) return;
    const heapBlock=(typeof target==='string')?this._heap[target]:null;
    for(let i=0;i<str.length;i++){
      buf[offset+i]=str.charCodeAt(i);
      if(heapBlock&&heapBlock.init) heapBlock.init[offset+i]=true;
    }
    const end=offset+str.length;
    if(end<buf.length) buf[end]=0; else buf.push(0);
    if(heapBlock&&heapBlock.init){ while(heapBlock.init.length<buf.length) heapBlock.init.push(false); heapBlock.init[end]=true; }
    if(heapBlock) heapBlock.data['text']=this._readCString(target);
  }
  _szType(t){
    if(t.includes('char')) return 1; if(t.includes('short')) return 2;
    if(t.includes('long long')) return 8; if(t.includes('long double')) return 16;
    if(t.includes('int')||t.includes('long')||t.includes('float')) return 4;
    if(t.includes('double')) return 8; if(t.includes('*')) return 8;
    return 4;
  }
  _szOf(v){if(Array.isArray(v))return v.length*4;return 4;}
  _fv(v,type){
    if(v===null)return'NULL';
    if(Array.isArray(v))return'['+v.slice(0,6).map(x=>Array.isArray(x)?'['+x.slice(0,4).join(',')+']':x).join(', ')+(v.length>6?'…':'')+']';
    if(typeof v==='object')return JSON.stringify(v);
    return String(v);
  }

  _snapFrames(){
    const fs=[];
    for(const f of this._callStack){
      const vars={};
      for(const[k,v]of Object.entries(f.vars)){vars[k]={...v,value:this._deepCopy(v.value)};}
      fs.push({name:f.name,vars,isActive:true});
    }
    if(Object.keys(this._globalFrame.vars).length>0){
      const gv={};for(const[k,v]of Object.entries(this._globalFrame.vars)){gv[k]={...v,value:this._deepCopy(v.value)};}
      fs.unshift({name:'[Global]',vars:gv,isActive:false});
    }
    return fs;
  }
  _deepCopy(v){ if(Array.isArray(v)) return v.map(x=>this._deepCopy(x)); if(v&&typeof v==='object') return {...v}; return v; }
  _snapHeap(){const h={};for(const[k,v]of Object.entries(this._heap))h[k]={size:v.size,data:{...v.data},arr:v.arr?v.arr.slice():[],isChar:!!v.isChar,init:v.init?v.init.slice():[]};return h;}
  _addStep(s){if(this.steps.length<800)this.steps.push(s);}
}

// ─── UI ──────────────────────────────────────────────────────────────────────
let interp = null, curStep = -1, playTimer = null, stdinQ = [], execLine = null;

const root = document.documentElement;
const themeIcon = document.getElementById('theme-icon');
let currentTheme = 'light';
function applyTheme(t){
  currentTheme = t;
  root.setAttribute('data-theme', t);
  themeIcon.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  cmEditor.setOption('theme', t === 'dark' ? 'one-dark' : 'default');
  setTimeout(()=>{ cmEditor.refresh(); drawArrows(); }, 50);
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

const cmEditor = CodeMirror.fromTextArea(document.getElementById('code-input'), {
  mode: 'text/x-csrc',
  theme: 'one-dark',
  lineNumbers: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true,
  indentUnit: 4,
  tabSize: 4,
  indentWithTabs: false,
  extraKeys: {
    'Tab': cm => cm.execCommand('indentMore'),
    'Shift-Tab': cm => cm.execCommand('indentLess'),
    'F5': () => runVisualize(),
    'Ctrl-Enter': () => runVisualize(),
    'Cmd-Enter': () => runVisualize()
  },
  lineWrapping: false,
  scrollbarStyle: 'native'
});
cmEditor.setValue(SAMPLES.memory_layout);
cmEditor.setSize('100%', '100%');

// ── Element refs ─────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const runBtn = $('run-btn'), resetBtn = $('reset-btn'), clearBtn = $('clear-btn');
const prevBtn = $('prev-btn'), nextBtn = $('next-btn');
const playBtn = $('play-btn'), pauseBtn = $('pause-btn');
const stepInfo = $('step-info'), speedSlider = $('speed');
const sampleSel = $('sample-sel');
const framesEl  = $('frames-pane');
const heapSec   = $('heap-section');
const heapBlocks= $('heap-blocks');
const outputArea= $('output-area');
const stdinIn   = $('stdin-in'), stdinBtn = $('stdin-btn');
const csEl      = $('cs-pane');
const mmEl      = $('mm-pane');
const walkEl    = $('walkthrough');
const sbDot = $('sb-dot'), sbTxt = $('sb-txt'), sbLine = $('sb-line'), sbStep = $('sb-step'), sbFrames = $('sb-frames');
const memColsEl = $('mem-cols');
const arrowSvg  = $('arrow-svg');
const arrowToggle = $('arrow-toggle');
const heapDragLayer = $('heap-drag-layer');

// Remembers a manually-dragged (or auto-cascaded) position for each live heap
// address, keyed by address string, e.g. {"0x2000": {x:120,y:40}}. Cleared
// whenever a fresh run starts so a new program gets a clean auto-layout.
let heapPositions = {};

sampleSel.addEventListener('change', () => {
  const k = sampleSel.value;
  if (k && SAMPLES[k]) { cmEditor.setValue(SAMPLES[k]); resetViz(); }
  sampleSel.value = '';
});

clearBtn.addEventListener('click', () => {
  cmEditor.setValue('#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}');
  cmEditor.setCursor(2, 4);
  cmEditor.focus();
  resetViz();
});

const resizeHandle = $('resize-handle');
const editorPanel = $('editor-panel');
let isResizing = false;
resizeHandle.addEventListener('mousedown', e => {
  isResizing = true;
  resizeHandle.classList.add('dragging');
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
});
document.addEventListener('mousemove', e => {
  if (!isResizing) return;
  const appRect = $('app').getBoundingClientRect();
  let pct = ((e.clientX - appRect.left) / appRect.width) * 100;
  pct = Math.max(20, Math.min(80, pct));
  editorPanel.style.width = pct + '%';
  cmEditor.refresh();
  drawArrows();
});
document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    resizeHandle.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    cmEditor.refresh();
    drawArrows();
  }
});

stdinBtn.addEventListener('click', sendStdin);
stdinIn.addEventListener('keydown', e => { if (e.key === 'Enter') sendStdin(); });
function sendStdin() {
  const v = stdinIn.value.trim(); if (!v) return;
  stdinQ.push(v);
  stdinIn.value = '';
  outputArea.textContent += `[stdin queued: ${v}]\n`;
}

runBtn.addEventListener('click', runVisualize);
resetBtn.addEventListener('click', resetViz);
if (arrowToggle) arrowToggle.addEventListener('change', drawArrows);
window.addEventListener('resize', () => { if (interp) drawArrows(); });
document.getElementById('card-memory-body') && document.getElementById('card-memory-body').addEventListener('scroll', () => { if (interp) drawArrows(); }, true);

function runVisualize() {
  stopPlay();
  const code = cmEditor.getValue().trim();
  if (!code) { showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a C program.'); return; }
  setStatus('running', 'Interpreting…');
  clearOutput();
  heapPositions = {};
  try {
    interp = new CInterpreter(code, stdinQ.slice());
    if (interp.errors.length) {
      showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + interp.errors.join('<br>'));
      setStatus('error', 'Parse error'); updateCtrl(); return;
    }
    if (!interp.steps.length) {
      showWalk('err', 'No steps generated.'); setStatus('error', 'No steps'); return;
    }
    curStep = 0; renderStep(0); updateCtrl();
    setStatus('ok', `Ready — ${interp.steps.length} steps`);
  } catch(e) {
    showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + (e.message || String(e)));
    setStatus('error', 'Error');
  }
}

function resetViz() {
  stopPlay(); interp = null; curStep = -1;
  stdinQ = [];
  clearOutput();
  framesEl.innerHTML = '<div class="empty"><i class="fa-solid fa-box-open"></i><p>No stack frames yet. Run the visualizer to see variables.</p></div>';
  heapSec.style.display = '';
  heapBlocks.innerHTML = '<div class="empty"><i class="fa-solid fa-database"></i><p>No heap allocations yet. malloc/calloc will appear here.</p></div>';
  if (heapDragLayer) heapDragLayer.innerHTML = '';
  heapPositions = {};
  csEl.innerHTML = '<div class="empty"><i class="fa-solid fa-layer-group"></i><p>No active function calls.</p></div>';
  mmEl.innerHTML = '<div class="empty"><i class="fa-solid fa-map"></i><p>No memory allocated yet.</p></div>';
  showWalk('', '<b>Welcome to C Visualizer Plus.</b><br>Write any C code in the editor — or pick an example — then click <b>Visualize</b> button to step-by-step execution.');
  clearLineHL(); updateCtrl(); setStatus('', 'Ready');
  sbLine.textContent = '—'; sbStep.textContent = '—'; sbFrames.textContent = '0';
  if (arrowSvg) arrowSvg.innerHTML = '';
}

function clearOutput() {
  outputArea.textContent = '— no output yet —';
}

prevBtn.addEventListener('click', stepPrev);
nextBtn.addEventListener('click', stepNext);
playBtn.addEventListener('click', startPlay);
pauseBtn.addEventListener('click', pausePlay);

function stepNext() { if (!interp || curStep >= interp.steps.length - 1) return; curStep++; renderStep(curStep); updateCtrl(); }
function stepPrev() { if (!interp || curStep <= 0) return; curStep--; renderStep(curStep); updateCtrl(); }

function startPlay() {
  if (!interp || curStep >= interp.steps.length - 1) return;
  playBtn.style.display = 'none'; pauseBtn.style.display = '';
  schedulePlay();
}
function schedulePlay() {
  const delay = Math.max(60, 1150 - speedSlider.value * 110);
  playTimer = setTimeout(() => {
    if (curStep < interp.steps.length - 1) { curStep++; renderStep(curStep); updateCtrl(); schedulePlay(); }
    else pausePlay();
  }, delay);
}
function pausePlay() {
  clearTimeout(playTimer); playTimer = null;
  playBtn.style.display = ''; pauseBtn.style.display = 'none';
}
function stopPlay() {
  clearTimeout(playTimer); playTimer = null;
  playBtn.style.display = ''; pauseBtn.style.display = 'none';
}

function updateCtrl() {
  const has = !!interp && interp.steps && interp.steps.length > 0 && !interp.errors.length;
  prevBtn.disabled = !has || curStep <= 0;
  nextBtn.disabled = !has || curStep >= (interp?.steps.length || 1) - 1;
  playBtn.disabled = !has || curStep >= (interp?.steps.length || 1) - 1;
  pauseBtn.disabled = false;
  const txt = has ? `Step ${curStep + 1} / ${interp.steps.length}` : 'Not running';
  stepInfo.textContent = txt;
  sbStep.textContent = has ? `${curStep + 1}/${interp.steps.length}` : '—';
}

document.addEventListener('keydown', e => {
  if (document.activeElement === stdinIn) return;
  if (cmEditor.hasFocus()) { if (e.key === 'F5') { e.preventDefault(); runVisualize(); } return; }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); stepNext(); }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); stepPrev(); }
  if (e.key === ' ') { e.preventDefault(); playTimer ? pausePlay() : startPlay(); }
  if (e.key === 'F5') { e.preventDefault(); runVisualize(); }
});

function renderStep(idx) {
  const step = interp.steps[idx]; if (!step) return;
  showWalk('', step.desc || '');
  highlightLine(step.ln);
  sbLine.textContent = step.ln || '—';
  outputArea.textContent = step.out && step.out.length ? step.out : '— no output yet —';
  renderFrames(step.frames, step.chg);
  renderHeap(step.heap);
  renderCS(step.cs);
  renderMM(step.frames, step.heap);
  drawArrows();
}

function highlightLine(ln) {
  if (execLine !== null) {
    try { cmEditor.removeLineClass(execLine - 1, 'background', 'cm-exec-line'); cmEditor.removeLineClass(execLine - 1, 'gutter', 'cm-exec-gutter'); } catch(e){}
  }
  if (!ln || ln < 1) { execLine = null; return; }
  execLine = ln;
  try {
    cmEditor.addLineClass(ln - 1, 'background', 'cm-exec-line');
    cmEditor.addLineClass(ln - 1, 'gutter', 'cm-exec-gutter');
    cmEditor.scrollIntoView({ line: ln - 1, ch: 0 }, 80);
  } catch(e){}
}
function clearLineHL() {
  if (execLine !== null) {
    try { cmEditor.removeLineClass(execLine - 1, 'background', 'cm-exec-line'); cmEditor.removeLineClass(execLine - 1, 'gutter', 'cm-exec-gutter'); } catch(e){}
    execLine = null;
  }
}

function showWalk(type, html) {
  walkEl.className = 'wt-box' + (type ? ' ' + type : '');
  walkEl.innerHTML = html;
}

function segBadge(seg) {
  if (!seg) return '';
  const labels = { data: 'Data', bss: 'BSS', heap: 'Heap', stack: 'Stack', static: 'Static' };
  return `<span class="seg-badge ${seg}">${labels[seg] || seg}</span>`;
}

function buildArrCellsHtml(val, type, isChar, initArr) {
  const charMode = isChar || (type && type.includes('char'));
  let html = '<div class="arr-row">';
  val.forEach((c, ci) => {
    const num = Number(c) || 0;
    const isInit = !initArr || initArr[ci] !== false;
    let glyph;
    if (charMode) {
      if (num === 0) glyph = isInit ? "'\\0'" : '?';
      else glyph = (num >= 32 && num < 127 ? `'${String.fromCharCode(num)}'` : "'·'");
    } else {
      glyph = isInit ? String(num) : '?';
    }
    const binStr = toBinaryStr(num, charMode ? 'char' : (type || 'int'));
    html += `<div class="arr-cell" title="dec:${num}&#10;bin:${binStr}${isInit?'':'&#10;(uninit)'}"><span style="font-size:11px">${String(glyph).replace(/</g,'&lt;')}</span><span class="ac-bin">${toBinaryHtml(num, charMode ? 'char' : (type || 'int'))}</span><span style="display:block;margin-top:1px;font-size:8px;color:var(--text3);text-align:center">[${ci}]</span></div>`;
  });
  html += '</div>';
  return html;
}

function renderFrames(frames, chg) {
  if (!frames || !frames.length) {
    framesEl.innerHTML = '<div class="empty"><i class="fa-solid fa-box-open"></i><p>No stack frames yet. Run the visualizer to see variables.</p></div>';
    sbFrames.textContent = '0'; return;
  }
  sbFrames.textContent = frames.length;
  framesEl.innerHTML = '';

  for (let fi = frames.length - 1; fi >= 0; fi--) {
    const fr = frames[fi];
    const isActive = fi === frames.length - 1;
    const card = document.createElement('div');
    card.className = 'frame-card' + (isActive ? ' frame-active' : '');

    const fhdr = document.createElement('div');
    fhdr.className = 'frame-hdr';
    fhdr.innerHTML = `<i class="fa-solid fa-cube" style="color:var(--tok-fn);font-size:11px"></i><span class="frame-fn">${fr.name}()</span>`;
    if (isActive) fhdr.innerHTML += `<span class="frame-tag">Active</span>`;
    card.appendChild(fhdr);

    const entries = Object.entries(fr.vars || {});
    if (!entries.length) {
      const em = document.createElement('div');
      em.style.cssText = 'padding:10px 14px;font-size:12px;color:var(--text3)';
      em.textContent = 'No local variables'; card.appendChild(em);
    } else {
      const tbl = document.createElement('table');
      tbl.className = 'vtbl';
      tbl.innerHTML = `<thead><tr><th>Name</th><th class="col-type">Type</th><th>Value</th><th>Binary</th><th class="col-size">Size</th><th class="col-addr">Address</th></tr></thead>`;
      const tb = document.createElement('tbody');

      for (const [name, v] of entries) {
        const tr = document.createElement('tr');
        const isChanged = chg === name && isActive;
        if (isChanged) tr.classList.add('v-changed');
        if (v.addr) tr.dataset.cellAddr = v.addr;

        const val = v.value;
        const isPtr = v.type && v.type.includes('*') && !Array.isArray(val);
        const isArr = Array.isArray(val);
        const bits = bitWidthForType(v.type);

        let vhtml, binHtml = '<span class="vbin">—</span>';
        if (isArr) {
          const is2D = val.length > 0 && Array.isArray(val[0]);
          if (is2D) {
            vhtml = '<div style="display:flex;flex-direction:column;gap:3px">';
            val.forEach((row) => { vhtml += buildArrCellsHtml(row, v.type, false); });
            vhtml += '</div>';
          } else {
            vhtml = buildArrCellsHtml(val, v.type, v.type && v.type.includes('char'));
          }
        } else if (val && typeof val === 'object' && !Array.isArray(val)) {
          vhtml = `<span style="color:var(--text2);font-size:11.5px">{${Object.entries(val).map(([k2,v2])=>`${k2}: ${fieldToDisplay(v2)}`).join(', ')}}</span>`;
        } else if (isPtr) {
          const isRealAddr = typeof val === 'string' && /^0x[0-9A-Fa-f]+$/.test(val);
          const srcAttrs = isRealAddr ? ` data-ptr-source="1" data-target-addr="${val}"` : '';
          vhtml = `<span class="vv vptr${isRealAddr ? ' ptr-src' : ''}"${srcAttrs}><i class="fa-solid fa-link" style="font-size:10px"></i> ${val || 'NULL'}${isRealAddr ? '<span class="arrow-anchor"></span>' : ''}</span>`;
        } else if (v.type === 'va_list') {
          vhtml = `<span class="vv" style="color:var(--tok-type);font-size:11px">${val}</span>`;
          binHtml = '<span class="vbin" style="font-size:10px">variadic</span>';
        } else {
          let d;
          if (val === null) { d = "NULL"; }
          else if (typeof val === "string") { d = `"${val}"`; }
          else if (v.type && v.type.includes("char") && typeof val === "number") {
            if (val === 0) d = "'\\0'";
            else if (val >= 32 && val <= 126) d = `'${String.fromCharCode(val)}' (${val})`;
            else d = `'\\x${((val&0xFF)).toString(16).padStart(2,'0')}' (${val})`;
            binHtml = `<span class="vbin" title="${bits}-bit">${toBinaryHtml(val&0xFF, 'char')}</span>`;
          } else {
            d = String(val ?? 0);
            if (typeof val === "number") {
              binHtml = `<span class="vbin" title="${bits}-bit">${toBinaryHtml(val, v.type)}</span>`;
            }
          }
          vhtml = `<span class="vv${isChanged ? ' vc' : ''}">${String(d).replace(/</g,'&lt;')}</span>`;
        }

        tr.innerHTML = `
          <td><span class="vn">${name}</span>${segBadge(v.seg)}</td>
          <td class="col-type"><span class="vt">${(v.type || '').replace(/</g,'&lt;')}</span></td>
          <td>${vhtml}</td>
          <td>${binHtml}</td>
          <td class="col-size"><span class="vsize">${sizeOfDisplay(v)}</span></td>
          <td class="col-addr"><span class="vaddr">${v.addr || ''}</span></td>`;
        tb.appendChild(tr);
      }
      tbl.appendChild(tb);
      const tblWrap = document.createElement('div');
      tblWrap.className = 'vtbl-wrap';
      tblWrap.appendChild(tbl);
      card.appendChild(tblWrap);
    }
    framesEl.appendChild(card);
  }
}

function renderHeap(heap) {
  if (!heap || !Object.keys(heap).length) {
    heapSec.style.display = '';
    heapBlocks.innerHTML = '<div class="empty"><i class="fa-solid fa-database"></i><p>No heap allocations yet. malloc/calloc will appear here.</p></div>';
    if (heapDragLayer) heapDragLayer.innerHTML = '';
    return;
  }
  heapSec.style.display = '';
  heapBlocks.innerHTML = '';
  if (heapDragLayer) heapDragLayer.innerHTML = '';

  Object.keys(heapPositions).forEach(a => { if (!heap[a]) delete heapPositions[a]; });

  const addrList = Object.keys(heap);
  addrList.forEach((addr, idx) => {
    const block = heap[addr];
    const d = document.createElement('div'); d.className = 'heap-block';
    d.dataset.cellAddr = addr;
    const hasStructData = block.data && Object.keys(block.data).some(k => k !== 'text');
    const head = document.createElement('div');
    head.className = 'hb-head';
    head.innerHTML = `<i class="fa-solid fa-microchip" style="color:var(--vsc-orange);font-size:11px"></i><span class="h-addr">${addr}</span><span class="h-sz">${formatBytes(block.size)}</span>${segBadge('heap')}<span class="h-sz">${hasStructData ? 'struct' : (block.isChar ? 'char buffer' : 'int buffer')}</span><i class="fa-solid fa-up-down-left-right hb-grip" title="Drag to move"></i>`;
    d.appendChild(head);

    if (hasStructData) {
      const body = document.createElement('div');
      body.className = 'hb-body';
      const tbl = document.createElement('table');
      tbl.className = 'vtbl';
      tbl.innerHTML = `<thead><tr><th>Field</th><th>Value</th><th>Binary</th><th>Type</th></tr></thead>`;
      const tb = document.createElement('tbody');
      for (const [fname, fval] of Object.entries(block.data)) {
        if (fname === 'text') continue;
        const tr = document.createElement('tr');
        const isPtrVal = typeof fval === 'string' && /^0x[0-9A-Fa-f]+$/.test(fval);
        const isIndex = /^\d+$/.test(fname);
        const label = isIndex ? `[${fname}]` : fname;
        let vhtml, binHtml = '<span class="vbin">—</span>', typeLabel;
        if (fval === null) {
          vhtml = `<span class="vv vptr">NULL</span>`;
          typeLabel = 'pointer';
        } else if (isPtrVal) {
          vhtml = `<span class="vv vptr ptr-src" data-ptr-source="1" data-target-addr="${fval}"><i class="fa-solid fa-link" style="font-size:10px"></i> ${fval}<span class="arrow-anchor"></span></span>`;
          typeLabel = 'pointer';
        } else if (typeof fval === 'number') {
          vhtml = `<span class="vv">${String(fval).replace(/</g,'&lt;')}</span>`;
          const elemType = isIndex ? (block.isChar ? 'char' : 'int') : 'int';
          binHtml = `<span class="vbin" title="${elemType === 'char' ? '8' : '32'}-bit">${toBinaryHtml(fval, elemType)}</span>`;
          typeLabel = elemType;
        } else {
          vhtml = `<span class="vv">${String(fval).replace(/</g,'&lt;')}</span>`;
          typeLabel = 'char';
        }
        tr.innerHTML = `<td><span class="vn">${label}</span></td><td>${vhtml}</td><td>${binHtml}</td><td><span class="vt">${typeLabel}</span></td>`;
        tb.appendChild(tr);
      }
      tbl.appendChild(tb);
      body.appendChild(tbl);
      d.appendChild(body);
    } else if (block.arr && block.arr.length) {
      const body = document.createElement('div');
      body.className = 'hb-body';
      body.innerHTML = buildArrCellsHtml(block.arr, block.isChar ? 'char' : 'int', block.isChar, block.init);
      d.appendChild(body);
    }

    if (heapDragLayer) {
      let pos = heapPositions[addr];
      if (!pos) {
        const anchorRect = heapSec.getBoundingClientRect();
        const containerRect = memColsEl.getBoundingClientRect();
        const baseX = Math.max(0, anchorRect.left - containerRect.left) + (idx % 3) * 16;
        const baseY = Math.max(0, anchorRect.top - containerRect.top) + 30 + idx * 92;
        pos = { x: baseX, y: baseY };
        heapPositions[addr] = pos;
      }
      d.style.left = pos.x + 'px';
      d.style.top = pos.y + 'px';
      makeHeapBlockDraggable(d, addr);
      heapDragLayer.appendChild(d);
    } else {
      heapBlocks.appendChild(d);
    }
  });
}

function makeHeapBlockDraggable(el, addr) {
  const handle = el.querySelector('.hb-head');
  if (!handle) return;
  let dragging = false, startX = 0, startY = 0, origX = 0, origY = 0;

  handle.addEventListener('pointerdown', e => {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true;
    el.classList.add('dragging');
    try { handle.setPointerCapture(e.pointerId); } catch (_) {}
    startX = e.clientX; startY = e.clientY;
    origX = parseFloat(el.style.left) || 0;
    origY = parseFloat(el.style.top) || 0;
    e.preventDefault();
  });

  handle.addEventListener('pointermove', e => {
    if (!dragging) return;
    const nx = Math.max(0, origX + (e.clientX - startX));
    const ny = Math.max(0, origY + (e.clientY - startY));
    el.style.left = nx + 'px';
    el.style.top = ny + 'px';
    heapPositions[addr] = { x: nx, y: ny };
    drawArrows();
  });

  const endDrag = e => {
    if (!dragging) return;
    dragging = false;
    el.classList.remove('dragging');
    try { handle.releasePointerCapture(e.pointerId); } catch (_) {}
    drawArrows();
  };
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
}

function renderCS(stack) {
  csEl.innerHTML = '';
  if (!stack || !stack.length) {
    csEl.innerHTML = '<div class="empty"><i class="fa-solid fa-layer-group"></i><p>No active function calls.</p></div>';
    return;
  }
  for (let i = stack.length - 1; i >= 0; i--) {
    const d = document.createElement('div');
    d.className = 'cs-item' + (i === stack.length - 1 ? ' cs-top' : '');
    d.innerHTML = `<span class="cs-depth">#${stack.length - 1 - i}</span><i class="fa-solid fa-cube" style="color:var(--tok-fn);font-size:10px"></i><span class="cs-fn">${stack[i]}()</span><span class="cs-cur">${i === stack.length - 1 ? '← executing' : ''}</span>`;
    csEl.appendChild(d);
  }
}

function renderMM(frames, heap) {
  if (!frames) { mmEl.innerHTML = ''; return; }
  const cells = [];
  for (const fr of frames) {
    for (const [n, v] of Object.entries(fr.vars || {})) {
      cells.push({ addr: v.addr, name: n, val: Array.isArray(v.value) ? '[arr]' : String(v.value ?? 0), cls: 'mm-stk' });
    }
  }
  for (const [addr, b] of Object.entries(heap || {})) {
    cells.push({ addr, name: 'heap', val: formatBytes(b.size), cls: 'mm-hp' });
  }
  if (!cells.length) {
    mmEl.innerHTML = '<div class="empty"><i class="fa-solid fa-map"></i><p>No memory allocated yet.</p></div>';
    return;
  }
  const grid = document.createElement('div'); grid.className = 'mm-grid';
  cells.slice(0, 60).forEach(c => {
    const cell = document.createElement('div');
    cell.className = 'mm-cell ' + c.cls;
    cell.innerHTML = `<span class="mm-addr">${(c.addr || '').slice(-5)}</span><span class="mm-nm">${c.name}</span>`;
    cell.title = `${c.addr}: ${c.name} = ${c.val}`;
    grid.appendChild(cell);
  });
  mmEl.innerHTML = ''; mmEl.appendChild(grid);
}

// ─── Pointer-arrow overlay (Python-Tutor style) ──────────────────────────────
const SVG_NS = 'http://www.w3.org/2000/svg';

function drawArrows() {
  if (!arrowSvg || !memColsEl) return;
  arrowSvg.innerHTML = '';
  if (arrowToggle && !arrowToggle.checked) { arrowSvg.setAttribute('width', 0); arrowSvg.setAttribute('height', 0); return; }

  const w = memColsEl.scrollWidth || memColsEl.offsetWidth || 1;
  const h = memColsEl.scrollHeight || memColsEl.offsetHeight || 1;
  arrowSvg.setAttribute('width', w);
  arrowSvg.setAttribute('height', h);
  arrowSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  const defs = document.createElementNS(SVG_NS, 'defs');
  defs.innerHTML = `<marker id="ptr-arrowhead" markerWidth="7" markerHeight="7" refX="5.5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5.5,2.5 z" style="fill:var(--ptr-color,#af00db)"></path></marker>`;
  arrowSvg.appendChild(defs);

  const containerRect = memColsEl.getBoundingClientRect();

  const targets = {};
  memColsEl.querySelectorAll('[data-cell-addr]').forEach(el => {
    const a = el.dataset.cellAddr;
    if (a && targets[a] === undefined) targets[a] = el;
  });

  const sources = memColsEl.querySelectorAll('[data-ptr-source="1"]');
  let drawn = 0;
  sources.forEach(src => {
    const addr = src.dataset.targetAddr;
    const tgtEl = targets[addr];
    if (!tgtEl) return;
    const srcRow = src.closest('tr') || src.closest('.heap-block') || src;
    if (srcRow === tgtEl) return;

    const anchor = src.querySelector('.arrow-anchor') || src;
    const ar = anchor.getBoundingClientRect();
    const tr = tgtEl.getBoundingClientRect();

    let x1 = ar.left + ar.width / 2 - containerRect.left;
    let y1 = ar.top + ar.height / 2 - containerRect.top;
    let x2, y2;

    if (tr.left >= ar.right - 4) {
      x2 = tr.left - containerRect.left;
      y2 = tr.top + tr.height / 2 - containerRect.top;
    } else if (tr.right <= ar.left + 4) {
      x2 = tr.right - containerRect.left;
      y2 = tr.top + tr.height / 2 - containerRect.top;
    } else {
      x2 = tr.left + tr.width / 2 - containerRect.left;
      y2 = tr.top - containerRect.top;
    }

    const dx = Math.max(36, Math.abs(x2 - x1) * 0.5);
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`);
    path.setAttribute('class', 'ptr-arrow-path');
    path.setAttribute('marker-end', 'url(#ptr-arrowhead)');
    arrowSvg.appendChild(path);

    const dot = document.createElementNS(SVG_NS, 'circle');
    dot.setAttribute('cx', x1); dot.setAttribute('cy', y1); dot.setAttribute('r', 3);
    dot.setAttribute('class', 'ptr-arrow-dot');
    arrowSvg.appendChild(dot);
    drawn++;
      
  });
}


function setStatus(type, msg) {
  sbDot.style.color = type === 'ok' ? '#23d18b' : type === 'error' ? '#f48771' : 'rgba(255,255,255,.7)';
  sbTxt.textContent = msg;
    
}

applyTheme('light');
resetViz();

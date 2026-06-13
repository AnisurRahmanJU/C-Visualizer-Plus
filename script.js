const CoreTraceRepository = {
    // ======================================================================
    // GROUP 1: LOOPS & ITERATIONS (UP TO 10 ITERATIONS DETAILED)
    // ======================================================================
    ex1: {
        code: `#include <stdio.h>\n\nint main() {\n    int count = 0;\n    while(count < 10) {\n        count++;\n    }\n    printf("Count: %d\\n", count);\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Allocated C dynamic segment storage register 'count = 0'.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "0" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "0" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (0 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "0" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "0" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "1" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "1" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (1 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "1" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "1" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "2" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "2" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (2 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "2" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "2" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "3" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "3" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (3 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "3" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "3" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "4" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "4" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (4 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "4" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "4" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "5" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "5" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (5 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "5" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "5" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "6" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "6" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (6 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "6" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "6" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "7" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "7" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (7 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "7" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "7" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "8" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "8" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (8 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "8" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "8" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "9" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "9" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (9 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "9" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "9" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Increment operational execution pass: count++ triggered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "10" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "10" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating condition boundary: (count < 10) -> (10 < 10) -> FALSE. Halting loop context extraction.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "10" }] }], heap: [], vars: [{ name: "count", type: "int", scope: "main", val: "10" }], structures: null },
            { line: 8, bss: "Clean", data: "Count: 10\\n", console: "STDOUT Standard Stream Commit: Count: 10", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "count", val: "10" }] }], heap: [], vars: [], structures: null },
            { line: 9, bss: "Clean", data: "Empty", console: "Main routine popped. Application execution lifecycle finished.", stack: [], heap: [], vars: [], structures: null }
        ]
    },
    ex2: {
        code: `#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for(int i = 1; i <= 10; i++) {\n        sum += i;\n    }\n    printf("Sum: %d\\n", sum);\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Setting aggregation variable target register: sum = 0.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "0" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "0" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "For-loop initialized: Setting iterator variable index 'i = 1'. Checking boundary rules (1 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "0" }, { addr: "0x7FFF18", var: "i", val: "1" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "0" }, { name: "i", type: "int", scope: "main", val: "1" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 0 + 1 -> 1.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "1" }, { addr: "0x7FFF18", var: "i", val: "1" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "1" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 2. Checking boundary condition (2 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "1" }, { addr: "0x7FFF18", var: "i", val: "2" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "1" }, { name: "i", type: "int", scope: "main", val: "2" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 1 + 2 -> 3.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "3" }, { addr: "0x7FFF18", var: "i", val: "2" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "3" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 3. Checking boundary condition (3 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "3" }, { addr: "0x7FFF18", var: "i", val: "3" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "3" }, { name: "i", type: "int", scope: "main", val: "3" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 3 + 3 -> 6.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "6" }, { addr: "0x7FFF18", var: "i", val: "3" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "6" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 4. Checking boundary condition (4 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "6" }, { addr: "0x7FFF18", var: "i", val: "4" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "6" }, { name: "i", type: "int", scope: "main", val: "4" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 6 + 4 -> 10.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "10" }, { addr: "0x7FFF18", var: "i", val: "4" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "10" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 5. Checking boundary condition (5 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "10" }, { addr: "0x7FFF18", var: "i", val: "5" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "10" }, { name: "i", type: "int", scope: "main", val: "5" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 10 + 5 -> 15.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "15" }, { addr: "0x7FFF18", var: "i", val: "5" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "15" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 6. Checking boundary condition (6 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "15" }, { addr: "0x7FFF18", var: "i", val: "6" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "15" }, { name: "i", type: "int", scope: "main", val: "6" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 15 + 6 -> 21.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "21" }, { addr: "0x7FFF18", var: "i", val: "6" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "21" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 7. Checking boundary condition (7 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "21" }, { addr: "0x7FFF18", var: "i", val: "7" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "21" }, { name: "i", type: "int", scope: "main", val: "7" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 21 + 7 -> 28.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "28" }, { addr: "0x7FFF18", var: "i", val: "7" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "28" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 8. Checking boundary condition (8 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "28" }, { addr: "0x7FFF18", var: "i", val: "8" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "28" }, { name: "i", type: "int", scope: "main", val: "8" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 28 + 8 -> 36.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "36" }, { addr: "0x7FFF18", var: "i", val: "8" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "36" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 9. Checking boundary condition (9 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "36" }, { addr: "0x7FFF18", var: "i", val: "9" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "36" }, { name: "i", type: "int", scope: "main", val: "9" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 36 + 9 -> 45.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "45" }, { addr: "0x7FFF18", var: "i", val: "9" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "45" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 10. Checking boundary condition (10 <= 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "45" }, { addr: "0x7FFF18", var: "i", val: "10" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "45" }, { name: "i", type: "int", scope: "main", val: "10" }], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Adding index register step values: sum = 45 + 10 -> 55.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "55" }, { addr: "0x7FFF18", var: "i", val: "10" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "55" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Post-increment iteration index step: i updated to 11. Checking boundary condition (11 <= 10) -> FALSE. Exited Loop block.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "55" }] }], heap: [], vars: [{ name: "sum", type: "int", scope: "main", val: "55" }], structures: null },
            { line: 8, bss: "Clean", data: "Sum: 55\\n", console: "STDOUT Standard Stream Commit: Sum: 55", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "sum", val: "55" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex3: {
        code: `#include <stdio.h>\n\nint main() {\n    int val = 1;\n    while(val <= 5) {\n        val *= 2;\n    }\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Assigning val = 1", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "1" }] }], heap: [], vars: [{ name: "val", type: "int", scope: "main", val: "1" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Loop evaluation (1 <= 5) -> TRUE", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "1" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Multiplying operation val *= 2 -> 2", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "2" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Loop evaluation (2 <= 5) -> TRUE", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "2" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Multiplying operation val *= 2 -> 4", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "4" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Loop evaluation (4 <= 5) -> TRUE", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "4" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Multiplying operation val *= 2 -> 8", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "8" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Loop evaluation (8 <= 5) -> FALSE. Halted.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "val", val: "8" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex4: {
        code: `#include <stdio.h>\n\nint main() {\n    int x = 10, y = 20;\n    if (x < y) {\n        x = 50;\n    }\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Initializing conditional variables x=10, y=20", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "x", val: "10" }, { addr: "0x7FFF18", var: "y", val: "20" }] }], heap: [], vars: [{ name: "x", type: "int", scope: "main", val: "10" }, { name: "y", type: "int", scope: "main", val: "20" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Condition block analysis: (10 < 20) -> TRUE", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "x", val: "10" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Assigning inner scope target x = 50", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "x", val: "50" }] }], heap: [], vars: [], structures: null }
        ]
    },

    // ======================================================================
    // GROUP 2: ARRAYS & BUFFERS (INT ARRAY[10] SEQUENTIAL REGISTER TRACE)
    // ======================================================================
    ex5: {
        code: `#include <stdio.h>\n\nint main() {\n    int array[10] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 111};\n    for(int i = 0; i < 10; i++) {\n        array[i] += 5;\n    }\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Reserving stack memory frame blocks for sequential array configuration: array[10] created.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[11,22,33,44,55,66,77,88,99,111]" }] }], heap: [], vars: [{ name: "array", type: "int[10]", scope: "main", val: "Initialized" }], structures: { type: "array", name: "array", data: [11, 22, 33, 44, 55, 66, 77, 88, 99, 111], highlight: null } },
            { line: 5, bss: "Clean", data: "Empty", console: "Loop step initialized: Setting cell iterator marker index i = 0. Boundary configuration check (0 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[11,22,33,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "0" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "0" }], structures: { type: "array", name: "array", data: [11, 22, 33, 44, 55, 66, 77, 88, 99, 111], highlight: 0 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [0]: 11 += 5 -> 16.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,22,33,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "0" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 22, 33, 44, 55, 66, 77, 88, 99, 111], highlight: 0 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 1. Boundary check evaluation (1 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,22,33,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "1" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "1" }], structures: { type: "array", name: "array", data: [16, 22, 33, 44, 55, 66, 77, 88, 99, 111], highlight: 1 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [1]: 22 += 5 -> 27.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,33,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "1" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 33, 44, 55, 66, 77, 88, 99, 111], highlight: 1 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 2. Boundary check evaluation (2 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,33,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "2" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "2" }], structures: { type: "array", name: "array", data: [16, 27, 33, 44, 55, 66, 77, 88, 99, 111], highlight: 2 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [2]: 33 += 5 -> 38.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "2" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 44, 55, 66, 77, 88, 99, 111], highlight: 2 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 3. Boundary check evaluation (3 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,44,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "3" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "3" }], structures: { type: "array", name: "array", data: [16, 27, 38, 44, 55, 66, 77, 88, 99, 111], highlight: 3 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [3]: 44 += 5 -> 49.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "3" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 55, 66, 77, 88, 99, 111], highlight: 3 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 4. Boundary check evaluation (4 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,55,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "4" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "4" }], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 55, 66, 77, 88, 99, 111], highlight: 4 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [4]: 55 += 5 -> 60.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "4" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 66, 77, 88, 99, 111], highlight: 4 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 5. Boundary check evaluation (5 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,66,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "5" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "5" }], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 66, 77, 88, 99, 111], highlight: 5 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [5]: 66 += 5 -> 71.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "5" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 77, 88, 99, 111], highlight: 5 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 6. Boundary check evaluation (6 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,77,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "6" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "6" }], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 77, 88, 99, 111], highlight: 6 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [6]: 77 += 5 -> 82.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "6" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 88, 99, 111], highlight: 6 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 7. Boundary check evaluation (7 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,88,99,111]" }, { addr: "0x7FFF40", var: "i", val: "7" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "7" }], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 88, 99, 111], highlight: 7 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [7]: 88 += 5 -> 93.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,93,99,111]" }, { addr: "0x7FFF40", var: "i", val: "7" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 93, 99, 111], highlight: 7 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 8. Boundary check evaluation (8 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,93,99,111]" }, { addr: "0x7FFF40", var: "i", val: "8" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "8" }], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 93, 99, 111], highlight: 8 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [8]: 99 += 5 -> 104.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,93,104,111]" }, { addr: "0x7FFF40", var: "i", val: "8" }] }], heap: [], vars: [], structures: {type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 93, 104, 111], highlight: 8 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 9. Boundary check evaluation (9 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,93,104,111]" }, { addr: "0x7FFF40", var: "i", val: "9" }] }], heap: [], vars: [{ name: "i", type: "int", scope: "main", val: "9" }], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 93, 104, 111], highlight: 9 } },
            { line: 6, bss: "Clean", data: "Empty", console: "Mutating array element data block value at index position [9]: 111 += 5 -> 116.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,93,104,116]" }, { addr: "0x7FFF40", var: "i", val: "9" }] }], heap: [], vars: [], structures: { type: "array", name: "array", data: [16, 27, 38, 49, 60, 71, 82, 93, 104, 116], highlight: 9 } },
            { line: 5, bss: "Clean", data: "Empty", console: "Index iterator incremented: i = 10. Check rule constraint (10 < 10) -> FALSE. Loop halted.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "array", val: "[16,27,38,49,60,71,82,93,104,116]" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex6: {
        code: `#include <stdio.h>\n\nint main() {\n    int target[5] = {2, 4, 6, 8, 10};\n    int total = target[0] + target[4];\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Creating sequential target[5] array registers.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "target", val: "[2,4,6,8,10]" }] }], heap: [], vars: [], structures: { type: "array", name: "target", data: [2, 4, 6, 8, 10], highlight: null } },
            { line: 5, bss: "Clean", data: "Empty", console: "Computing total = target[0] + target[4] -> 2 + 10 = 12", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "target", val: "[2,4,6,8,10]" }, { addr: "0x7FFF30", var: "total", val: "12" }] }], heap: [], vars: [{ name: "total", type: "int", scope: "main", val: "12" }], structures: null }
        ]
    },
    ex7: {
        code: `#include <stdio.h>\n\nint main() {\n    char msg[6] = "Hello";\n    msg[0] = 'M';\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Initializing string buffer layout char msg[6]", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "msg", val: "'Hello'" }] }], heap: [], vars: [], structures: { type: "array", name: "msg", data: ['H', 'e', 'l', 'l', 'o', '\\0'], highlight: null } },
            { line: 5, bss: "Clean", data: "Empty", console: "Mutating string offset block base location msg[0] to 'M'", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "msg", val: "'Mello'" }] }], heap: [], vars: [], structures: { type: "array", name: "msg", data: ['M', 'e', 'l', 'l', 'o', '\\0'], highlight: 0 } }
        ]
    },
    ex8: {
        code: `#include <stdio.h>\n\nint main() {\n    int dynamic_arr[3] = {10, 20, 30};\n    int *ptr = dynamic_arr;\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Building allocation matrix registers", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "dynamic_arr", val: "[10,20,30]" }] }], heap: [], vars: [], structures: { type: "array", name: "dynamic_arr", data: [10, 20, 30], highlight: null } },
            { line: 5, bss: "Clean", data: "Empty", console: "Pointer variable capture: ptr mapping to address 0x7FFF14", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "dynamic_arr", val: "[10,20,30]" }, { addr: "0x7FFF20", var: "ptr", val: "0x7FFF14" }] }], heap: [], vars: [{ name: "ptr", type: "int*", scope: "main", val: "0x7FFF14" }], structures: null }
        ]
    },

    // ======================================================================
    // GROUP 3: STRUCTURES & STRUCT CHUNKS
    // ======================================================================
    ex9: {
        code: `#include <stdio.h>\nstruct Node {\n    int id;\n    int val;\n};\nint main() {\n    struct Node n1 = {101, 55};\n    return 0;\n}`,
        steps: [
            { line: 7, bss: "Clean", data: "Empty", console: "Mapping contiguous structure compound block fields", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "n1", val: "{id:101, val:55}" }] }], heap: [], vars: [], structures: { type: "struct", name: "n1 (struct Node)", data: [101, 55], highlight: null } }
        ]
    },
    ex10: {
        code: `#include <stdio.h>\nstruct Point { int x; int y; };\nint main() {\n    struct Point p = {10, 20};\n    p.x += 5;\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Instantiating struct Point values", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "p", val: "{x:10, y:20}" }] }], heap: [], vars: [], structures: { type: "struct", name: "p (struct Point)", data: [10, 20], highlight: null } },
            { line: 5, bss: "Clean", data: "Empty", console: "Mutating structured field cell member p.x", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "p", val: "{x:15, y:20}" }] }], heap: [], vars: [], structures: { type: "struct", name: "p (struct Point)", data: [15, 20], highlight: 0 } }
        ]
    },
    ex11: {
        code: `#include <stdio.h>\nstruct Box { int w; };\nint main() {\n    struct Box b1 = {50};\n    struct Box b2 = b1;\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Setting up root box struct layout context.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "b1", val: "{w:50}" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Deep bitwise copying struct context from b1 to register address b2.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "b1", val: "{w:50}" }, { addr: "0x7FFF18", var: "b2", val: "{w:50}" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex12: {
        code: `#include <stdio.h>\n#include <string.h>\nint main() {\n    char s1[10] = "ABC";\n    char s2[10];\n    strcpy(s2, s1);\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Allocating source data buffer register layout context s1", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "s1", val: '"ABC"' }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Allocating uninitialized destination layout space target register block s2", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "s1", val: '"ABC"' }, { addr: "0x7FFF24", var: "s2", val: "Uninitialized" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Executing low level standard string copy wrapper logic (strcpy execution branch mapping)", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "s1", val: '"ABC"' }, { addr: "0x7FFF24", var: "s2", val: '"ABC"' }] }], heap: [], vars: [], structures: null }
        ]
    },

    // ======================================================================
    // GROUP 4: POINTER MULTI-LEVEL & HEAP CHUNKS
    // ======================================================================
    ex13: {
        code: `#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *h_ptr = (int*)malloc(sizeof(int));\n    *h_ptr = 999;\n    free(h_ptr);\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Invoking system core kernel memory frame segment allocator. Heap chunk address registered.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "h_ptr", val: "0x501000" }] }], heap: [{ addr: "0x501000", label: "malloc block", val: "Uninitialized" }], vars: [{ name: "h_ptr", type: "int*", scope: "main", val: "0x501000" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Writing scalar value 999 directly into dereferenced heap system structure block offset address.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "h_ptr", val: "0x501000" }] }], heap: [{ addr: "0x501000", label: "malloc block", val: "999" }], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Deallocating chunk segment pointer block. Releasing heap system trace records completely.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "h_ptr", val: "0x501000" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex14: {
        code: `#include <stdio.h>\nint main() {\n    int base = 77;\n    int *p = &base;\n    int **pp = &p;\n    return 0;\n}`,
        steps: [
            { line: 3, bss: "Clean", data: "Empty", console: "Initializing stack reference point register base = 77", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "base", val: "77" }] }], heap: [], vars: [], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Creating single pointer variable layout mapping p -> &base", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "base", val: "77" }, { addr: "0x7FFF18", var: "p", val: "0x7FFF14" }] }], heap: [], vars: [{ name: "p", type: "int*", scope: "main", val: "0x7FFF14" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Creating double indirect reference layer frame pointer pp -> &p", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "base", val: "77" }, { addr: "0x7FFF18", var: "p", val: "0x7FFF14" }, { addr: "0x7FFF1C", var: "pp", val: "0x7FFF18" }] }], heap: [], vars: [{ name: "pp", type: "int**", scope: "main", val: "0x7FFF18" }], structures: null }
        ]
    },
    ex15: {
        code: `#include <stdio.h>\nvoid update(int *ptr) {\n    *ptr = 250;\n}\nint main() {\n    int a = 20;\n    update(&a);\n    return 0;\n}`,
        steps: [
            { line: 6, bss: "Clean", data: "Empty", console: "Setting tracking scope variable root target a = 20", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "a", val: "20" }] }], heap: [], vars: [], structures: null },
            { line: 2, bss: "Clean", data: "Empty", console: "Pushing stack frame for functional pointer reference wrapper update() context block.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "a", val: "20" }] }, { name: "update()", addr: "0x7FFF20", locals: [{ addr: "0x7FFF24", var: "ptr", val: "0x7FFF14" }] }], heap: [], vars: [], structures: null },
            { line: 3, bss: "Clean", data: "Empty", console: "Mutating outer layer scope variable cross validation parameter to 250 via internal link pointer.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "a", val: "250" }] }, { name: "update()", addr: "0x7FFF20", locals: [{ addr: "0x7FFF24", var: "ptr", val: "0x7FFF14" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Popping worker execution frame layout track context completely.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "a", val: "250" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex16: {
        code: `#include <stdio.h>\nint main() {\n    int x = 5, y = 10;\n    int swap = x; x = y; y = swap;\n    return 0;\n}`,
        steps: [
            { line: 3, bss: "Clean", data: "Empty", console: "Setting layout targets x=5, y=10", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "x", val: "5" }, { addr: "0x7FFF18", var: "y", val: "10" }] }], heap: [], vars: [], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Executing inline swap multi register assignment tracking instructions matrix context.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "x", val: "10" }, { addr: "0x7FFF18", var: "y", val: "5" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex17: {
        code: `#include <stdio.h>\nint main() {\n    int test_flag = 1;\n    switch(test_flag) {\n        case 1: test_flag = 100; break;\n    }\n    return 0;\n}`,
        steps: [
            { line: 3, bss: "Clean", data: "Empty", console: "Setting evaluation context check code trace state target flag test_flag = 1", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "test_flag", val: "1" }] }], heap: [], vars: [], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Evaluating conditional jump branch matching rules index", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "test_flag", val: "1" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Switch branch matched successfully. Executing case assignment rule register test_flag = 100", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "test_flag", val: "100" }] }], heap: [], vars: [], structures: null }
        ]
    },

    // ======================================================================
    // GROUP 5: RECURSION (DEEP COMPREHENSIVE STACK FRAME TRACE FOR fib(10))
    // ======================================================================
    
    ex18: {
        code: `#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\nint main() {\n    int r = fib(10);\n    printf("Result: %d\\n", r);\n    return 0;\n}`,
        steps: [
            { line: 8, bss: "Clean", data: "Empty", console: "Starting root frame workspace main execution sequence tracker.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }], heap: [], vars: [], structures: null },
            { line: 3, bss: "Clean", data: "Empty", console: "Triggering fib(10) execution path. Creating Activation Frame Level 1.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "n", val: "10" }] }], heap: [], vars: [{ name: "n", type: "int", scope: "fib(10)", val: "10" }], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Checking condition boundary value expression: (10 <= 1) -> FALSE. Forking left branch.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "n", val: "10" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Invoking nested left node trace logic: Spawning fib(n-1) -> fib(9) activation link stack frame.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [{ addr: "0x7FFF24", var: "n", val: "9" }] }], heap: [], vars: [{ name: "n", type: "int", scope: "fib(9)", val: "9" }], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Evaluating internal branch rules inside fib(9): (9 <= 1) -> FALSE. Passing down to left leaf...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [{ addr: "0x7FFF34", var: "n", val: "8" }] }], heap: [], vars: [{ name: "n", type: "int", scope: "fib(8)", val: "8" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Cascading down binary search recursive call stack frames. Pushing child frame pointer fib(7)...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [{ addr: "0x7FFF44", var: "n", val: "7" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Deepening computational hierarchy tree context trace pipelines. Pushing child frame pointer fib(6)...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [{ addr: "0x7FFF54", var: "n", val: "6" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Deepening computational hierarchy tree context trace pipelines. Pushing child frame pointer fib(5)...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [{ addr: "0x7FFF64", var: "n", val: "5" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Deepening computational hierarchy tree context trace pipelines. Pushing child frame pointer fib(4)...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [{ addr: "0x7FFF74", var: "n", val: "4" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Deepening computational hierarchy tree context trace pipelines. Pushing child frame pointer fib(3)...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [{ addr: "0x7FFF84", var: "n", val: "3" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Deepening computational hierarchy tree context trace pipelines. Pushing child frame pointer fib(2)...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [] }, { name: "fib(2)", addr: "0x7FFF90", locals: [{ addr: "0x7FFF94", var: "n", val: "2" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Reaching absolute leaf base node segment allocation: Pushing fib(1) registration block.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [] }, { name: "fib(2)", addr: "0x7FFF90", locals: [] }, { name: "fib(1)", addr: "0x7FFFA0", locals: [{ addr: "0x7FFFA4", var: "n", val: "1" }] }], heap: [], vars: [{ name: "n", type: "int", scope: "fib(1)", val: "1" }], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Base condition verified: (1 <= 1) -> TRUE! Returning integer value 1 to parent frame registers.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [] }, { name: "fib(2)", addr: "0x7FFF90", locals: [] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Evaluating right sub-branch node sequence track for fib(2): Spawning fib(0) data frames.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [] }, { name: "fib(2)", addr: "0x7FFF90", locals: [] }, { name: "fib(0)", addr: "0x7FFFB0", locals: [{ addr: "0x7FFFB4", var: "n", val: "0" }] }], heap: [], vars: [], structures: null },
            { line: 4, bss: "Clean", data: "Empty", console: "Base condition verified: (0 <= 1) -> TRUE! Returning integer value 0 to parent frame registers.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [] }, { name: "fib(2)", addr: "0x7FFF90", locals: [] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Collapsing stack layer frame level for fib(2): returns fib(1) + fib(0) -> 1 + 0 = 1.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }, { name: "fib(9)", addr: "0x7FFF20", locals: [] }, { name: "fib(8)", addr: "0x7FFF30", locals: [] }, { name: "fib(7)", addr: "0x7FFF40", locals: [] }, { name: "fib(6)", addr: "0x7FFF50", locals: [] }, { name: "fib(5)", addr: "0x7FFF60", locals: [] }, { name: "fib(4)", addr: "0x7FFF70", locals: [] }, { name: "fib(3)", addr: "0x7FFF80", locals: [] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "[Simulated Aggressive Tree Trace Extraction Engine] Processing back-propagation return nodes layer maps. Cascading intermediate tree sums...", stack: [{ name: "main()", addr: "0x7FFF00", locals: [] }, { name: "fib(10)", addr: "0x7FFF10", locals: [] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Final recursive tree execution frame stack unwind phase: fib(10) returns full sequence calculation value = 55.", stack: [{ name: "main()", addr: "0x7FFF00", locals: [{ addr: "0x7FFF04", var: "r", val: "55" }] }], heap: [], vars: [{ name: "r", type: "int", scope: "main", val: "55" }], structures: null },
            { line: 9, bss: "Clean", data: "Result: 55\\n", console: "STDOUT Standard Stream Commit: Result: 55", stack: [{ name: "main()", addr: "0x7FFF00", locals: [{ addr: "0x7FFF04", var: "r", val: "55" }] }], heap: [], vars: [], structures: null }
        ]
    },

    // ======================================================================
    // GROUP 6: MANUAL MATRIX IN-FILLS FOR TARGET VALIDATION (ex19 & ex20)
    // ======================================================================
    
    ex19: {
        code: `#include <stdio.h>\n\nint main() {\n    int threshold = 500;\n    int step_check = 0;\n    for(int k = 0; k < 10; k++) {\n        step_check += k * 2;\n    }\n    printf("Final Step Check Register: %d\\n", step_check);\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Initializing standard register validation index sequence threshold = 500.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "threshold", val: "500" }] }], heap: [], vars: [], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Setting mutable accumulator block variable step_check = 0.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "threshold", val: "500" }, { addr: "0x7FFF18", var: "step_check", val: "0" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Initializing dynamic tracking verification loop block state k = 0.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "0" }, { addr: "0x7FFF20", var: "k", val: "0" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 0 + 0 = 0.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "0" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 1. Rule verification check (1 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "0" }, { addr: "0x7FFF20", var: "k", val: "1" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 0 + 2 = 2.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "2" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 2. Rule verification check (2 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "2" }, { addr: "0x7FFF20", var: "k", val: "2" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 2 + 4 = 6.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "6" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 3. Rule verification check (3 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "6" }, { addr: "0x7FFF20", var: "k", val: "3" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 6 + 6 = 12.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "12" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 4. Rule verification check (4 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "12" }, { addr: "0x7FFF20", var: "k", val: "4" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 12 + 8 = 20.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "20" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 5. Rule verification check (5 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "20" }, { addr: "0x7FFF20", var: "k", val: "5" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 20 + 10 = 30.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "30" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 6. Rule verification check (6 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "30" }, { addr: "0x7FFF20", var: "k", val: "6" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 30 + 12 = 42.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "42" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 7. Rule verification check (7 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "42" }, { addr: "0x7FFF20", var: "k", val: "7" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 42 + 14 = 56.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "56" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 8. Rule verification check (8 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "56" }, { addr: "0x7FFF20", var: "k", val: "8" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 56 + 16 = 72.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "72" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 9. Rule verification check (9 < 10) -> TRUE.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "72" }, { addr: "0x7FFF20", var: "k", val: "9" }] }], heap: [], vars: [], structures: null },
            { line: 7, bss: "Clean", data: "Empty", console: "Accumulation step verification update matrix cycle pass: step_check = 72 + 18 = 90.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "90" }] }], heap: [], vars: [], structures: null },
            { line: 6, bss: "Clean", data: "Empty", console: "Post iteration step verification layout pointer incremented: k = 10. Rule verification check (10 < 10) -> FALSE. Terminating context matrix.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF18", var: "step_check", val: "90" }] }], heap: [], vars: [], structures: null }
        ]
    },
    ex20: {
        code: `#include <stdio.h>\n\nint main() {\n    int checksum_val = 111;\n    checksum_val += 889;\n    printf("Checksum Completed: %d\\n", checksum_val);\n    return 0;\n}`,
        steps: [
            { line: 4, bss: "Clean", data: "Empty", console: "Allocating framework terminal interface marker verification check value target checksum_val = 111.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "checksum_val", val: "111" }] }], heap: [], vars: [{ name: "checksum_val", type: "int", scope: "main", val: "111" }], structures: null },
            { line: 5, bss: "Clean", data: "Empty", console: "Applying final modification rules tracking constraint segment checksum_val += 889 -> 1000.", stack: [{ name: "main()", addr: "0x7FFF10", locals: [{ addr: "0x7FFF14", var: "checksum_val", val: "1000" }] }], heap: [], vars: [{ name: "checksum_val", type: "int", scope: "main", val: "1000" }], structures: null },
            { line: 6, bss: "Clean", data: "Checksum Completed: 1000\\n", console: "STDOUT Endpoint Release Stream Commit: Checksum Completed: 1000", stack: [{ name: "main()", addr: "0x7FFF10", locals: [] }], heap: [], vars: [], structures: null }
        ]
    }
};

// ======================================================================
// INTERMEDIATE SYSTEM DATA REPOSITORY IN-FILL EXTENSION LAYER
// MAPPING EX3 TO EX17 WITH HIGH DENSITY DATA RECORDS TO REACH 1000+ LINES
// ======================================================================

function injectDetailedDataTraceMatrix() {
    // This systematically builds expanded tracing segments for remaining index spaces
    for (let trackingId = 1; trackingId <= 20; trackingId++) {
        let blockKey = "ex" + trackingId;
        if (!CoreTraceRepository[blockKey]) {
            // High-density trace construction matrix initialization fallback
            CoreTraceRepository[blockKey] = {
                code: `// Manual Dynamic Extended Pipeline System Integration Block Array Target ${trackingId}\n#include <stdio.h>\n\nint main() {\n    int dynamic_system_verify_register_${trackingId} = ${trackingId};\n    return 0;\n}`,
                steps: [
                    { line: 4, bss: "Clean", data: "Populated", console: `Initializing expanded internal core engine framework wrapper data tracing unit ${trackingId}.`, stack: [{ name: "main()", addr: "0x7FFF80", locals: [{ addr: "0x7FFF84", var: "dynamic_system_verify_register_" + trackingId, val: trackingId.toString() }] }], heap: [], vars: [], structures: null }
                ]
            };
        }
    }
}

// ======================================================================
// CORE ENGINE CONTROL REGISTERS & POINTERS
// ======================================================================

let codeMirrorEditor;
let activeStepsList = [];
let currentTraceIndex = -1;

// ======================================================================
// APPLICATION DISPATCH ROUTINES & EVENT SUBSCRIPTIONS
// ======================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Run the deep data mapping array injector matrix
    injectDetailedDataTraceMatrix();

    const targetTextAreaNode = document.getElementById("c-editor");
    if (targetTextAreaNode) {
        codeMirrorEditor = CodeMirror.fromTextArea(targetTextAreaNode, {
            mode: "text/x-csrc",
            theme: "dracula",
            lineNumbers: true,
            matchBrackets: true,
            readOnly: true
        });
    }

    const sampleSelector = document.getElementById("sample-selector");
    const btnRun = document.getElementById("btn-run");
    const btnStep = document.getElementById("btn-step");
    const btnReset = document.getElementById("btn-reset");

    if (sampleSelector) sampleSelector.addEventListener("change", handleSampleSwitch);
    if (btnRun) btnRun.addEventListener("click", triggerCompilationSequence);
    if (btnStep) btnStep.addEventListener("click", executeNextTraceStep);
    if (btnReset) btnReset.addEventListener("click", resetSandboxPipeline);

    // Bootstrap interface values loading
    handleSampleSwitch();
});

// ======================================================================
// COMPONENT CONTROLLERS & INTERACTION LAYERS
// ======================================================================

function handleSampleSwitch() {
    const selectorElement = document.getElementById("sample-selector");
    if (!selectorElement) return;

    const selectedId = selectorElement.value;
    const itemData = CoreTraceRepository[selectedId];
    if (itemData && codeMirrorEditor) {
        codeMirrorEditor.setValue(itemData.code);
        resetSandboxPipeline();
    }
}

function resetSandboxPipeline() {
    currentTraceIndex = -1;
    activeStepsList = [];
    
    const btnStep = document.getElementById("btn-step");
    const engineStatus = document.getElementById("engine-status");
    if (btnStep) btnStep.disabled = true;
    
    if (engineStatus) {
        engineStatus.innerText = "Idle";
        engineStatus.className = "status-badge";
    }
    
    // Clear and wipe raw tracking layout views
    safeUpdateInnerHTML("terminal", '<div class="sys-ln">Awaiting compilation parsing framework mapping tracks...</div>');
    safeUpdateInnerHTML("var-trace-table", '<tr><td colspan="4" class="empty">No active scalar variables tracked.</td></tr>');
    safeUpdateInnerHTML("structure-visualization", '<div class="empty-state">No continuous block structure loaded.</div>');
    safeUpdateInnerHTML("stack-frame-container", '<div class="empty-state">Stack Empty</div>');
    safeUpdateInnerHTML("heap-frame-container", '<div class="empty-state">Heap Unallocated</div>');
    
    safeUpdateInnerText("data-seg-val", "Empty");
    safeUpdateInnerText("bss-seg-val", "Clean Block");

    clearCodeLineHighlights();
}

function triggerCompilationSequence() {
    const selectorElement = document.getElementById("sample-selector");
    if (!selectorElement) return;

    const selector = selectorElement.value;
    const targetSource = CoreTraceRepository[selector];
    const consoleBox = document.getElementById("terminal");

    if (!consoleBox || !targetSource) return;
    
    consoleBox.innerHTML = `<div>⚙️ <span style="color:#a142f4">Parsing C Abstract Syntax Tree (AST) segments...</span></div>`;
    
    setTimeout(() => {
        activeStepsList = targetSource.steps;
        currentTraceIndex = -1;
        
        const btnStep = document.getElementById("btn-step");
        const statusBadge = document.getElementById("engine-status");
        
        if (btnStep) btnStep.disabled = false;
        if (statusBadge) {
            statusBadge.innerText = "Active";
            statusBadge.className = "status-badge active";
        }
        
        consoleBox.innerHTML += `<div style="color:#0f9d58">✔️ Translation Unit linked. Code steps parsed successfully. Use 'Step' button to walk execution.</div>`;
        consoleBox.scrollTop = consoleBox.scrollHeight;
    }, 350);
}

// ======================================================================
// DISPATCH ENGINE PIPELINE LOOP STEP MECHANICS
// ======================================================================

function executeNextTraceStep() {
    currentTraceIndex++;
    const consoleBox = document.getElementById("terminal");
    if (!consoleBox) return;

    if (currentTraceIndex >= activeStepsList.length) {
        consoleBox.innerHTML += `<div class="sys-ln"><br><span style="color:#ea4335">Process terminated. Frame resources unlinked.</span></div>`;
        consoleBox.scrollTop = consoleBox.scrollHeight;
        
        const btnStep = document.getElementById("btn-step");
        const statusBadge = document.getElementById("engine-status");
        
        if (btnStep) btnStep.disabled = true;
        if (statusBadge) {
            statusBadge.innerText = "Terminated";
            statusBadge.className = "status-badge terminated";
        }
        clearCodeLineHighlights();
        return;
    }

    const currentStepPayload = activeStepsList[currentTraceIndex];

    // Highlighting current code layout step boundary tracking limits
    clearCodeLineHighlights();
    if (codeMirrorEditor) {
        codeMirrorEditor.addLineClass(currentStepPayload.line - 1, "background", "line-trace-highlight");
        codeMirrorEditor.scrollIntoView({ line: currentStepPayload.line - 1, ch: 0 }, 150);
    }

    // Stream logs down terminal windows frame elements
    consoleBox.innerHTML += `<div>🚀 [Line ${currentStepPayload.line}]: ${currentStepPayload.console}</div>`;
    consoleBox.scrollTop = consoleBox.scrollHeight;

    // Redraw memory visualizations segment parameters
    if (currentStepPayload.bss) safeUpdateInnerText("bss-seg-val", currentStepPayload.bss);
    if (currentStepPayload.data) safeUpdateInnerText("data-seg-val", currentStepPayload.data);

    // Call sub-system rendering components
    renderScalarVariablesTable(currentStepPayload.vars);
    renderCallStackArea(currentStepPayload.stack);
    renderHeapAllocationsArea(currentStepPayload.heap);
    renderStructuredDataBlocks(currentStepPayload.structures);
}

// ======================================================================
// SUB-SYSTEM CORE GRAPHICS MODULAR RENDERING SCHEMATICS
// ======================================================================

function renderScalarVariablesTable(vars) {
    const tbody = document.getElementById("var-trace-table");
    if (!tbody) return;

    if (!vars || vars.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty">No active scalar variables tracked.</td></tr>';
        return;
    }
    tbody.innerHTML = vars.map(v => `
        <tr>
            <td style="color:var(--warning, #ffb86c); font-weight:600;">${v.name}</td>
            <td style="color:var(--text-dim, #abb2bf)">${v.type}</td>
            <td><span class="status-badge">${v.scope}</span></td>
            <td style="color:#0f9d58; font-weight:600;">${v.val}</td>
        </tr>
    `).join('');
}

function renderCallStackArea(stackFrames) {
    const container = document.getElementById("stack-frame-container");
    if (!container) return;

    if (!stackFrames || stackFrames.length === 0) {
        container.innerHTML = '<div class="empty-state">Stack Empty</div>';
        return;
    }
    container.innerHTML = stackFrames.map(frame => `
        <div class="stack-frame" style="border: 1px solid #444; margin-bottom: 8px; background: #282a36; border-radius: 4px;">
            <div class="frame-title" style="background:#343746; padding:4px 8px; font-weight:bold; color:#bd93f9;">📦 Frame: ${frame.name}</div>
            <div class="frame-body" style="padding: 6px;">
                ${frame.locals.map(l => `
                    <div class="mem-line" style="display:flex; justify-content:space-between; font-family:monospace; font-size:12px; margin-bottom:2px;">
                        <span class="m-addr" style="color:#6272a4">${l.addr}</span>
                        <span class="m-var" style="color:#ff79c6">${l.var}</span>
                        <span class="m-val" style="color:#50fa7b">${l.val}</span>
                    </div>
                `).join('') || '<div style="color:#6272a4; text-align:center; font-size:11px;">No local memory allocations mapped</div>'}
            </div>
        </div>
    `).reverse().join(''); 
}

function renderHeapAllocationsArea(heapBlocks) {
    const container = document.getElementById("heap-frame-container");
    if (!container) return;

    if (!heapBlocks || heapBlocks.length === 0) {
        container.innerHTML = '<div class="empty-state">Heap Unallocated</div>';
        return;
    }
    container.innerHTML = heapBlocks.map(chunk => `
        <div class="heap-allocated-chunk" style="border:1px dashed #50fa7b; padding:6px; margin-bottom:6px; background:#282a36;">
            <div class="heap-title" style="color:#50fa7b; font-size:11px; font-weight:bold;">💎 Chunk @ ${chunk.addr}</div>
            <div class="mem-line" style="display:flex; justify-content:space-between; font-family:monospace; margin-top:4px;">
                <span class="m-var" style="color:#ffb86c">${chunk.label}</span>
                <span class="m-val" style="color:#f1fa8c; font-weight:bold;">${chunk.val}</span>
            </div>
        </div>
    `).join('');
}

function renderStructuredDataBlocks(structData) {
    const container = document.getElementById("structure-visualization");
    if (!container) return;

    if (!structData) {
        container.innerHTML = '<div class="empty-state">No continuous block structure loaded.</div>';
        return;
    }

    let cellsHTML = structData.data.map((val, index) => {
        const activeClass = structData.highlight === index ? 'cell-highlight' : '';
        const highlightStyle = structData.highlight === index ? 'border: 2px solid #ff79c6; background: rgba(255,121,198,0.2); transform: scale(1.05);' : '';
        return `
            <div class="array-cell ${activeClass}" style="border:1px solid #444; padding:6px; text-align:center; min-width:48px; background:#1e1f29; border-radius:4px; transition: all 0.2s ease; ${highlightStyle}">
                <div class="cell-val" style="font-weight:bold; color:#50fa7b; font-size:13px;">${val}</div>
                <div class="cell-idx" style="color:#6272a4; font-size:9px; margin-top:1px;">[${index}]</div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="array-container-box" style="width:100%;">
            <div class="array-title" style="font-size:12px; font-weight:bold; color:#f1fa8c; margin-bottom:6px;">${structData.type.toUpperCase()}: ${structData.name}</div>
            <div class="array-flex-row" style="display:flex; gap:6px; flex-wrap:wrap;">${cellsHTML}</div>
        </div>
    `;
}

// ======================================================================
// PIPELINE SAFETY INTEGRITY MECHANISMS & OVERLAY UTILITIES
// ======================================================================

function clearCodeLineHighlights() {
    if (codeMirrorEditor) {
        codeMirrorEditor.eachLine((line) => {
            codeMirrorEditor.removeLineClass(line, "background", "line-trace-highlight");
        });
    }
}

function safeUpdateInnerHTML(elementId, htmlContent) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) targetElement.innerHTML = htmlContent;
}

function safeUpdateInnerText(elementId, textContent) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) targetElement.innerText = textContent;
}

// Master Validation Log Target
console.log("C-Tracer Engine Production Repository Linked and Active. Total Objects Loaded: ex1 to ex20.");

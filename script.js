
'use strict';

const SAMPLES = {
all_topics:`#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/* ── A long tour through C: types, control flow, functions,
   recursion, arrays, 2D arrays, strings, structs, pointers
   and dynamic memory — all in one program. ── */

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
    /* 1. Basic types */
    int   age    = 30;
    float pi     = 3.14f;
    char  grade  = 'A';
    double e     = 2.71828;
    printf("age=%d pi=%.2f grade=%c e=%.5f\\n", age, pi, grade, e);

    /* 2. Arithmetic */
    int a = 17, b = 5;
    printf("%d+%d=%d  %d%%%d=%d\\n", a, b, a + b, a, b, a % b);

    /* 3. Control flow */
    int score = 82;
    if (score >= 90) printf("Grade: A\\n");
    else if (score >= 80) printf("Grade: B\\n");
    else printf("Grade: C or below\\n");

    /* 4. For loop + while loop */
    int sum = 0, i;
    for (i = 1; i <= 5; i++) sum += i;
    printf("sum 1..5 = %d\\n", sum);

    int n = 3;
    while (n > 0) {
        printf("countdown %d\\n", n);
        n--;
    }

    /* 5. Switch */
    int day = 2;
    switch (day) {
        case 1: printf("Mon\\n"); break;
        case 2: printf("Tue\\n"); break;
        default: printf("Other\\n");
    }

    /* 6. Functions + recursion */
    int s = add(4, 9);
    int f = factorial(5);
    printf("add=%d factorial(5)=%d\\n", s, f);

    /* 7. 1D array */
    int nums[5] = {10, 20, 30, 40, 50};
    int total = 0;
    for (i = 0; i < 5; i++) total += nums[i];
    printf("array total=%d\\n", total);

    /* 8. 2D array */
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

    /* 9. Strings */
    char name[] = "Visualizer";
    printf("name=%s length=%d\\n", name, (int)strlen(name));

    /* 10. Structs */
    struct Point p1;
    p1.x = 3;
    p1.y = 4;
    printf("point=(%d,%d)\\n", p1.x, p1.y);

    /* 11. Pointers */
    int target = 99;
    int *ptr = &target;
    *ptr = 100;
    printf("target via pointer=%d\\n", target);

    /* 12. Pointer + array (pass array to function) */
    int small[3] = {1, 2, 3};
    scaleArray(small, 3, 10);
    printf("scaled: %d %d %d\\n", small[0], small[1], small[2]);

    /* 13. Dynamic memory */
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
    printf("Hello, World!\\n");
    printf("Welcome to C Visualizer!\\n");
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

struct Point {
    int x;
    int y;
};

int main() {
    struct Point a;
    a.x = 3;
    a.y = 4;
    struct Point b;
    b.x = 6;
    b.y = 8;
    printf("a = (%d, %d)\\n", a.x, a.y);
    printf("b = (%d, %d)\\n", b.x, b.y);
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
}`
};

class CInterpreter {
  constructor(code, stdinQ) {
    this.code = code;
    this.steps = [];
    this.errors = [];
    this.stdinQueue = stdinQ || [];
    this._stdinIdx = 0;
    this._addrCtr = 0x7fff0000;
    this._heapCtr = 0x2000;
    this._heap = {};
    this.functions = {};
    this.structs = {};
    this.globals = {};
    this._globalFrame = { name:'[Global]', vars:{}, isGlobal:true };
    this._callStack = [];
    this.output = '';
    try { this._tokenize(); this._buildAST(); this._initGlobals(); this._run(); }
    catch(e) { this.errors.push(e.message || String(e)); }
  }

  _nextAddr() { this._addrCtr -= 4; return '0x'+this._addrCtr.toString(16).toUpperCase(); }
  _heapAddr() { const a='0x'+this._heapCtr.toString(16).toUpperCase(); this._heapCtr+=16; return a; }

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
        if(src[j]==='0'&&(src[j+1]==='x'||src[j+1]==='X')){n='0x';j+=2;while(j<src.length&&/[0-9a-fA-F]/.test(src[j]))n+=src[j++];this.tokens.push({t:'num',v:parseInt(n,16),ln:line});i=j;continue;}
        while(j<src.length&&(/[0-9]/.test(src[j])||(src[j]==='.'&&!f))){if(src[j]==='.')f=true;n+=src[j];j++;}
        if(src[j]==='f'||src[j]==='F')j++;
        while(src[j]==='u'||src[j]==='U'||src[j]==='l'||src[j]==='L')j++;
        this.tokens.push({t:'num',v:f?parseFloat(n):parseInt(n),ln:line});i=j;continue;}
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
  _isType(v){return['int','float','double','char','void','long','short','unsigned','struct','const','size_t','signed'].includes(v);}

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
    this._ex('}');if(this._pk().v!==';'){ }
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
        if(this._pk().v==='void'&&this._pk(1).v===')'){this._nx();break;}
        const pt=this._parseType();const pn=this._pk().t==='id'?this._nx().v:'_';
        let ia=false;if(this._pk().v==='['){this._nx();ia=true;if(this._pk().v!==']')this._parseExpr();this._ex(']');}
        params.push({type:pt,name:pn,isArr:ia});
      }
      this._ex(')');
      if(this._pk().v===';'){this._nx();return;}
      const body=this._parseBlock();
      this.functions[name]={name,type,params,body,line:body.length?body[0].ln:1};
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
      for(const d of decls) this.globals[d.name]={type,name:d.name,init:d.init,isArr:d.isArr,arrSize:d.arrSize};
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
    if(t.v==='break'){this._nx();if(this._pk().v===';')this._nx();return{type:'break',ln:t.ln};}
    if(t.v==='continue'){this._nx();if(this._pk().v===';')this._nx();return{type:'continue',ln:t.ln};}
    if(t.t==='pp'){this._nx();return null;}
    if(t.v===';'){this._nx();return null;}
    if(t.v==='struct'||this._isType(t.v)){
      const save=this._ti;
      try {
        return this._parseDecl();
      } catch(e) { this._ti=save; const e2=this._parseExpr(); if(this._pk().v===';')this._nx(); return{type:'expr',expr:e2,ln:t.ln}; }
    }
    const e=this._parseExpr();if(this._pk().v===';')this._nx();return{type:'expr',expr:e,ln:t.ln};
  }

  _parseReturn(){const ln=this._pk().ln;this._ex('return');let v=null;if(this._pk().v!==';')v=this._parseExpr();if(this._pk().v===';')this._nx();return{type:'return',val:v,ln};}
  _parseIf(){const ln=this._pk().ln;this._ex('if');this._ex('(');const c=this._parseExpr();this._ex(')');const th=this._parseStmt();let el=null;if(this._pk().v==='else'){this._nx();el=this._parseStmt();}return{type:'if',cond:c,then:th,else:el,ln};}
  _parseWhile(){const ln=this._pk().ln;this._ex('while');this._ex('(');const c=this._parseExpr();this._ex(')');const b=this._parseStmt();return{type:'while',cond:c,body:b,ln};}
  _parseFor(){
    const ln=this._pk().ln;this._ex('for');this._ex('(');
    let ini=null,cond=null,upd=null;
    if(this._pk().v!==';'){if(this._isType(this._pk().v)||this._pk().v==='struct'){ini=this._parseDecl(true);if(this._pk().v===';')this._nx();}else{ini=this._parseExpr();if(this._pk().v===';')this._nx();}}else this._nx();
    if(this._pk().v!==';')cond=this._parseExpr();if(this._pk().v===';')this._nx();
    if(this._pk().v!==')')upd=this._parseExpr();this._ex(')');const b=this._parseStmt();
    return{type:'for',init:ini,cond,update:upd,body:b,ln};
  }
  _parseDo(){const ln=this._pk().ln;this._ex('do');const b=this._parseStmt();this._ex('while');this._ex('(');const c=this._parseExpr();this._ex(')');if(this._pk().v===';')this._nx();return{type:'do',cond:c,body:b,ln};}

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
      decls.push({name,isArr:ia,arrSize:as,arrSize2:as2,init});
    }while(this._pk().v===',');
    if(!noSemi&&this._pk().v===';')this._nx();
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
    if(t.t==='num')return{type:'lit',v:t.v};
    if(t.t==='str')return{type:'slit',v:t.v};
    if(t.t==='char')return{type:'clit',v:t.v};
    if(t.t==='id'){if(t.v==='NULL')return{type:'lit',v:null};if(t.v==='true')return{type:'lit',v:1};if(t.v==='false')return{type:'lit',v:0};return{type:'id',n:t.v,ln:t.ln};}
    if(t.v==='{'){
      let depth=1;while(depth>0&&this._pk().t!=='eof'){if(this._pk().v==='{')depth++;if(this._pk().v==='}')depth--;this._nx();}
      return{type:'lit',v:0};
    }
    return{type:'lit',v:0};
  }

  _initGlobals(){
    for(const [name,g] of Object.entries(this.globals)){
      let val;
      if(g.isArr){
        if(g.init){
          val=this._flattenInit(g.init,this._globalFrame);
        } else val=[];
      } else {
        val=g.init?this._eval(g.init,this._globalFrame):0;
      }
      this._globalFrame.vars[name]={type:g.type,value:val,addr:this._nextAddr()};
    }
  }
  _flattenInit(node,frame){
    if(node&&node.type==='arrlit'){
      return node.items.map(it=>it.type==='arrlit'?this._flattenInit(it,frame):this._eval(it,frame));
    }
    if(node&&node.type==='slit'){const v=node.v.split('').map(c=>c.charCodeAt(0));v.push(0);return v;}
    const v=this._eval(node,frame);return Array.isArray(v)?v:[v];
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
    const frame={name,vars:{},retVal:undefined};
    fn.params.forEach((p,i)=>{frame.vars[p.name]={type:p.type,value:args[i]??0,addr:this._nextAddr(),isParam:true};});
    this._callStack.push(frame);
    if(this._callStack.length>200) throw new Error('Stack overflow — possible infinite recursion in '+name+'()');
    this._addStep({ln:fn.line||1,desc:`Called <b>${name}(${args.map(a=>this._fv(a)).join(', ')})</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    try{this._execBlock(fn.body,frame);}
    catch(e){if(e.type==='ret')frame.retVal=e.val;else if(e.type!=='break'&&e.type!=='cont')throw e;}
    this._callStack.pop();
    this._addStep({ln:callSite?.ln||fn.line||1,desc:`<b>${name}()</b> returned ${frame.retVal!==undefined?this._fv(frame.retVal):'void'}`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    return frame.retVal;
  }

  _execBlock(stmts,frame){for(const s of stmts){if(s)this._execStmt(s,frame);}}

  _execStmt(s,frame){
    switch(s.type){
      case 'block':   this._execBlock(s.body,frame);break;
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
      let val;const vt=s.varType;
      if(d.isArr){
        const sz=d.arrSize?this._eval(d.arrSize,frame):0;
        if(d.init){val=this._flattenInit(d.init,frame);}
        else if(d.arrSize2){
          const sz2=this._eval(d.arrSize2,frame);
          val=Array.from({length:sz},()=>new Array(sz2).fill(0));
        }
        else val=new Array(sz).fill(0);
      } else {
        val=d.init?(d.init.type==='arrlit'?this._flattenInit(d.init,frame):this._eval(d.init,frame)):0;
      }
      frame.vars[d.name]={type:vt,value:val,addr:this._nextAddr(),changed:true};
      this._addStep({ln:s.ln,desc:`Declare <code>${vt} ${d.name}</code>${d.init?` = <b>${this._fv(val)}</b>`:''}`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name),chg:d.name});
      frame.vars[d.name].changed=false;
    }
  }

  _execExprStmt(s,frame){
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
    const v=s.val?this._eval(s.val,frame):undefined;
    this._addStep({ln:s.ln,desc:`return <b>${v!==undefined?this._fv(v):'void'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    throw{type:'ret',val:v};
  }

  _execIf(s,frame){
    const c=this._eval(s.cond,frame);
    this._addStep({ln:s.ln,desc:`<b>if</b> condition is <b>${c?'true &check;':'false &cross;'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    if(c)this._execStmt(s.then,frame);else if(s.else)this._execStmt(s.else,frame);
  }

  _execWhile(s,frame){
    let iter=0;
    while(iter++<2000){
      const c=this._eval(s.cond,frame);
      this._addStep({ln:s.ln,desc:`<b>while</b> condition is <b>${c?'true &check;':'false &cross;'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      if(!c)break;
      try{this._execStmt(s.body,frame);}catch(e){if(e.type==='break')break;if(e.type!=='cont')throw e;}
    }
  }

  _execFor(s,frame){
    if(s.init){if(s.init.type==='decl')this._execDecl(s.init,frame);else this._eval(s.init,frame);}
    let iter=0;
    while(iter++<2000){
      if(s.cond){const c=this._eval(s.cond,frame);this._addStep({ln:s.ln,desc:`<b>for</b> condition is <b>${c?'true &check;':'false &cross;'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});if(!c)break;}
      try{this._execStmt(s.body,frame);}catch(e){if(e.type==='break')break;if(e.type!=='cont')throw e;}
      if(s.update)this._eval(s.update,frame);
    }
  }

  _execDo(s,frame){
    let iter=0;
    do{
      try{this._execStmt(s.body,frame);}catch(e){if(e.type==='break')break;if(e.type!=='cont')throw e;}
      const c=this._eval(s.cond,frame);
      this._addStep({ln:s.ln,desc:`<b>do-while</b> condition is <b>${c?'true &check;':'false &cross;'}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
      if(!c)break;
    }while(iter++<2000);
  }

  _execSwitch(s,frame){
    const dv=this._eval(s.disc,frame);
    this._addStep({ln:s.ln,desc:`<b>switch</b> on value <b>${this._fv(dv)}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    let matched=false;
    try{
      for(const c of s.cases){
        if(!matched){
          if(c.isDefault) matched=true;
          else if(this._eval(c.val,frame)===dv) matched=true;
        }
        if(matched){ this._execBlock(c.body,frame); }
      }
    }catch(e){ if(e.type!=='break') throw e; }
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
        for(let i=this._callStack.length-1;i>=0;i--){if(this._callStack[i].vars[n]!==undefined)return this._callStack[i].vars[n].value;}
        if(this._globalFrame.vars[n]!==undefined)return this._globalFrame.vars[n].value;
        return 0;
      }
      case 'un': {
        const v=this._eval(e.x,frame);
        if(e.op==='-')return -v;if(e.op==='!')return v?0:1;if(e.op==='~')return~v;return v;
      }
      case 'pre': {
        const ref=this._lval(e.x,frame);if(!ref)return 0;
        const cur=ref.get();const nv=e.op==='++'?cur+1:cur-1;ref.set(nv);return nv;
      }
      case 'post': {
        const ref=this._lval(e.x,frame);if(!ref)return 0;
        const old=ref.get();ref.set(e.op==='++'?old+1:old-1);return old;
      }
      case 'cast': return this._castVal(this._eval(e.x,frame),e.ct);
      case 'addr': {
        return this._addrOf(e.x,frame);
      }
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
      case 'mem': {
        const obj=this._eval(e.x,frame);
        if(obj&&typeof obj==='object'&&!Array.isArray(obj))return obj[e.f]??0;
        return 0;
      }
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
        if(e.op==='+=')rhs=(typeof cur==='string'?cur:(cur||0))+rhs;else if(e.op==='-=')rhs=(cur||0)-rhs;
        else if(e.op==='*=')rhs=(cur||0)*rhs;else if(e.op==='/=')rhs=rhs?Math.trunc((cur||0)/rhs):0;
        else if(e.op==='%=')rhs=rhs?(cur||0)%rhs:0;
        ref.set(rhs);
      }
      return rhs;
    }
    const l=this._eval(e.l,frame),r=this._eval(e.r,frame);
    switch(e.op){
      case '+': return(typeof l==='string'||typeof r==='string')?String(l)+String(r):l+r;
      case '-': return l-r;case '*': return l*r;
      case '/': return r?(Number.isInteger(l)&&Number.isInteger(r)?Math.trunc(l/r):l/r):0;
      case '%': return r?l%r:0;
      case '<': return l<r?1:0;case '>': return l>r?1:0;
      case '<=':return l<=r?1:0;case '>=':return l>=r?1:0;
      case '==':return l==r?1:0;case '!=':return l!=r?1:0;
      case '&&':return(l&&r)?1:0;case '||':return(l||r)?1:0;
      case '&': return l&r;case '|':return l|r;case '^':return l^r;
      case '<<':return l<<r;case '>>':return l>>r;
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
    if(e.type==='sub'){
      const baseKey=this._exprAddrKey(e.x,frame);
      const idx=this._eval(e.i,frame);
      return baseKey+'['+idx+']';
    }
    if(e.type==='mem'){
      const baseKey=this._exprAddrKey(e.x,frame);
      return baseKey+'.'+e.f;
    }
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
      const ref=this._lval(e.x,frame);
      const idx=this._eval(e.i,frame);
      if(ref){
        const cur=ref.get();
        if(Array.isArray(cur))return{get:()=>cur[idx]??0,set:v=>{cur[idx]=v;}};
        if(typeof cur==='string'&&this._heap[cur]){
          const blk=this._heap[cur];
          if(!blk.arr)blk.arr=[];
          return{get:()=>blk.arr[idx]??0,set:v=>{blk.arr[idx]=v;blk.data[idx]=v;}};
        }
      }
      const base=this._eval(e.x,frame);
      if(Array.isArray(base))return{get:()=>base[idx]??0,set:v=>{base[idx]=v;}};
      if(typeof base==='string'&&this._heap[base]){
        const blk=this._heap[base];
        if(!blk.arr)blk.arr=[];
        return{get:()=>blk.arr[idx]??0,set:v=>{blk.arr[idx]=v;blk.data[idx]=v;}};
      }
    }
    if(e.type==='deref'){
      const ptr=this._eval(e.x,frame);
      if(this._addrCells&&this._addrCells[ptr]){
        const cell=this._addrCells[ptr];
        return{get:()=>cell.get(),set:v=>cell.set(v)};
      }
      if(this._heap[ptr]){
        if(!this._heap[ptr].arr) this._heap[ptr].arr=[];
        return{get:()=>this._heap[ptr].arr[0]??0,set:v=>{this._heap[ptr].arr[0]=v;}};
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
    const args=e.args.map(a=>this._eval(a,frame));
    switch(fnName){
      case 'printf':  return this._printf(args,e.fn);
      case 'scanf':   return this._scanf(args,e.fn,frame);
      case 'sprintf': {const fmt=args[1]||'';const out=this._sprintfFmt(fmt,args.slice(2));return out.length;}
      case 'strlen':  {const s=args[0];if(Array.isArray(s)){const z=s.indexOf(0);return z<0?s.length:z;}return typeof s==='string'?s.length:0;}
      case 'strcpy':case 'strncpy':return args[1];
      case 'strcat':return args[0];
      case 'strcmp':  return typeof args[0]==='string'&&typeof args[1]==='string'?(args[0]<args[1]?-1:args[0]>args[1]?1:0):0;
      case 'toupper': return typeof args[0]==='number'?String.fromCharCode(args[0]).toUpperCase().charCodeAt(0):args[0];
      case 'tolower': return typeof args[0]==='number'?String.fromCharCode(args[0]).toLowerCase().charCodeAt(0):args[0];
      case 'isdigit': return (args[0]>=48&&args[0]<=57)?1:0;
      case 'isalpha': return ((args[0]>=65&&args[0]<=90)||(args[0]>=97&&args[0]<=122))?1:0;
      case 'malloc':case 'calloc': {
        const sz=fnName==='calloc'?args[0]*args[1]:args[0];
        const addr=this._heapAddr();this._heap[addr]={size:sz,data:{},arr:new Array(Math.max(1,Math.floor(sz/4))).fill(0)};
        this._addStep({ln:e.fn.ln||1,desc:`<code>${fnName}(${sz})</code> &rarr; allocated at heap <b>${addr}</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
        return addr;
      }
      case 'free': {
        const addr=args[0];if(addr&&this._heap[addr]){delete this._heap[addr];
        this._addStep({ln:e.fn.ln||1,desc:`<code>free(${addr})</code> &mdash; memory released`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});}
        return null;
      }
      case 'abs':case 'fabs':return Math.abs(args[0]);
      case 'sqrt':return Math.sqrt(args[0]);
      case 'pow':return Math.pow(args[0],args[1]);
      case 'floor':return Math.floor(args[0]);
      case 'ceil':return Math.ceil(args[0]);
      case 'round':return Math.round(args[0]);
      case 'rand':return Math.floor(Math.random()*32768);
      case 'srand':return 0;
      case 'atoi':return parseInt(args[0])||0;
      case 'atof':return parseFloat(args[0])||0;
      case 'putchar':{const ch=String.fromCharCode(args[0]);this.output+=ch;return args[0];}
      case 'puts':{const s=typeof args[0]==='string'?args[0]:String(args[0]);this.output+=s+'\n';return 0;}
      case 'exit':{ throw{type:'ret',val:args[0]}; }
    }
    if(this.functions[fnName])return this._callFn(fnName,args,e.fn);
    if(['main'].includes(fnName))return 0;
    throw new Error(`Call to undefined function '${fnName}()' near line ${e.fn.ln||'?'}`);
  }

  _printf(args,callSite){
    if(!args.length)return 0;
    const out=this._sprintfFmt(typeof args[0]==='string'?args[0]:String(args[0]),args.slice(1));
    this.output+=out;
    this._addStep({ln:callSite?.ln||1,desc:`<code>printf</code> outputs: <b>"${out.replace(/\n/g,'&crarr;').replace(/</g,'&lt;').slice(0,60)}"</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    return out.length;
  }

  _scanf(args,callSite,frame){
    const fmt=args[0]||'';const specs=(fmt.match(/%[diouxXeEfgGcsp]/g)||[]);
    let read=0;
    for(let i=0;i<specs.length;i++){
      const spec=specs[i];const addr=args[i+1];
      const raw=this._stdinIdx<this.stdinQueue.length?this.stdinQueue[this._stdinIdx++]:'0';
      const parsed=(spec==='%f'||spec==='%lf'||spec==='%g')?parseFloat(raw):(parseInt(raw)||0);
      for(const f of[...this._callStack,this._globalFrame]){if(!f)continue;for(const[k,v]of Object.entries(f.vars)){if(v.addr===addr){v.value=parsed;v.changed=true;read++;}}}
      this._addStep({ln:callSite?.ln||1,desc:`<code>scanf</code> read input: <b>"${raw}"</b>`,frames:this._snapFrames(),heap:this._snapHeap(),out:this.output,cs:this._callStack.map(f=>f.name)});
    }
    return read;
  }

  _sprintfFmt(fmt,vals){
    let r='',vi=0,i=0;
    while(i<fmt.length){
      if(fmt[i]==='%'){
        i++;let w='',pr='',sp='';
        while(i<fmt.length&&'-+0 #'.includes(fmt[i]))i++;
        while(i<fmt.length&&/[0-9]/.test(fmt[i]))w+=fmt[i++];
        if(fmt[i]==='.'){i++;while(i<fmt.length&&/[0-9]/.test(fmt[i]))pr+=fmt[i++];}
        while(fmt[i]==='l'||fmt[i]==='h')i++;
        sp=fmt[i++];const v=vals[vi++];
        if(sp==='d'||sp==='i')r+=Math.trunc(Number(v||0)).toString();
        else if(sp==='u')r+=Math.abs(Math.trunc(Number(v||0))).toString();
        else if(sp==='x')r+=(Math.trunc(Number(v||0))>>>0).toString(16);
        else if(sp==='X')r+=(Math.trunc(Number(v||0))>>>0).toString(16).toUpperCase();
        else if(sp==='o')r+=(Math.trunc(Number(v||0))>>>0).toString(8);
        else if(sp==='f')r+=(Number(v||0)).toFixed(pr?parseInt(pr):6);
        else if(sp==='g'||sp==='G')r+=parseFloat((Number(v||0)).toPrecision(pr||6)).toString();
        else if(sp==='e')r+=(Number(v||0)).toExponential(pr?parseInt(pr):6);
        else if(sp==='c')r+=v===undefined?'':String.fromCharCode(Number(v));
        else if(sp==='s'){let s=v===null?'(null)':(Array.isArray(v)?v.filter(c=>c>0).map(c=>String.fromCharCode(c)).join(''):String(v===undefined?'':v));r+=s;}
        else if(sp==='p')r+=v===null?'0x0':String(v);
        else if(sp==='%')r+='%';
        else r+='%'+sp;
        const wNum=parseInt(w);
        if(wNum&&r.length){ }
      } else r+=fmt[i++];
    }
    return r;
  }

  _castVal(v,t){if(t.includes('*'))return v;if(t.includes('int')||t.includes('char'))return Math.trunc(Number(v)||0);if(t.includes('float')||t.includes('double'))return Number(v)||0;return v;}
  _szType(t){if(t.includes('char'))return 1;if(t.includes('short'))return 2;if(t.includes('int')||t.includes('float'))return 4;if(t.includes('double')||t.includes('long'))return 8;if(t.includes('*'))return 8;return 4;}
  _szOf(v){if(Array.isArray(v))return v.length*4;return 4;}
  _fv(v){if(v===null)return'NULL';if(Array.isArray(v))return'['+v.slice(0,6).map(x=>Array.isArray(x)?'['+x.slice(0,4).join(',')+']':x).join(', ')+(v.length>6?'&hellip;':'')+']';if(typeof v==='object')return JSON.stringify(v);return String(v);}

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
  _snapHeap(){const h={};for(const[k,v]of Object.entries(this._heap))h[k]={size:v.size,data:{...v.data}};return h;}
  _addStep(s){if(this.steps.length<800)this.steps.push(s);}
}

let interp = null, curStep = -1, playTimer = null, stdinQ = [], execLine = null;

const root = document.documentElement;
const themeIcon = document.getElementById('theme-icon');
let currentTheme = 'dark';
function applyTheme(t){
  currentTheme = t;
  root.setAttribute('data-theme', t);
  themeIcon.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  cmEditor.setOption('theme', t === 'dark' ? 'one-dark' : 'default');
  setTimeout(()=>cmEditor.refresh(), 50);
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
  foldGutter: false,
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
cmEditor.setValue(SAMPLES.all_topics);
cmEditor.setSize('100%', '100%');

const $ = id => document.getElementById(id);
const runBtn = $('run-btn'), resetBtn = $('reset-btn'), clearBtn = $('clear-btn');
const prevBtn = $('prev-btn'), nextBtn = $('next-btn');
const playBtn = $('play-btn'), pauseBtn = $('pause-btn');
const stepInfo = $('step-info'), speedSlider = $('speed');
const sampleSel = $('sample-sel');
const framesEl = $('frames-container'), heapSec = $('heap-section'), heapBlocks = $('heap-blocks');
const outputArea = $('output-area'), stdinIn = $('stdin-in'), stdinBtn = $('stdin-btn');
const csEl = $('cs-container'), mmEl = $('mm-area');
const walkEl = $('walkthrough');
const sbDot = $('sb-dot'), sbTxt = $('sb-txt'), sbLine = $('sb-line'), sbStep = $('sb-step'), sbFrames = $('sb-frames');

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
});
document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    resizeHandle.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    cmEditor.refresh();
  }
});

stdinBtn.addEventListener('click', sendStdin);
stdinIn.addEventListener('keydown', e => { if (e.key === 'Enter') sendStdin(); });
function sendStdin() {
  const v = stdinIn.value.trim(); if (!v) return;
  stdinQ.push(v);
  if (interp) interp.stdinQueue = stdinQ;
  stdinIn.value = '';
  outputArea.textContent += `[stdin: ${v}]\n`;
}

runBtn.addEventListener('click', runVisualize);
resetBtn.addEventListener('click', resetViz);

function runVisualize() {
  stopPlay();
  const code = cmEditor.getValue().trim();
  if (!code) { showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a C program.'); return; }
  setStatus('running', 'Interpreting…');
  clearOutput();
  try {
    interp = new CInterpreter(code, [...stdinQ]);
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
  clearOutput();
  framesEl.innerHTML = '';
  heapSec.style.display = 'none'; heapBlocks.innerHTML = '';
  csEl.innerHTML = ''; mmEl.innerHTML = '';
  showWalk('', '<b>Welcome to C Visualizer.</b><br>Write any C code in the editor — or pick an example — then click <b>Run &amp; Visualize</b> to step through execution line by line.');
  clearLineHL(); updateCtrl(); setStatus('', 'Ready');
  sbLine.textContent = '—'; sbStep.textContent = '—'; sbFrames.textContent = '0';
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
}

function highlightLine(ln) {
  if (execLine !== null) {
    cmEditor.removeLineClass(execLine - 1, 'background', 'cm-exec-line');
    cmEditor.removeLineClass(execLine - 1, 'gutter', 'cm-exec-gutter');
  }
  if (!ln || ln < 1) { execLine = null; return; }
  execLine = ln;
  cmEditor.addLineClass(ln - 1, 'background', 'cm-exec-line');
  cmEditor.addLineClass(ln - 1, 'gutter', 'cm-exec-gutter');
  cmEditor.scrollIntoView({ line: ln - 1, ch: 0 }, 80);
}
function clearLineHL() {
  if (execLine !== null) {
    cmEditor.removeLineClass(execLine - 1, 'background', 'cm-exec-line');
    cmEditor.removeLineClass(execLine - 1, 'gutter', 'cm-exec-gutter');
    execLine = null;
  }
}

function showWalk(type, html) {
  walkEl.className = 'wt-box' + (type ? ' ' + type : '');
  walkEl.innerHTML = html;
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
      tbl.innerHTML = `<thead><tr><th>Name</th><th class="col-type">Type</th><th>Value</th><th class="col-addr">Address</th></tr></thead>`;
      const tb = document.createElement('tbody');

      for (const [name, v] of entries) {
        const tr = document.createElement('tr');
        const isChanged = chg === name && isActive;
        if (isChanged) tr.classList.add('v-changed');

        const val = v.value;
        const isPtr = v.type && v.type.includes('*') && !Array.isArray(val);
        const isArr = Array.isArray(val);

        let vhtml;
        if (isArr) {
          const is2D = val.length > 0 && Array.isArray(val[0]);
          if (is2D) {
            vhtml = '<div style="display:flex;flex-direction:column;gap:3px">';
            val.forEach((row, ri) => {
              vhtml += `<div class="arr-row">`;
              row.slice(0, 12).forEach((c, ci) => {
                vhtml += `<div class="arr-cell">${c}<span class="arr-idx">${ri},${ci}</span></div>`;
              });
              vhtml += `</div>`;
            });
            vhtml += '</div>';
          } else {
            vhtml = `<div class="arr-row">`;
            val.slice(0, 14).forEach((c, ci) => {
              const d = (v.type && v.type.includes('char') && c > 0)
                ? String.fromCharCode(c)
                : (c === 0 && v.type && v.type.includes('char') ? '\\0' : c);
              vhtml += `<div class="arr-cell">${String(d).replace(/</g,'&lt;')}<span class="arr-idx">${ci}</span></div>`;
            });
            if (val.length > 14) vhtml += `<div class="arr-cell" style="color:var(--text3);border-style:dashed">&hellip;</div>`;
            vhtml += `</div>`;
          }
        } else if (val && typeof val === 'object' && !Array.isArray(val)) {
          vhtml = `<span style="color:var(--text2);font-size:11.5px">{${Object.entries(val).map(([k2,v2])=>`${k2}: ${v2}`).join(', ')}}</span>`;
        } else if (isPtr) {
          vhtml = `<span class="vv vptr"><i class="fa-solid fa-link" style="font-size:10px"></i> ${val || 'NULL'}</span>`;
        } else {
          const d = val === null ? 'NULL' : (typeof val === 'string' ? `"${val}"` : String(val ?? 0));
          vhtml = `<span class="vv${isChanged ? ' vc' : ''}">${d.replace(/</g,'&lt;')}</span>`;
        }

        tr.innerHTML = `
          <td><span class="vn">${name}</span></td>
          <td class="col-type"><span class="vt">${(v.type || '').replace(/</g,'&lt;')}</span></td>
          <td>${vhtml}</td>
          <td class="col-addr"><span class="vaddr">${v.addr || ''}</span></td>`;
        tb.appendChild(tr);
      }
      tbl.appendChild(tb); card.appendChild(tbl);
    }
    framesEl.appendChild(card);
  }
}

function renderHeap(heap) {
  if (!heap || !Object.keys(heap).length) { heapSec.style.display = 'none'; return; }
  heapSec.style.display = '';
  heapBlocks.innerHTML = '';
  for (const [addr, block] of Object.entries(heap)) {
    const d = document.createElement('div'); d.className = 'heap-block';
    const data = Object.entries(block.data).length
      ? Object.entries(block.data).map(([k, v]) => `[${k}]=${v}`).join(', ')
      : 'allocated';
    d.innerHTML = `<i class="fa-solid fa-microchip" style="color:var(--vsc-orange);font-size:11px"></i><span class="h-addr">${addr}</span><span class="h-sz">${block.size} bytes</span><span class="h-data">${data}</span>`;
    heapBlocks.appendChild(d);
  }
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
    d.innerHTML = `<span class="cs-depth">#${stack.length - 1 - i}</span><i class="fa-solid fa-cube" style="color:var(--tok-fn);font-size:10px"></i><span class="cs-fn">${stack[i]}()</span><span class="cs-cur">${i === stack.length - 1 ? '&larr; executing' : ''}</span>`;
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
    cells.push({ addr, name: 'heap', val: `${b.size}B`, cls: 'mm-hp' });
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

function setStatus(type, msg) {
  sbDot.style.color = type === 'ok' ? '#23d18b' : type === 'error' ? '#f48771' : 'rgba(255,255,255,.7)';
  sbTxt.textContent = msg;
}

applyTheme('dark');
resetViz();

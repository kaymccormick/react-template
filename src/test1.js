import '@babel/polyfill';

function *foo() {
    yield "poop";
}

const it = foo();
console.log(it.next());
console.log(it.next());

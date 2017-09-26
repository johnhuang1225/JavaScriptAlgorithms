function fibonacci(position) {
  if (position < 3) {
    return 1;
  } else {
    return fibonacci(position-1) + fibonacci(position-2);
  }
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
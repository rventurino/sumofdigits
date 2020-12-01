function digital_root(n) {
  if (n == 0) return n;

  return (n % 10) + digital_root(Math.floor(n / 10));
}

console.log(digital_root(116));

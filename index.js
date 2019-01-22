const fibonacci = (() => {
	const seq = [];
	return (n, num) => {
		if (n === num) return seq;
		seq.length < 2 ? seq.push(n) : seq.push(seq[n - 2] + seq[n - 1]);
	};
})();

const getSequence = (num, i = 0) => {
	let r;
	if (r = fibonacci(i, num)) return r;
	return getSequence(num, ++i);
}
console.log(getSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
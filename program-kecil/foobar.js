const fooBar = () => {
	let result = [];

	const isPrime = (n) => {
		if (n <= 1) {
			return false;
		}

		for (let i = 2; i * i <= n; i++) {
			if (n % i === 0) {
				return false;
			}
		}

		return true;
	};

	for (let i = 100; i > 0; i--) {
		if (!isPrime(i)) {
			if (i % 5 === 0 && i % 3 === 0) {
				result.push("FooBar");
			} else if (i % 5 === 0) {
				result.push("Bar");
			} else if (i % 3 === 0) {
				result.push("Foo");
			} else {
				result.push(i);
			}
		}
	}
    


	return result.join(', ');
};

console.log(fooBar());

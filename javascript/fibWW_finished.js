onmessage = callFib;

function callFib(event) {
	var input = event.data;
	var result = fib(input);
	postMessage(result);
}

function fib(n) {
	var s = 0;
	if(n == 0) return(s);
	if(n == 1) {
		s += 1;
		return(s);
	} else {
		return(fib(n - 1) + fib(n - 2));
   }
}
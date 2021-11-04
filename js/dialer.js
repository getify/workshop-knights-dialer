export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};


// ****************************

var nearbyKeys = [
	[4,6],
	[6,8],
	[7,9],
	[4,8],
	[3,9,0],
	[],
	[1,7,0],
	[2,6],
	[1,3],
	[2,4]
];

function reachableKeys(startingDigit) {
	return nearbyKeys[startingDigit];
}

function countPaths(startingDigit,hopCount) {
	if (hopCount == 0) return 1;
	// set up an array holding the cumulative counts for paths,
	// starting with each of the 10 digits; initialized to 1 for
	// each digit
	var priorPathCounts = Array(10).fill(1);
	for (let hops = 0; hops < hopCount; hops++) {
		// counts for each digit for just the next hop
		let pathCounts = Array(10).fill(0);
		// process all 10 digits
		for (let digit = 0; digit <= 9; digit++) {
			// but only update the counts for each of those
			// digits' nearby keys (i.e., valid moves)
			for (let n of nearbyKeys[digit]) {
				pathCounts[digit] += priorPathCounts[n];
			}
		}
		// preserve the running counts for the next iteration (if any)
		priorPathCounts = pathCounts;
	}
	// return only the count for the requested digit (even though
	// all counts were computed)
	return priorPathCounts[startingDigit];
}

function listAcyclicPaths(startingDigit) {
	var paths = [];
	var nextHops = nearbyKeys[startingDigit];
	for (let nextHop of nextHops) {
		// init a new path
		let path = [startingDigit,nextHop];
		// follow the path as far as possible
		followPath(path,paths);
	}
	return paths;
}

function followPath(path,paths) {
	var nextHops = nearbyKeys[path[path.length-1]];
	var pathForwardFound = false;
	for (let nextHop of nextHops) {
		// is this next key NOT already in the collected
		// path?
		if (!path.includes(nextHop)) {
			pathForwardFound = true;
			let nextPath = [...path,nextHop];
			// recursively keep following the path
			// as far as possible
			followPath(nextPath,paths);
		}
	}
	// no forward paths found?
	if (!pathForwardFound) {
		// this path is complete, so save it
		paths.push(path);
	}
}

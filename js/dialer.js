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
	var pathCount = 0;
	for (let digit of nearbyKeys[startingDigit]) {
		// recursively count all the paths from the
		// next digit, but with one fewer hops in length
		pathCount += countPaths(digit,hopCount-1);
	}
	return pathCount;
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

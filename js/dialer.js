export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};

countPaths = memoize(countPaths)

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
	// precompute data if you can before starting writing algorithm
	return nearbyKeys[startingDigit];
}

function countPaths(startingDigit,hopCount) {
	// given the digit/key to start from and
	// the number of hops to take, return a count
	// of all the possible paths that could be
	// traversed
	if (hopCount == 0) return 1
	var pathCount = 0

	for (let digit of nearbyKeys[startingDigit]) {
		pathCount += countPaths(digit, hopCount - 1)
	}
	return pathCount
}

function listAcyclicPaths(startingDigit) {
	// given the digit/key to start from,
	// return a list of the distinct acyclic
	// paths that are possible to traverse
	//
	// e.g. [
	//   [4, 3, 8, 1, 6, 7, 2, 9],
	//   [4, 3, 8, 1, 6, 0],
	//   ...
	// ]
	var paths = []
	var nextHops = nearbyKeys[startingDigit]
	for (let nextHop of nextHops) {
		let path = [ startingDigit, nextHop ]
		followPath(path, paths)
	}

	return paths
}

function followPath(path, paths) {
	var nextHops = nearbyKeys[path[path.length - 1]]
	var pathForwardFound = false

	for( let nextHop of nextHops) {
		if (!path.includes(nextHop)) {
			pathForwardFound = true
			let nextPath = [ ...path, nextHop]
			followPath(nextPath, paths)
		}
	}

	if (!pathForwardFound) {
		paths.push(path)
	}
}

function memoize(fn) {
	var cache = {}
	return function memoized(start, length){
		if (!cache[`${start}:${length}`]){
			cache[`${start}:${length}`] = fn(start, length)
		}
		return cache[`${start}:${length}`]
	}
}
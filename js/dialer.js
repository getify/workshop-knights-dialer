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
	// TODO: given the digit/key to start from,
	// return a list of the distinct acyclic
	// paths that are possible to traverse
	//
	// e.g. [
	//   [4, 3, 8, 1, 6, 7, 2, 9],
	//   [4, 3, 8, 1, 6, 0],
	//   ...
	// ]
	return []
}

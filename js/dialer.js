export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};


// ****************************

function reachableKeys(startingDigit) {
	// TODO: return which digits a Knight's move
	// can hop to from a given starting digit/key
	//
	// e.g. 3 -> [ 4, 8 ]
	//      4 -> [ 3, 9, 0 ]
	//      5 -> []
	return [];
}

function countPaths(startingDigit,hopCount) {
	// TODO: given the digit/key to start from and
	// the number of hops to take, return a count
	// of all the possible paths that could be
	// traversed
	return 0;
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
	return [];
}

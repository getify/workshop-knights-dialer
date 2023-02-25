export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};


// ****************************

var dialpad = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[ , 0,  ]
]

function reachableKeys(startingDigit) {
	// return which digits a Knight's move
	// can hop to from a given starting digit/key
	//
	// e.g. 3 -> [ 4, 8 ]
	//      4 -> [ 3, 9, 0 ]
	//      5 -> []

	var nearbyKeys = []

	for (let [ rowIdx, row] of dialpad.entries()) {
		let  colIdx = row.indexOf(startingDigit)
		if (colIdx != -1) {
			for (let rowMove of [-2, -1, 1, 2]) {
				for (let colMove of  [-2, -1, 1, 2]) {
					if (Math.abs(rowMove) != Math.abs(colMove)) {
						if (
							rowIdx + rowMove >= 0 &&
							rowIdx + rowMove <= 3 &&
							colIdx + colMove >= 0 &&
							colIdx + colMove <= 3 &&
							dialpad[rowIdx + rowMove][colIdx + colMove] != undefined
						){
							nearbyKeys.push(dialpad[rowIdx + rowMove][colIdx + colMove])
						}
					}
				}
			}
		}
	}
	return nearbyKeys
}

function countPaths(startingDigit,hopCount) {
	// TODO: given the digit/key to start from and
	// the number of hops to take, return a count
	// of all the possible paths that could be
	// traversed
	return 0
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

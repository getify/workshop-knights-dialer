export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};


// ****************************

var dialpad = [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ],
	[  , 0,   ]
];

function reachableKeys(startingDigit) {
	var nearbyKeys = [];

	for (let [ rowIdx, row ] of dialpad.entries()) {
		let colIdx = row.indexOf(startingDigit);
		if (colIdx != -1) {
			// check the possible knight moves
			for (let rowMove of [ -2, -1, 1, 2 ]) {
				for (let colMove of [ -2, -1, 1, 2 ]) {
					// only consult the combinations where the
					// row/col move magnitudes are different
					//
					// e.g., no moves of (2,2) or (2,-2),
					// only moves like (2,1) or (-1,2)
					if (Math.abs(rowMove) != Math.abs(colMove)) {
						// valid key on the dialpad?
						if (
							rowIdx + rowMove >= 0 &&
							rowIdx + rowMove <= 3 &&
							colIdx + colMove >= 0 &&
							colIdx + colMove <= 2 &&
							dialpad[rowIdx + rowMove][colIdx + colMove] != undefined
						) {
							nearbyKeys.push(
								dialpad[rowIdx + rowMove][colIdx + colMove]
							);
						}
					}
				}
			}
		}
	}

	return nearbyKeys;
}

function countPaths(startingDigit,hopCount) {
	if (hopCount == 0) return 1;
	var pathCount = 0;
	for (let digit of reachableKeys(startingDigit)) {
		// recursively count all the paths from the
		// next digit, but with one fewer hops in length
		pathCount += countPaths(digit,hopCount-1);
	}
	return pathCount;
}

function listAcyclicPaths(startingDigit) {
	var paths = [];
	var nextHops = reachableKeys(startingDigit);
	for (let nextHop of nextHops) {
		// init a new path
		let path = [startingDigit,nextHop];
		// follow the path as far as possible
		followPath(path,paths);
	}
	return paths;
}

function followPath(path,paths) {
	var nextHops = reachableKeys(path[path.length-1]);
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

# Knight's Dialer

This workshop project explores the algorithmic complexities (speed and memory) of counting how many distinct paths can be taken on a standard 10-digit dialpad if the move (aka "hop") from one key to the next must be like a Knight on a chessboard (two spaces in one direction, and one space in the perpendicular direction).

Here's a standard 10-digit dialpad:

```
1 2 3
4 5 6
7 8 9
  0
```

If you start from the `4` key, for example, you can hop (like a chess Knight) to the `3`, `9`, or `0` keys, as illustrated here (the `@` marks the current position, and the `*`s mark the possible keys you can hop to from that position).

```
1 2 *
@ 5 6
7 8 *
  *
```

Similarly, if you start from the `3` key, you can only hop to the `4` or `8` keys. But if you start from the `5` key, you can't hop anywhere, nor can the `5` key be hopped to from any other key.

If you hop from the `1` key to the `6` key, then hop back to the `1` key, and then hop to the `8` key, you've moved a total of 3 hops. In other words, a path can back-track and/or cycle through repeat key(s) any number of times.

Two questions this workshop will explore:

1. Count how many distinct paths can be traversed when starting from a specific key and moving a certain number of hops?

2. If we disallow cycles (no repeat keys, back-tracking, etc), what distinct paths (and how many hops are they comprised of?) can you take from a given starting key?

## Workshop Instructions

1. Check out the `start-here` branch.

2. Consult the `app.js` module for the app logic already implemented:

    * The "Hops to take" input specifies a number (1 or more) for how many hops to allow from the starting digit.

    * When you hover a button on the dialpad, it highlights in orange. It *should* (one of your tasks!) also highlight the other key(s) you can hop to as a Knight's move.

    * Clicking a dialpad button (re-)computes the counts and acyclic path lists from that starting digit.

    * The timings are reported for both the count computation and the acyclic paths listing.

3. Now consult the `dialer.js` module for the algorithm logic to be implemented (look for the `TODO` comments):

    * The `reachableKeys(..)` function takes a key digit (number), and returns an array with the numeric digits (if any) of the keys you can reach from that key via a valid Knight's move.

    * The `countPaths(..)` function takes a key digit (number) to start from, and a number for how many hops, and returns a count that represents all the distinct paths (cycles and back-tracking allowed!) that are possible.

    * The `listAcyclicPaths(..)` function takes a key digit (number) to start from, and returns a list of the distinct acyclic paths (as sub-arrays of number digits) that are possible.

4. When you're ready, or if you get stuck in your own implementation, check out the `option-1`, `option-2`, `option-3`, and `option-4` branches and compare your solution to the ones provided.

## Extra Credit

Develop a test plan and suite of tests to verify the `Dialer` module's functionality.

## Additional Reading

Here's a really interesting/detailed blog post about the Knight's Dialer problem, as analyzed by a Google employee who used this question quite often in the past for tech interviews:

https://medium.com/hackernoon/google-interview-questions-deconstructed-the-knights-dialer-f780d516f029

## Running the App

The app should be run in a local web server and accessed in a browser such as at `http://localhost:8080` (or whatever port you prefer).

If you have any recent node/npm installed on your system, you can switch into the workshop project directory, and run a command like this:

```cmd
npx http-server ./ -p 8080
```

That should start up a simple static file server in that current working directory and bind it to localhost on the port number as specified.

## License

All code and documentation are (c) 2021 Kyle Simpson and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).

// Bonfire: Return Largest Numbers in Arrays
// Author: @potatoclock
// Challenge: http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function largestOfFour(arr) {
  var agentHolder = 0;
  var cake = new Array();
  for (var x=0; x<arr.length; x++)
    {
      for (var y=0; y<arr[x].length; y++)
        {
          if ( agentHolder<arr[x][y])
            {
              agentHolder = arr[x][y];
            }
        }
      cake.unshift(agentHolder);
      agentHolder = 0;
    }
  return cake.reverse();
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

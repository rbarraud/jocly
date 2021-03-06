/*
 *
 * Copyright (c) 2012 - Jocly - www.jocly.com
 * 
 * This file is part of the Jocly game platform and cannot be used outside of this context without the written permission of Jocly.
 * 
 */

Model.Game.InitGameExtra = function() {
}

Model.Game.BuildGraphCoord = function() {

	/*
	 * Each of the 17 positions on the board
	 * Directions: 0=right, 1=top, 2=left, 3=bottom
	 * this.g.Graph[position][direction] = new position to the direction or null if no position toward that direction
	 */
	this.g.Graph=[
	              [1,6,null,null], // 0
	              [2,4,0,null], // 1
	              [null,9,1,null], // 2
	              [4,7,null,null], // 3
	              [5,16,3,1], // 4
	              [null,8,4,null], // 5
	              [7,13,null,0], // 6
	              [16,10,6,3], // 7
	              [9,12,16,5], // 8
	              [null,15,8,2], // 9
	              [11,null,null,7], // 10
	              [12,14,10,16], // 11
	              [null,null,11,8], // 12
	              [14,null,null,6], // 13
	              [15,null,13,11], // 14
	              [null,null,14,9], // 15
	              [8,11,7,4], // 16
	];
	/*
	 * Each of the 17 positions on the board
	 * this.g.Coord[position]=[row,column]
	 */
	this.g.Coord=[
	              [0,0], // 0
	              [0,2], // 1
	              [0,4], // 2
	              [1,1], // 3
	              [1,2], // 4
	              [1,3], // 5
	              [2,0], // 6
	              [2,1], // 7
	              [2,3], // 8
	              [2,4], // 9
	              [3,1], // 10
	              [3,2], // 11
	              [3,3], //12
	              [4,0], // 13
	              [4,2], // 14
	              [4,4], // 15
	              [2,2], // 16
	];
	
	/*
	 * All groups of 3 aligned positions
	 */
	this.g.Triplets=[
	                 [0,1,2],
	                 [3,4,5],
	                 [10,11,12],
	                 [13,14,15],
	                 [0,6,13],
	                 [3,7,10],
	                 [5,8,12],
	                 [2,9,15],
	                 [6,7,16],
	                 [7,16,8],
	                 [16,8,9],
	                 [1,4,16],
	                 [4,16,11],
	                 [16,11,14],
    ];
	
}

Model.Board.StaticGenerateMoves = function(aGame) {
	if(aGame.mFullPlayedMoves.length==0) { // very first move: pick center
		return [{f:-1,t:16,c:-1}];
	}
	return null;
}

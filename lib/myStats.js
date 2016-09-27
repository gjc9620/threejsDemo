/**
 * Created by gujiacheng on 9/24/16.
 */
function initStats() {
	var stats = new Stats();
	stats.setMode(0); // 0: fps, 1: ms
	// Align top-left
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.getElementById("Stats-output").appendChild(stats.domElement);
	return stats;
}
var stats = initStats();
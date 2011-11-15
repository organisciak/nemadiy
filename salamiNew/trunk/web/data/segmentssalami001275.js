var data = [
[{o: 0.186, f: 18.833, l: "A", a: 0},
{o: 18.833, f: 37.458, l: "A", a: 1},
{o: 37.458, f: 56.103, l: "B", a: 0},
{o: 56.103, f: 74.751, l: "C", a: 1},
{o: 74.751, f: 93.393, l: "D", a: 0},
{o: 93.393, f: 111.991, l: "A", a: 1},
{o: 111.991, f: 130.661, l: "B", a: 0},
{o: 130.661, f: 149.318, l: "C", a: 1},
{o: 149.318, f: 167.979, l: "D", a: 0},
{o: 167.979, f: 186.592, l: "A'", a: 1},
{o: 186.592, f: 205.124, l: "D", a: 0},
{o: 205.124, f: 223.841, l: "C", a: 1},
{o: 223.841, f: 239.647, l: "C", a: 0}],
[{o: 0.116, f: 9.732, l: "B", a: 0},
{o: 9.732, f: 18.18, l: "A", a: 1},
{o: 18.18, f: 37.396, l: "A", a: 0},
{o: 37.396, f: 49.048, l: "A", a: 1},
{o: 49.048, f: 56.036, l: "A", a: 0},
{o: 56.036, f: 73.224, l: "A", a: 1},
{o: 73.224, f: 84, l: "A", a: 0},
{o: 84, f: 90.996, l: "A", a: 1},
{o: 90.996, f: 102.932, l: "A", a: 0},
{o: 102.932, f: 111.96, l: "A", a: 1},
{o: 111.96, f: 123.024, l: "A", a: 0},
{o: 123.024, f: 130.596, l: "A", a: 1},
{o: 130.596, f: 148.644, l: "A", a: 0},
{o: 148.644, f: 167.304, l: "A", a: 1},
{o: 167.304, f: 177.784, l: "A", a: 0},
{o: 177.784, f: 185.632, l: "C", a: 1},
{o: 185.632, f: 198.176, l: "A", a: 0},
{o: 198.176, f: 206.62, l: "A", a: 1},
{o: 206.62, f: 225.548, l: "A", a: 0},
{o: 225.548, f: 237.216, l: "D", a: 1}],
[{o: 0.116, f: 9.732, l: "C", a: 0},
{o: 9.732, f: 18.18, l: "E", a: 1},
{o: 18.18, f: 37.396, l: "B", a: 0},
{o: 37.396, f: 49.048, l: "B", a: 1},
{o: 49.048, f: 56.036, l: "F", a: 0},
{o: 56.036, f: 73.224, l: "A", a: 1},
{o: 73.224, f: 84, l: "A", a: 0},
{o: 84, f: 90.996, l: "G", a: 1},
{o: 90.996, f: 102.932, l: "B", a: 0},
{o: 102.932, f: 111.96, l: "B", a: 1},
{o: 111.96, f: 123.024, l: "B", a: 0},
{o: 123.024, f: 130.596, l: "A", a: 1},
{o: 130.596, f: 148.644, l: "A", a: 0},
{o: 148.644, f: 167.304, l: "A", a: 1},
{o: 167.304, f: 177.784, l: "H", a: 0},
{o: 177.784, f: 185.632, l: "I", a: 1},
{o: 185.632, f: 198.176, l: "D", a: 0},
{o: 198.176, f: 206.62, l: "D", a: 1},
{o: 206.62, f: 225.548, l: "A", a: 0},
{o: 225.548, f: 237.216, l: "J", a: 1}],
[{o: 0.707, f: 9.16, l: "7", a: 0},
{o: 9.16, f: 36.52, l: "3", a: 1},
{o: 36.52, f: 52.84, l: "4", a: 0},
{o: 52.84, f: 71.48, l: "1", a: 1},
{o: 71.48, f: 93.613, l: "2", a: 0},
{o: 93.613, f: 111.08, l: "3", a: 1},
{o: 111.08, f: 130.307, l: "4", a: 0},
{o: 130.307, f: 147.8, l: "1", a: 1},
{o: 147.8, f: 165.853, l: "2", a: 0},
{o: 165.853, f: 176.92, l: "5", a: 1},
{o: 176.92, f: 185.667, l: "6", a: 0},
{o: 185.667, f: 205.453, l: "2", a: 1},
{o: 205.453, f: 233.427, l: "1", a: 0},
{o: 233.427, f: 239.507, l: "8", a: 1}],
[{o: 0, f: 26.82, l: "a", a: 0},
{o: 26.82, f: 78.97, l: "b", a: 1},
{o: 78.97, f: 97.595, l: "c", a: 0},
{o: 97.595, f: 153.47, l: "b", a: 1},
{o: 153.47, f: 172.095, l: "c", a: 0},
{o: 172.095, f: 186.25, l: "d", a: 1},
{o: 186.25, f: 199.66, l: "c", a: 0},
{o: 199.66, f: 239.145, l: "e", a: 1}],
[{o: 0, f: 0.43, l: "n1", a: 0},
{o: 0.43, f: 9.752, l: "A", a: 1},
{o: 9.752, f: 18.785, l: "A", a: 0},
{o: 18.785, f: 28.108, l: "D", a: 1},
{o: 28.108, f: 37.709, l: "n4", a: 0},
{o: 37.709, f: 56.366, l: "C", a: 1},
{o: 56.366, f: 65.678, l: "A", a: 0},
{o: 65.678, f: 74.699, l: "A", a: 1},
{o: 74.699, f: 93.344, l: "B", a: 0},
{o: 93.344, f: 102.667, l: "D", a: 1},
{o: 102.667, f: 112.268, l: "D", a: 0},
{o: 112.268, f: 130.914, l: "C", a: 1},
{o: 130.914, f: 140.237, l: "A", a: 0},
{o: 140.237, f: 149.269, l: "A", a: 1},
{o: 149.269, f: 168.205, l: "B", a: 0},
{o: 168.205, f: 177.517, l: "A", a: 1},
{o: 177.517, f: 186.538, l: "A", a: 0},
{o: 186.538, f: 205.473, l: "B", a: 1},
{o: 205.473, f: 214.796, l: "A", a: 0},
{o: 214.796, f: 224.119, l: "A", a: 1},
{o: 224.119, f: 232.281, l: "A", a: 0},
{o: 232.281, f: 239.305, l: "n16", a: 1}],
[{o: 0, f: 0.116, l: "F", a: 0},
{o: 0.116, f: 17.308, l: "E", a: 1},
{o: 17.308, f: 40.6, l: "A", a: 0},
{o: 40.6, f: 56.036, l: "D", a: 1},
{o: 56.036, f: 75.556, l: "B", a: 0},
{o: 75.556, f: 93.028, l: "C", a: 1},
{o: 93.028, f: 115.16, l: "A", a: 0},
{o: 115.16, f: 130.596, l: "D", a: 1},
{o: 130.596, f: 150.112, l: "B", a: 0},
{o: 150.112, f: 167.592, l: "C", a: 1},
{o: 167.592, f: 187.392, l: "B", a: 0},
{o: 187.392, f: 204.86, l: "C", a: 1},
{o: 204.86, f: 237.216, l: "B", a: 0},
{o: 237.216, f: 239.597, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001275.ogg";

var artist = "Michael Jackson";

var track = "who is it";

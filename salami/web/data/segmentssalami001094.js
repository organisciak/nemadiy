var data = [
[{o: 0.186, f: 16.21, l: "A", a: 0},
{o: 16.21, f: 32.237, l: "B", a: 1},
{o: 32.237, f: 48.222, l: "E", a: 0},
{o: 48.222, f: 64.233, l: "B", a: 1},
{o: 64.233, f: 80.248, l: "E", a: 0},
{o: 80.248, f: 112.208, l: "C", a: 1},
{o: 112.208, f: 152.28, l: "D", a: 0},
{o: 152.28, f: 168.254, l: "B", a: 1},
{o: 168.254, f: 184.248, l: "E", a: 0},
{o: 184.248, f: 200.225, l: "E", a: 1},
{o: 200.225, f: 232.232, l: "C", a: 0},
{o: 232.232, f: 287.132, l: "D", a: 1}],
[{o: 0.188, f: 15.192, l: "B", a: 0},
{o: 15.192, f: 31.204, l: "B", a: 1},
{o: 31.204, f: 45.688, l: "B", a: 0},
{o: 45.688, f: 62.188, l: "B", a: 1},
{o: 62.188, f: 86.192, l: "B", a: 0},
{o: 86.192, f: 112.7, l: "B", a: 1},
{o: 112.7, f: 143.2, l: "B", a: 0},
{o: 143.2, f: 171.2, l: "B", a: 1},
{o: 171.2, f: 181.188, l: "C", a: 0},
{o: 181.188, f: 205.684, l: "B", a: 1},
{o: 205.684, f: 233.188, l: "B", a: 0},
{o: 233.188, f: 254.692, l: "A", a: 1},
{o: 254.692, f: 277.192, l: "A", a: 0},
{o: 277.192, f: 286.196, l: "D", a: 1}],
[{o: 0.188, f: 15.192, l: "B", a: 0},
{o: 15.192, f: 31.204, l: "C", a: 1},
{o: 31.204, f: 45.688, l: "A", a: 0},
{o: 45.688, f: 62.188, l: "A", a: 1},
{o: 62.188, f: 86.192, l: "A", a: 0},
{o: 86.192, f: 112.7, l: "A", a: 1},
{o: 112.7, f: 143.2, l: "D", a: 0},
{o: 143.2, f: 171.2, l: "A", a: 1},
{o: 171.2, f: 181.188, l: "E", a: 0},
{o: 181.188, f: 205.684, l: "A", a: 1},
{o: 205.684, f: 233.188, l: "A", a: 0},
{o: 233.188, f: 254.692, l: "F", a: 1},
{o: 254.692, f: 277.192, l: "G", a: 0},
{o: 277.192, f: 286.196, l: "H", a: 1}],
[{o: 0.707, f: 15.453, l: "3", a: 0},
{o: 15.453, f: 55.44, l: "1", a: 1},
{o: 55.44, f: 59.947, l: "8", a: 0},
{o: 59.947, f: 78.453, l: "1", a: 1},
{o: 78.453, f: 112.453, l: "2", a: 0},
{o: 112.453, f: 119.44, l: "4", a: 1},
{o: 119.44, f: 150.453, l: "3", a: 0},
{o: 150.453, f: 157.947, l: "1", a: 1},
{o: 157.947, f: 163.44, l: "5", a: 0},
{o: 163.44, f: 175.947, l: "1", a: 1},
{o: 175.947, f: 198.453, l: "5", a: 0},
{o: 198.453, f: 231.947, l: "2", a: 1},
{o: 231.947, f: 268.453, l: "4", a: 0},
{o: 268.453, f: 281.44, l: "6", a: 1},
{o: 281.44, f: 286.227, l: "7", a: 0}],
[{o: 0, f: 12.665, l: "a", a: 0},
{o: 12.665, f: 45.445, l: "b", a: 1},
{o: 45.445, f: 77.48, l: "b", a: 0},
{o: 77.48, f: 146.765, l: "c", a: 1},
{o: 146.765, f: 179.545, l: "b", a: 0},
{o: 179.545, f: 211.58, l: "b", a: 1},
{o: 211.58, f: 286.825, l: "c", a: 0}],
[{o: 0, f: 5.224, l: "n1", a: 0},
{o: 5.224, f: 21.223, l: "A", a: 1},
{o: 21.223, f: 28.224, l: "n2", a: 0},
{o: 28.224, f: 44.222, l: "B", a: 1},
{o: 44.222, f: 60.221, l: "n3", a: 0},
{o: 60.221, f: 77.23, l: "B", a: 1},
{o: 77.23, f: 93.228, l: "A", a: 0},
{o: 93.228, f: 109.227, l: "A", a: 1},
{o: 109.227, f: 164.223, l: "n5", a: 0},
{o: 164.223, f: 180.222, l: "B", a: 1},
{o: 180.222, f: 197.219, l: "n6", a: 0},
{o: 197.219, f: 213.217, l: "A", a: 1},
{o: 213.217, f: 229.227, l: "A", a: 0},
{o: 229.227, f: 237.227, l: "n7", a: 1},
{o: 237.227, f: 253.225, l: "A", a: 0},
{o: 253.225, f: 261.224, l: "n8", a: 1},
{o: 261.224, f: 277.223, l: "A", a: 0},
{o: 277.223, f: 286.859, l: "n9", a: 1}],
[{o: 0, f: 0.06, l: "D", a: 0},
{o: 0.06, f: 16.192, l: "B", a: 1},
{o: 16.192, f: 61.436, l: "C", a: 0},
{o: 61.436, f: 156.192, l: "B", a: 1},
{o: 156.192, f: 181.192, l: "C", a: 0},
{o: 181.192, f: 284.696, l: "B", a: 1},
{o: 284.696, f: 287.087, l: "D", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001094.ogg";

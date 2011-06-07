var data = [
[{o: 0.087, f: 17.839, l: "A", a: 0},
{o: 17.839, f: 52.958, l: "B", a: 1},
{o: 52.958, f: 70.402, l: "C", a: 0},
{o: 70.402, f: 105.198, l: "B", a: 1},
{o: 105.198, f: 122.716, l: "C", a: 0},
{o: 122.716, f: 139.99, l: "A", a: 1},
{o: 139.99, f: 174.488, l: "B", a: 0},
{o: 174.488, f: 213.581, l: "C", a: 1},
{o: 213.581, f: 215.494, l: "Z", a: 0}],
[{o: 0.024, f: 9.868, l: "B", a: 0},
{o: 9.868, f: 17.78, l: "B", a: 1},
{o: 17.78, f: 27.936, l: "B", a: 0},
{o: 27.936, f: 37.324, l: "B", a: 1},
{o: 37.324, f: 48.764, l: "B", a: 0},
{o: 48.764, f: 60.444, l: "B", a: 1},
{o: 60.444, f: 71.984, l: "B", a: 0},
{o: 71.984, f: 79.056, l: "B", a: 1},
{o: 79.056, f: 93.18, l: "B", a: 0},
{o: 93.18, f: 103.224, l: "B", a: 1},
{o: 103.224, f: 119.328, l: "B", a: 0},
{o: 119.328, f: 132.06, l: "D", a: 1},
{o: 132.06, f: 139.6, l: "D", a: 0},
{o: 139.6, f: 149.604, l: "B", a: 1},
{o: 149.604, f: 157.956, l: "B", a: 0},
{o: 157.956, f: 174.116, l: "A", a: 1},
{o: 174.116, f: 181.096, l: "B", a: 0},
{o: 181.096, f: 194.028, l: "B", a: 1},
{o: 194.028, f: 209.396, l: "C", a: 0},
{o: 209.396, f: 215.32, l: "E", a: 1}],
[{o: 0.024, f: 9.868, l: "B", a: 0},
{o: 9.868, f: 17.78, l: "B", a: 1},
{o: 17.78, f: 27.936, l: "F", a: 0},
{o: 27.936, f: 37.324, l: "E", a: 1},
{o: 37.324, f: 48.764, l: "G", a: 0},
{o: 48.764, f: 60.444, l: "A", a: 1},
{o: 60.444, f: 71.984, l: "A", a: 0},
{o: 71.984, f: 79.056, l: "E", a: 1},
{o: 79.056, f: 93.18, l: "C", a: 0},
{o: 93.18, f: 103.224, l: "C", a: 1},
{o: 103.224, f: 119.328, l: "A", a: 0},
{o: 119.328, f: 132.06, l: "D", a: 1},
{o: 132.06, f: 139.6, l: "D", a: 0},
{o: 139.6, f: 149.604, l: "C", a: 1},
{o: 149.604, f: 157.956, l: "H", a: 0},
{o: 157.956, f: 174.116, l: "I", a: 1},
{o: 174.116, f: 181.096, l: "A", a: 0},
{o: 181.096, f: 194.028, l: "A", a: 1},
{o: 194.028, f: 209.396, l: "J", a: 0},
{o: 209.396, f: 215.32, l: "K", a: 1}],
[{o: 0.6, f: 16.76, l: "3", a: 0},
{o: 16.76, f: 33.24, l: "4", a: 1},
{o: 33.24, f: 38.76, l: "5", a: 0},
{o: 38.76, f: 51.507, l: "2", a: 1},
{o: 51.507, f: 69.853, l: "1", a: 0},
{o: 69.853, f: 84.52, l: "4", a: 1},
{o: 84.52, f: 91.067, l: "5", a: 0},
{o: 91.067, f: 103.773, l: "2", a: 1},
{o: 103.773, f: 119.907, l: "1", a: 0},
{o: 119.907, f: 139.347, l: "3", a: 1},
{o: 139.347, f: 146.947, l: "8", a: 0},
{o: 146.947, f: 159.853, l: "6", a: 1},
{o: 159.853, f: 173.893, l: "2", a: 0},
{o: 173.893, f: 208.12, l: "1", a: 1},
{o: 208.12, f: 215.267, l: "7", a: 0}],
[{o: 0, f: 17.88, l: "a", a: 0},
{o: 17.88, f: 70.775, l: "b", a: 1},
{o: 70.775, f: 122.18, l: "b", a: 0},
{o: 122.18, f: 140.06, l: "a", a: 1},
{o: 140.06, f: 192.955, l: "b", a: 0},
{o: 192.955, f: 214.56, l: "c", a: 1}],
[{o: 0, f: 6.049, l: "n1", a: 0},
{o: 6.049, f: 14.849, l: "B", a: 1},
{o: 14.849, f: 22.454, l: "B", a: 0},
{o: 22.454, f: 32.415, l: "n3", a: 1},
{o: 32.415, f: 67.396, l: "A", a: 0},
{o: 67.396, f: 74.989, l: "B", a: 1},
{o: 74.989, f: 84.776, l: "n4", a: 0},
{o: 84.776, f: 119.618, l: "A", a: 1},
{o: 119.618, f: 128.313, l: "B", a: 0},
{o: 128.313, f: 136.963, l: "B", a: 1},
{o: 136.963, f: 145.589, l: "B", a: 0},
{o: 145.589, f: 154.239, l: "B", a: 1},
{o: 154.239, f: 188.72, l: "A", a: 0},
{o: 188.72, f: 205.334, l: "n9", a: 1},
{o: 205.334, f: 215.156, l: "B", a: 0}],
[{o: 0, f: 0.024, l: "F", a: 0},
{o: 0.024, f: 32.932, l: "E", a: 1},
{o: 32.932, f: 47.948, l: "C", a: 0},
{o: 47.948, f: 69.008, l: "A", a: 1},
{o: 69.008, f: 85.296, l: "E", a: 0},
{o: 85.296, f: 100.216, l: "C", a: 1},
{o: 100.216, f: 129.9, l: "A", a: 0},
{o: 129.9, f: 154.212, l: "E", a: 1},
{o: 154.212, f: 169.264, l: "C", a: 0},
{o: 169.264, f: 206.932, l: "A", a: 1},
{o: 206.932, f: 215.32, l: "D", a: 0},
{o: 215.32, f: 215.373, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000123.ogg";

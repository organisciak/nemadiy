var data = [
[{o: 0.232, f: 7.6, l: "N", a: 0},
{o: 7.6, f: 39.079, l: "A", a: 1},
{o: 39.079, f: 48.144, l: "N", a: 0},
{o: 48.144, f: 79.851, l: "A", a: 1},
{o: 79.851, f: 88.739, l: "N", a: 0},
{o: 88.739, f: 127.014, l: "A", a: 1}],
[{o: 0.104, f: 9.388, l: "A", a: 0},
{o: 9.388, f: 18.524, l: "A", a: 1},
{o: 18.524, f: 24.248, l: "A", a: 0},
{o: 24.248, f: 33.748, l: "A", a: 1},
{o: 33.748, f: 39.112, l: "A", a: 0},
{o: 39.112, f: 48.104, l: "A", a: 1},
{o: 48.104, f: 56.14, l: "A", a: 0},
{o: 56.14, f: 65.376, l: "A", a: 1},
{o: 65.376, f: 74.328, l: "A", a: 0},
{o: 74.328, f: 80, l: "A", a: 1},
{o: 80, f: 88.708, l: "A", a: 0},
{o: 88.708, f: 97.9, l: "C", a: 1},
{o: 97.9, f: 105.076, l: "B", a: 0},
{o: 105.076, f: 111.64, l: "D", a: 1},
{o: 111.64, f: 118.972, l: "B", a: 0},
{o: 118.972, f: 126.156, l: "E", a: 1}],
[{o: 0.104, f: 9.388, l: "E", a: 0},
{o: 9.388, f: 18.524, l: "D", a: 1},
{o: 18.524, f: 24.248, l: "D", a: 0},
{o: 24.248, f: 33.748, l: "C", a: 1},
{o: 33.748, f: 39.112, l: "F", a: 0},
{o: 39.112, f: 48.104, l: "A", a: 1},
{o: 48.104, f: 56.14, l: "C", a: 0},
{o: 56.14, f: 65.376, l: "C", a: 1},
{o: 65.376, f: 74.328, l: "C", a: 0},
{o: 74.328, f: 80, l: "C", a: 1},
{o: 80, f: 88.708, l: "A", a: 0},
{o: 88.708, f: 97.9, l: "G", a: 1},
{o: 97.9, f: 105.076, l: "B", a: 0},
{o: 105.076, f: 111.64, l: "H", a: 1},
{o: 111.64, f: 118.972, l: "B", a: 0},
{o: 118.972, f: 126.156, l: "I", a: 1}],
[{o: 0.68, f: 7.253, l: "2", a: 0},
{o: 7.253, f: 24.24, l: "4", a: 1},
{o: 24.24, f: 38.88, l: "1", a: 0},
{o: 38.88, f: 47.947, l: "2", a: 1},
{o: 47.947, f: 57.947, l: "1", a: 0},
{o: 57.947, f: 66.08, l: "3", a: 1},
{o: 66.08, f: 79.52, l: "5", a: 0},
{o: 79.52, f: 88.507, l: "2", a: 1},
{o: 88.507, f: 101.053, l: "6", a: 0},
{o: 101.053, f: 105.92, l: "3", a: 1},
{o: 105.92, f: 111.653, l: "1", a: 0},
{o: 111.653, f: 120.107, l: "7", a: 1},
{o: 120.107, f: 126.707, l: "8", a: 0}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 14.9, l: "b", a: 1},
{o: 14.9, f: 34.27, l: "c", a: 0},
{o: 34.27, f: 40.975, l: "d", a: 1},
{o: 40.975, f: 49.915, l: "a", a: 0},
{o: 49.915, f: 57.365, l: "e", a: 1},
{o: 57.365, f: 80.46, l: "c", a: 0},
{o: 80.46, f: 90.145, l: "a", a: 1},
{o: 90.145, f: 101.32, l: "f", a: 0},
{o: 101.32, f: 115.475, l: "c", a: 1},
{o: 115.475, f: 125.905, l: "g", a: 0}],
[{o: 0, f: 126.676, l: "A", a: 0},
{o: 0.221, f: 126.735, l: "A", a: 1}],
[{o: 0, f: 0.096, l: "F", a: 0},
{o: 0.096, f: 12.344, l: "B", a: 1},
{o: 12.344, f: 30.004, l: "C", a: 0},
{o: 30.004, f: 53.428, l: "E", a: 1},
{o: 53.428, f: 73.192, l: "D", a: 0},
{o: 73.192, f: 84.22, l: "E", a: 1},
{o: 84.22, f: 93.664, l: "C", a: 0},
{o: 93.664, f: 101.724, l: "D", a: 1},
{o: 101.724, f: 110.808, l: "C", a: 0},
{o: 110.808, f: 124.368, l: "E", a: 1},
{o: 124.368, f: 125.98, l: "A", a: 0},
{o: 125.98, f: 127.008, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001474.ogg";

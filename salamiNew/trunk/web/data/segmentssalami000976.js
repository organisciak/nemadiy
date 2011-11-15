var data = [
[{o: 0.104, f: 9.008, l: "H", a: 0},
{o: 9.008, f: 38.241, l: "C", a: 1},
{o: 38.241, f: 54.312, l: "A", a: 0},
{o: 54.312, f: 70.674, l: "C", a: 1},
{o: 70.674, f: 86.901, l: "A", a: 0},
{o: 86.901, f: 103.193, l: "C", a: 1},
{o: 103.193, f: 119.412, l: "A", a: 0},
{o: 119.412, f: 191.376, l: "C", a: 1}],
[{o: 0.004, f: 6.992, l: "B", a: 0},
{o: 6.992, f: 10.996, l: "D", a: 1},
{o: 10.996, f: 20.156, l: "C", a: 0},
{o: 20.156, f: 27.368, l: "C", a: 1},
{o: 27.368, f: 39.108, l: "C", a: 0},
{o: 39.108, f: 47.22, l: "C", a: 1},
{o: 47.22, f: 56.884, l: "C", a: 0},
{o: 56.884, f: 67.116, l: "C", a: 1},
{o: 67.116, f: 76.748, l: "C", a: 0},
{o: 76.748, f: 87.412, l: "C", a: 1},
{o: 87.412, f: 98.1, l: "A", a: 0},
{o: 98.1, f: 105.808, l: "C", a: 1},
{o: 105.808, f: 115.912, l: "C", a: 0},
{o: 115.912, f: 124.52, l: "A", a: 1},
{o: 124.52, f: 134.16, l: "A", a: 0},
{o: 134.16, f: 143.752, l: "A", a: 1},
{o: 143.752, f: 152.376, l: "A", a: 0},
{o: 152.376, f: 162.488, l: "E", a: 1},
{o: 162.488, f: 175.612, l: "A", a: 0},
{o: 175.612, f: 185.632, l: "F", a: 1},
{o: 185.632, f: 191.164, l: "G", a: 0}],
[{o: 0.004, f: 6.992, l: "D", a: 0},
{o: 6.992, f: 10.996, l: "E", a: 1},
{o: 10.996, f: 20.156, l: "C", a: 0},
{o: 20.156, f: 27.368, l: "C", a: 1},
{o: 27.368, f: 39.108, l: "C", a: 0},
{o: 39.108, f: 47.22, l: "B", a: 1},
{o: 47.22, f: 56.884, l: "F", a: 0},
{o: 56.884, f: 67.116, l: "G", a: 1},
{o: 67.116, f: 76.748, l: "H", a: 0},
{o: 76.748, f: 87.412, l: "I", a: 1},
{o: 87.412, f: 98.1, l: "A", a: 0},
{o: 98.1, f: 105.808, l: "J", a: 1},
{o: 105.808, f: 115.912, l: "B", a: 0},
{o: 115.912, f: 124.52, l: "A", a: 1},
{o: 124.52, f: 134.16, l: "A", a: 0},
{o: 134.16, f: 143.752, l: "A", a: 1},
{o: 143.752, f: 152.376, l: "A", a: 0},
{o: 152.376, f: 162.488, l: "K", a: 1},
{o: 162.488, f: 175.612, l: "A", a: 0},
{o: 175.612, f: 185.632, l: "L", a: 1},
{o: 185.632, f: 191.164, l: "M", a: 0}],
[{o: 0.387, f: 7.76, l: "7", a: 0},
{o: 7.76, f: 35.36, l: "1", a: 1},
{o: 35.36, f: 53.093, l: "2", a: 0},
{o: 53.093, f: 60.72, l: "1", a: 1},
{o: 60.72, f: 66.373, l: "3", a: 0},
{o: 66.373, f: 75.493, l: "2", a: 1},
{o: 75.493, f: 83.093, l: "6", a: 0},
{o: 83.093, f: 100.48, l: "4", a: 1},
{o: 100.48, f: 116.16, l: "2", a: 0},
{o: 116.16, f: 122.24, l: "3", a: 1},
{o: 122.24, f: 177.333, l: "1", a: 0},
{o: 177.333, f: 183.333, l: "8", a: 1},
{o: 183.333, f: 190.68, l: "5", a: 0}],
[{o: 0, f: 39.485, l: "a", a: 0},
{o: 39.485, f: 49.17, l: "b", a: 1},
{o: 49.17, f: 78.225, l: "a", a: 0},
{o: 78.225, f: 116.965, l: "c", a: 1},
{o: 116.965, f: 146.765, l: "a", a: 0},
{o: 146.765, f: 190.72, l: "a", a: 1}],
[{o: 0, f: 19.18, l: "n1", a: 0},
{o: 19.18, f: 35.631, l: "A", a: 1},
{o: 35.631, f: 51.827, l: "B", a: 0},
{o: 51.827, f: 68.185, l: "A", a: 1},
{o: 68.185, f: 84.405, l: "n2", a: 0},
{o: 84.405, f: 100.751, l: "A", a: 1},
{o: 100.751, f: 116.971, l: "B", a: 0},
{o: 116.971, f: 133.213, l: "A", a: 1},
{o: 133.213, f: 149.386, l: "A", a: 0},
{o: 149.386, f: 165.547, l: "A", a: 1},
{o: 165.547, f: 181.65, l: "A", a: 0},
{o: 181.65, f: 191.379, l: "n3", a: 1}],
[{o: 0, f: 0.068, l: "F", a: 0},
{o: 0.068, f: 71.052, l: "E", a: 1},
{o: 71.052, f: 79.456, l: "A", a: 0},
{o: 79.456, f: 97.928, l: "E", a: 1},
{o: 97.928, f: 110.376, l: "A", a: 0},
{o: 110.376, f: 187.456, l: "E", a: 1},
{o: 187.456, f: 191.276, l: "A", a: 0},
{o: 191.276, f: 191.348, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000976.ogg";

var artist = "Montreal Jubilation Gospel Choir";

var track = "Go Tell it on the Mountain";

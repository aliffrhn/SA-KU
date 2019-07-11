var r = Math.random();

var a = [15, 7, 5, 0, 0, 0];
var b = [0, 3, 9, 7, 0, 0];
var c = [0, 0, 7, 11, 7, 0];
var d = [0, 0, 0, 13, 3, 9];
var e = [5, 0, 0, 0, 5, 5];

var jk = 5;
var jp = 6;
var iteration = 0;
var maxiteration = 100000;

var temp = 1000;
var alpha = 0.995;

var solusi = jk - 1;

for(t=0;t<=solusi;t++){
    var w = Math.floor(Math.random() * 10);
    do{
        w += 1;
        if(w > jk - 1){
            w = 0;
        }
    }while(w == t);
    solusi = w;
}

// var energi = 




console.log(a)  
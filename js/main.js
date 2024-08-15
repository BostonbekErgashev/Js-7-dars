// slice in JS

//let matn = "Quyosh sharqdan chiqib g'arbga botadi";
//document.write(matn.slice(7,30));

// toString in JS (string formatiga tegishli bo'lmagan ma'lumotlarni stringlash)

//let son = 7;         //number
//let matnSon = "8";   //strong
//document.write(typeof son.toString());
//document.write(typeof parse(matnSon));

//Push & Pop (Array objectga ma'lumotlarning kiritish)

//let list = [];
//list.push("Sabo");
//list.push("17 yoshda");
//list.push("Oyxon");
//list.push("16 yoshda");
//list.push("Sarvinoz");
//list.push("18 yoshda");
//console.log(list.length);
//console.log(list)//////;
//console.log(list.pop());
//console.log(list);
//console.log(list.pop());
//console.log(list);
//console.log(list.pop());
//console.log(list);
//console.log(list.pop());
//console.log(list);

// Unshift & Shift (Array object ma'lumotlarni kiritish, olib tashlash)

//let list = [];
//list.unshift("Sabo");
//list.unshift("17 yoshda");
//list.unshift("Oyxon");
//list.unshift("16 yoshda");
//list.unshift("Sarvinoz");
//list.unshift("18 yoshda");
//console.log(list,length);
//console.log(list);
//console.log(list.shift());
//console.log(list);
//console.log(list.shift());
//console.log(list);
//console.log(list.shift());
//console.log(list);
//console.log(list.shift());
//console.log(list);

// sort in JS (tartibga keltirish)

// let list = ["Abdumurod", "Ibrohim", "Quvonchbek", "Sabo", "Qodir", "Islom", "Boston"];
// console.log(list.sort());
// console.log(list.sort().reverse());
// let sonlar = [142,37,5,2010,109,564];
// let tartiblanganSonlar = sonlar.sort(function(a,b){
//    return a-b;
// });
// console.log(tartiblanganSonlar.reverse());

// let belgilar = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";

//function parolBer(){
//   let i = 0;
//   let parol = "";
//   while(i < 6){
//       let son = parseInt(Math.random()*belgilar.length);
//    parol += belgilar[son];
//    i++;
//    }
//    document.querySelector("input").value = parol;
//}


document.querySelector(".tugma").addEventListener("click",function(){
    let ekran = document.querySelector(".ekran");
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector(".nolga").addEventListener("click",function(){
    document.querySelector(".ekran").value = 0;
});



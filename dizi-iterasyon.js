// ?örnek 

const maaslar = [50000,35000,120000,44000]
let sum = 0
for (let i = 0 ;i<maaslar.length; i++){
    sum+=maaslar[i]
    console.log(i,sum);
}
console.log("sum:",sum);

// ?ÖRNEK2
// ?notlar dizisindeki notların 50den küçük olanları ve buyuk olanları 2 ayrı diziye kaydedin

const notlar = [50,45,67,100,10]

const ellidenküçnotlar = []

const ellidenbüynotlar = []

for (let i =0 ; i<notlar.length; i++){

    if(notlar[i]<50){
        ellidenküçnotlar.push(notlar[i])
    }
    else {
      ellidenbüynotlar.push(notlar[i]) 
    }
   

    
}
console.log(notlar);
console.log(ellidenküçnotlar);
console.log(ellidenbüynotlar);

/*=======FOR İN=========== */

const sayılar = [50000,35000,120000,44000]

let total = 0
for (let i in sayılar){
total+=sayılar[i]
}
console.log("avg(ortalama):",total/sayılar.length  );
// örnek --aynı örneği for in ile yaptık ve bu sefer if yerine turnary yaptık
const notlar1 = [50,45,67,100,10]

const ellidenküçnotlar1 = []

const ellidenbüynotlar1 = []

for (let i  in notlar1){

    notlar1[i]<50
        ? ellidenküçnotlar1.push(notlar1[i])
    
    
      : ellidenbüynotlar1.push(notlar1[i]) 
    
}
console.log(notlar1);
console.log(ellidenküçnotlar1);
console.log(ellidenbüynotlar1);

/* =========== FOR OF ========   */

const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const strArrayUpperCase = (students) => {
  let upperCasedArray = []

  for (let student of students) {
    upperCasedArray.push(student.toUpperCase())
  }
  return upperCasedArray
}
const myArray = strArrayUpperCase(students)
console.log(myArray)





//ÖDEVVVV?*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

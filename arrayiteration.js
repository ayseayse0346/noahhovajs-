/*========== FOR EACH ======== */

const sayılar = [4,5,1,4,6]

sayılar.forEach((s)=>console.log(s))
console.log("---------------");




// forech birden fazla parmaetre kullanabiliriz.
//?örnek  i indsii iki parametreli yaptık

let sayı = [4,5,1,4,6]

sayı.forEach((x,i)=>console.log("değer:",x,"indexnumarası:",i))


console.log("------------");


// ?örnek toplam yaptık 
let sum = 0;
sayılar.forEach((sayı)=>(sum+=sayı))
console.log(sum);

console.log("----------");

// ?örnek üç parametreli foreach
// hoca 100de on notları artıracak 

const notlar= [40,50,10,40,60,90]

notlar.forEach((not,indis,array)=>{
    // herkesin notunu yüzde on artrmak istiyorumve orjinal diziye yani arry aktarmk istiyorum
    array[indis]= not * 1.1
})
console.log(notlar);

// !tek satırda süslüsüz de yapabiliriz.
// const notlar= [40,50,10,40,60,90]

// notlar.forEach((not,indis,array)=>(array[indis]= not * 1.1))  //tek satır olduğu için böyle de yapabiliriz.
// console.log(notlar);

// !foreach return yapmaz-->void functiondur.(teknik terimi budur.).

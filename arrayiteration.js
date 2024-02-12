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


/*----------ARRAY MAP() METODU----- */
// orjinal dizinin kopyasını modifiye edersk döndürür.

let x = [2,3,4,5]
let y = x.map((s)=> s*2)
console.log(y);  //verdiğimiz kriterlere göre transforme olumuş.return ediyor.

// ?Bir dizideki tüm isimleri Büyük harfe dönüştüren uygulamayı yazınız.

let isimler = ["Mustafa","Murat","Ahmet","Mustafa","Ayşe","canan"]

let copyedNames = isimler.map((name)=>name.toUpperCase())
console.log(copyedNames);

// ?Örnek :
/*
tlprices dizisindeki rakamların euro ve dolar karşılıklarını hesaplatarak yeni dizilere kaydediniz.

*/
const euro = 32.97
const dolar = 30.5

const İPhoneTL = [90000,75000,60000,40000,30000]

const İphoneDolar= İPhoneTL.map((tl)=>(tl/dolar ).toFixed(1) )  //math.trunc ile sadece tam kısımlarını alabiliriz.
console.log(İphoneDolar);

const İphoneEuro= İPhoneTL.map((tl)=>Math.trunc(tl/euro ) )  
console.log(İphoneEuro);


/*
 -----FİLTER METHOD------------ bu methodda değer döndürür.yine liste döner. map gibi
 */

 let fiy = [31000,20000,15000,75000]

let fiyat= fiy.filter((filt)=>filt>30000)
console.log(fiyat);

// ?ÖRNEK
// ömaaşları ellibinden büyük olanları seçmek istiyorum
const maaslar = [90000,75000,60000,40000,50000,30000]

const ellidenBüyük = maaslar.filter((maas)=> maas>50000)
console.log(ellidenBüyük);


// ?örnek mması 30000 ile 50000 arasında olanları seç

const düşükMaas = maaslar.filter((maas)=> maas>=30000 && maas<=50000 )
console.log(düşükMaas);

/*
----------(chaining)PIPLİNE (HAT)------- 
*/

// ?örnek  maası 50000den   az olanlar %20 zam yapalım

const salary = [90000,75000,60000,40000,50000,30000]
const zamlıMaaslar = salary.filter((maas)=> maas<=50000).map((maas)=> maas*1.2)
console.log(zamlıMaaslar);
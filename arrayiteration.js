/*========== FOR EACH ======== */

// const sayılar = [4, 5, 1, 4, 6]

// sayılar.forEach((s) => console.log(s))
// console.log("---------------");




// forech birden fazla parmaetre kullanabiliriz.
//?örnek  i indsii iki parametreli yaptık

// let sayı = [4, 5, 1, 4, 6]

// sayı.forEach((x, i) => console.log("değer:", x, "indexnumarası:", i))


// console.log("------------");


// ?örnek toplam yaptık 
// let sum = 0;
// sayılar.forEach((sayı) => (sum += sayı))
// console.log(sum);

// console.log("----------");

// ?örnek üç parametreli foreach
// hoca 100de on notları artıracak 

// const notlar = [40, 50, 10, 40, 60, 90]

// notlar.forEach((not, indis, array) => {
    // herkesin notunu yüzde on artrmak istiyorumve orjinal diziye yani arry aktarmk istiyorum
//     array[indis] = not * 1.1
// })
// console.log(notlar);

// !tek satırda süslüsüz de yapabiliriz.
// const notlar= [40,50,10,40,60,90]

// notlar.forEach((not,indis,array)=>(array[indis]= not * 1.1))  //tek satır olduğu için böyle de yapabiliriz.
// console.log(notlar);

// !foreach return yapmaz-->void functiondur.(teknik terimi budur.).


/*----------ARRAY MAP() METODU----- */
// orjinal dizinin kopyasını modifiye edersk döndürür.

// let x = [2, 3, 4, 5]
// let y = x.map((s) => s * 2)
// console.log(y);  //verdiğimiz kriterlere göre transforme olumuş.return ediyor.

// ?Bir dizideki tüm isimleri Büyük harfe dönüştüren uygulamayı yazınız.

// let isimler = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

// let copyedNames = isimler.map((name) => name.toUpperCase())
// console.log(copyedNames);

// ?Örnek :
/*
tlprices dizisindeki rakamların euro ve dolar karşılıklarını hesaplatarak yeni dizilere kaydediniz.

*/
// const euro = 32.97
// const dolar = 30.5

// const İPhoneTL = [90000, 75000, 60000, 40000, 30000]

// const İphoneDolar = İPhoneTL.map((tl) => (tl / dolar).toFixed(1))  //math.trunc ile sadece tam kısımlarını alabiliriz.
// console.log(İphoneDolar);

// const İphoneEuro = İPhoneTL.map((tl) => Math.trunc(tl / euro))
// console.log(İphoneEuro);


/*
 -----FİLTER METHOD------------ bu methodda değer döndürür.yine liste döner. map gibi
 */

// let fiy = [31000, 20000, 15000, 75000]

// let fiyat = fiy.filter((filt) => filt > 30000)
// console.log(fiyat);

// ?ÖRNEK
// ömaaşları ellibinden büyük olanları seçmek istiyorum
// const maaslar = [90000, 75000, 60000, 40000, 50000, 30000]

// const ellidenBüyük = maaslar.filter((maas) => maas > 50000)
// console.log(ellidenBüyük);


// ?örnek mması 30000 ile 50000 arasında olanları seç

// const düşükMaas = maaslar.filter((maas) => maas >= 30000 && maas <= 50000)
// console.log(düşükMaas);

/*
----------(chaining)PIPLİNE (HAT)------- 
*/

// ?örnek  maası 50000den   az olanlar %20 zam yapalım

// const salary = [90000, 75000, 60000, 40000, 50000, 30000]
// const zamlıMaaslar = salary.filter((maas) => maas <= 50000).map((maas) => maas * 1.2)
// console.log(zamlıMaaslar);
// NOTLAR :
// 1-) foreach :dolaşırsınz okursunuz ama size bir şey döndürmez diziye erişip tek tek elemenleri dolaşır ve içine yazdığımız parametreye gelir (i).array itere edilirken tek tek bize verdiği değerler. en az bir tane parametre olmak zorunda. üç tane de olur bunlar i(değer)bu zorunlu  ,index,arr(bu ikisi optşional istersek ekle.) 
// const dizi = [4, 3, 2, 1]

// dizi.forEach((i) => console.log(i))

// 2-)map(): dizi dndürür.

// const döndür = dizi.map((i) => i)
// console.log(döndür);

// 3-) filter():seçme yapar . map gibi döndürür.ama bir kopyasının benzeri değişikliği döndürür.

// !REDUCE
/*
-----REDUCE----- iki parametre zorunlu .Bir dizi döndürmez. bir primity döndürür.
x.reduce((a,b)=> a+b,0)  ***sıfır zorunlu değil başlangıç değeri

a->acc yani akımlater .ikincisi value yani b . yine indis ve array kullanabiliriz yani dört parametre kullanabiliriz.
*/
// ?örnek 

// const değ = [4, 3, 2, 1]

// let değişken = değ.reduce((a, b) => a * b)
// console.log(değişken);

// ?örnek2 maaşların toplamı ne kadar
// const mayışlar = [40000, 30000, 20000, 100000]
// let toplamMaas = mayışlar.reduce((t, m) => t + m)
// console.log(toplamMaas);

// !ÖRNEK:maaşı 40000den az olanlar %50 zam yapacak ve bunun zamlı maaş toplamı ne kadar göster

// const toplamZamlıMaas = mayışlar
// .filter((m) => m < 40000)
// .map((m) => m * 1.5)
// .reduce((t, m) => t + m)
// console.log(toplamZamlıMaas);

//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

const sayilar = [4, 5, 1, 4, 6, 9]
sayilar.forEach((x) => console.log(x))
console.log("************")

//? alternatif
sayilar.forEach(yazdir)
function yazdir(x) {
  console.log(x)
}

//? ORNEK: 2 parametreli forEach
sayilar.forEach((x, i) => console.log("Deger:", x, "sıra:", i))

//? Ornek: toplam
let sum = 0
sayilar.forEach((sayi) => (sum += sayi))
console.log("SUM:", sum)

//? Ornek: 3-parametreli forEach
const notlar = [40, 50, 10, 40, 60, 90]

//! Süslü parantezli olarak da yazılaabilir
// notlar.forEach((not, indis, array) => {
//   array[indis] = not * 1.1
// })

notlar.forEach((not, indis, array) => (array[indis] = not * 1.1))
console.log(notlar)

//? forEach return yapmaz (void function)
console.log(notlar.forEach((x) => x * x)) //? undefined
const deneme = notlar.forEach((x) => x * x)
console.log(deneme) //? undefined

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const copiedNames = names.map((n) => n.toLowerCase())
console.log(copiedNames, names)

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 32.97
const dolar = 30.5

const iPhoneTL = [90000, 75000, 60000, 40000, 30000]

const iPhoneDolar = iPhoneTL.map((tl) => Math.trunc(tl / dolar))
const iPhoneEuro = iPhoneTL.map((tl) => Math.trunc(tl / euro))

console.log(iPhoneDolar)
console.log(iPhoneEuro)

//* =======================================
//*            FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

const maaslar = [90000, 75000, 60000, 40000, 30000]

//? maasi 50000 den büyük olanlar
const ortamaMaaslar = maaslar.filter((m) => m >= 50000)
console.log(ortamaMaaslar)

//? maasi 50000 den büyük olanlar
const düsükMaaslar = maaslar.filter((m) => m >= 30000 && m < 50000)
console.log(düsükMaaslar)

//? ORNEK: maasi 50000'den az olanlar %20 zam yapalım (orjinal diziyi degistirerek)
maaslar.map((m, i, arr) => {
  if (m >= 30000 && m < 50000) {
    arr[i] = m * 1.2
  }
})

console.log(maaslar)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? ORNEK: maasi 50000'den az olanlar %20 zam yapalım (orjinal diziyi degistirerek)

const salary = [90000, 75000, 60000, 40000, 30000]

const zamliMaaslar = salary.filter((m) => m < 50000).map((m) => m * 1.2)
console.log(zamliMaaslar)

// functional programming (declarative programing)
// imperative programming

//* =======================================
//*           REDUCE
//* =======================================

const mayişlar = [40000, 30000, 20000, 100000]
const toplamMaas = mayişlar.reduce((t, m) => t + m, 0)

console.log("Toplam:", toplamMaas)

const sayilarim = [4, 5, 3, 2]
const carpimlar = sayilarim.reduce((t, m) => t * m, 1)
console.log("Carpim:", carpimlar)

//! Ornek:

const toplamZamliMaas = mayişlar
  .filter((m) => m < 40000)
  .map((m) => m * 1.5)
  .reduce((t, m) => t + m, 0)

console.log(toplamZamliMaas)

//? reduce (3 parametreli)
const toplamSayilarim = sayilarim.reduce((t, s, i) => {
    console.log(`${i} - ${t + s}`)
    return t + s
  }, 0)
  console.log("TOTAL:", toplamSayilarim)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 44, 78, 89, 25]
const check = ages.every((age) => age >= 18)

check ? console.log("All ages are over 18") : console.log("Some are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? true

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1
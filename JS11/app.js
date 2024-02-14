// ****NEW OPERATORS****\\

// ***DESTRUCTRİNG OBJECT***//keylerimizi değişken hale gitriyoruz yani variable
// objelerin keylerini açarak çıkartır ve variable olur keyler.
const product = {
    id:"12345",
    brand:"Apple",
    type:"smart phone",
    price:3000
}
const product1 = {
    id:"12344",
    brand:"Apple",
    type:"smart phone",
    price:2000
}

console.log(product.price); //okdum

let proPrice = product.price
console.log(proPrice);

proPrice+=100
console.log(proPrice);

//? square braclet ile:
const proId = product["id"]
 console.log(proId);

//  ?ÜÇÜNCÜ YÖNTEM DESTRUCTURİNG
// !değişken isimleri objedeki keylere eş olmalıdır.
// içindeki verileri açıp aşağıda ayrı ayrı kullanmak istiyorum
x = {a:1,b:2}
// içerisinden a ve b yi çıkarıp kullanmak istiyorum
 //let {key1,key2,...} = obje adı 
//  artık bu keyler variable olur artık.
// bir kere çıkardıktan sora tekrar çıkarabiliriz

let {a,b}=x
console.log(a);

// ?örnek 

const {id,price}=product

console.log("ID:",id);
console.log("price:",price);
price+=500
// 500 eklersek artık ayrı olmuş oluyor bu artırım içinen çıkarıp yani destructring yaptığımız yerde olur ama product aynı kalır değişmez çünkü ordan price çekmiştik çektiğimiz yer değişiyor.
const {type}=product
console.log("type:",type);

// keylerde isim değişikliği : ile yapılabilir. 
const{
    id:proıd,price:proprice
}=product1

console.log("Pro1:",proıd);
console.log("pro1:",proprice);

//! destr ile tek satir bir çok objenin key'i degisken haline getirebilir.
// const { brand,id,price, type } = product

// ?NESTED DESTR.


const insanlar = {
    kisi1: {
      kimlikNo: "1234567890",
      adi: "Ahmet",
      soyadi: "Can",
      meslek: "Mimar",
      maas: 30000,
    },
    kisi2: {
      kimlikNo: "44234567890",
      adi: "Canan",
      soyadi: "Can",
      meslek: "Sosyal Gelişim Uzmanı",
      maas: 25000,
    },
  }

  console.log(insanlar.kisi2.meslek);
  console.log(insanlar["kisi2"]["meslek"]);

  const{kisi1,kisi2}=insanlar
  console.log(kisi1);
  console.log(kisi2);
// şimdi de kişibiri açıyoruz .isimi ve maası çıkardık.ceviz örneği aklına gelsin.şimdi cevizin sert kabuğunu açıyoruz bundan önce yeşil kabuğunu açtık
  const{adi,maas}=kisi1
  console.log(adi,maas);

//   ?iki seviyeli dest.
const {
    kisi1: { adi, meslek },
    kisi2: { adi: kisi2Ad, meslek: kisi2Meslek },
  } = insanlar
  
  console.log(adi, meslek)
  console.log(kisi2Ad, kisi2Meslek)
  

// const {kisi1{adi,meslek}}=insanlar
// insanlardan kişi1 i çıkarttık kişi1dende adı ve mesleği çıkarttık.



//* Example    --> json
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
  console.log("************")
// ?NORMAL YÖNTEMLE BÖYLE YAPABİLİRİZ 
//   team.forEach((person)=> {
//     console.log("name:",person.name);
//     console.log("surname:",person.surname);
//     console.log("job:",person["job"]);//square braclet ile yaptık
//     console.log("age:",person.age);
//     console.log("***************");
//   }) 


// !burada tek bir satırda objeyi destructure ettik.
  team.forEach((person)=> {
    const{name,surname,job,age}=person
    console.log("name:",name);
    console.log("surname:",surname);
    console.log("job:",job);
    console.log("age:",age);
    console.log("***************");
  }) 

// !burdaki(yukardaki) işlmi bir tık daha kısaltabiliriz.

team.forEach(({name,surname,job,age})=> {
    const{name,surname,job,age}=person
    console.log("name:",name);
    console.log("surname:",surname);
    console.log("job:",job);
    console.log("age:",age);
    console.log("***************");
  }) 

//   !FONKSİYONLARDA DESTRUC. KULLANIMI

const göster = function (){
    // çağrıldığı yere bir obje döndürsün istedik
    return{
name: "hazel",
surname:"nut",
job:"team lead",
age:40
    }
}
//* function'un dondurdugu obje dogrudan dest. yapilabilir
// bir fonksiyon bir obje dönebilir.
console.log(göster);

let {name,surname,job,age }=göster()
console.log(name,surname);
console.log("age:",++age);

// ?function parametresi

const veri = {
    id:"123",
    desc:"this is top...",
    createdtime:"1900"
}

const printdata =(data)=> {
    console.log(`${data.id}-${data.desc}-${data.createdtime}`);
}
// const printdatadestr =(data)=> {
//     const{id,desc,createdtime}=data
//     console.log(`${id}-${desc}-${createdtime}`);
// } //tek satırda gösterimi

printData(data)
printDataDestr(data)
printDataDestrAir(data)

// ***DESTRUCTURİNG (ARRAY)******\\

const people  =["ali","veli","canan","can"]
let ali =people[0]
console.log(people);
const[kişi1,kişi2, ,kişi4]=people //indexine göre aldı .burda virgülle sırasını pas geçmiş gibi olduk.cana ulaşmak için bunu yaptık arada cananı tanımlamak istemedim 
console.log(kişi1,kişi2,kişi4);

//******REST (...) *******//

// nerelede kullanılır? bir şeyin geri kaalnını almak.scopa göre 
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?REST: Array
const araclar = ["Kamyon", "Tır", "Kamyonet", "Araba", "ATV", "Minübüs"]

const [arac1, arac2, arac3, , ...binekAraclar] = araclar

console.log(arac1, arac2, arac3)
console.log(binekAraclar)

//?REST: Object

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
}

const { ad, soyad, yas, ...geriKalanlar } = person
console.log(geriKalanlar)

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a, b) => a + b
console.log(topla(1, 5, 2, 7, 9))

const toplam = (...sayilar) => {
  return sayilar.reduce((a, b) => a + b)
}
console.log("TOPLAM:", toplam(1, 5, 2, 7, 9))

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAracları] //? nested
console.log(tasitlar)

const flatTasitlar = [...ucanAraclar, ...karaAracları]
console.log(flatTasitlar)

//?Ornek:
const cumle = "Uzun ince bir yoldayim"
const cumleDizisi = [...cumle]
console.log(cumleDizisi)

//?Ornek:
//? Spread ile bir iterable(array), non-iterable'a cevirlebilir.

const numbers = [1, 3, 4, 5]
console.log(Math.max(...numbers))

//? nested
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
}

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

//? s  => objedeki her bir key i gösterir
for (let s in sahislar) {
  //   console.log(s)
  //   console.log(sahislar[s]) //! square bracket (her bir objeyi getirir)
  console.log(sahislar[s].salary) //! square bracket (her bir maasi getirir)
}

//? Kullanışlı Object metotları

console.log(Object.keys(sahislar)) //? objenin key'leri array olarak doner
console.log(Object.values(sahislar)) //? objenin value'larını array olarak doner
console.log(Object.values(sahislar.sahis2)) //? objenin value'larını array olarak doner
console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner
console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner

//! FOR - OF
//* for (let x of iterable) {
//*   code block to be executed
//* }

for (let key of Object.keys(sahislar)) {
  //   console.log(key)
  console.log(sahislar[key].salary) //! square
}

console.log("**********")

for (let v of Object.values(sahislar)) {
  console.log(v.salary)
}


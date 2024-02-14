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

ekle hocadan al

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

// const {kisi1{adi,meslek}}=insanlar
// insanlardan kişi1 i çıkarttık kişi1dende adı ve mesleği çıkarttık.
ekle hocadan


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


// !burada tek bir sarırda objeyi destructure ettik.
  team.forEach((person)=> {
    const{name,surname,job,age}=person
    console.log("name:",name);
    console.log("surname:",surname);
    console.log("job:",job);
    console.log("age:",age);
    console.log("***************");
  }) 
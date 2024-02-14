// -------OBJECT {}-----
// data structure'dır --> veri yapısıdır,veri saklama yeridir.
 let ogrencilerİsim =["ahmet","ismet","saffet"]
 let ogrencilerSoyisim=["yılmaz","can","baki"]
 let ogrenciAdres = ["kadıköy","şeebinkarahisar","seferihisar"] //aslında bakıldığında tek başına array yeterli değil.bunları ayrı ayrı yapmak gerek ve mesel aahmetin bütün verilerine ulaşmak da aynı şekilde ayrı ayrı istemek zorunda kalabiliriz.bu şekilde verileir toplamak zor.

//  !NOTTT!!!  Karmaşık ve lişkili verilerin arraylarda saklanması ve erişimi zordur.
// obje içinde indisleme yok key ve valudan ulaşacağız.
// key-value (pair)
// property-value
// 1-) object literal yöntemiyle bir obje oluşturacağız

const kişi ={
    isim:"ahmet",soyisim:"yılmaz",kimlikNo:"14257589645",doğumTarihi:"01.01.1989",maas: 70000

}
// 1 -)okuma . notasyonu-->obje adı.key
console.log(kişi.isim);

// 2-)[] square bracet notasyonu
console.log(kişi["kimlikNo"]); 

// ! 3 farklı yöntem ile object oluşturulabilir.

/* 
1-) object literal (en çok tercih edilen yöntem)
*/ 
const kişil = {
    isim:"ahmet",soyisim:"yılmaz",kimlikno:"1231456758",
    doğum:"01/01/1985",
    maas:70000,
    ehliyet:true,
    diller:["english","arabic"],
    notlar:{mat:"AA",turk:"AB"},
    doğumtar:1990,
yashesapla:function(){
    return new Date().getFullYear()-this.doğumtar
}
}

// !this keywordu içerisinde bulunduğumuz objeyi refere eder.
// !global alanda yazılan this ise global objeyi refere eder.
// !window tarayıcının her şeyini barındıran temel bir objeidr.

// ----OKUMA-------------**
// ?A- ) . notasyonu ile erişim
console.log(this); //global alanda (window nestesi gösterir.)
console.log(kişil.maas);
console.log(kişil.diller);
console.log(kişil.diller[1]);
console.log(kişil.notlar.mat); //AA 
console.log(kişil.yashesapla());
// console.log(new Date().getDay());

// ? square bracket ile erişim

console.log(kişil["kimlikno"]);
console.log(kişil["notlar"]["turk"]);

// const secici = prompt("kişinin hangi biligisini oğrenmek istersiniz?isim,soyisim,kimlikno,maas,doğum,yashesapla??")

// console.log(kişil[secici]); 

// -------YAZMA----------**

kişil.doğumtar = 2000
console.log(kişil);

kişil.diller ="Türkçe-ingilizce"
console.log(kişil);

kişil.kilo = 80
console.log(kişil);  //olmayan property de ekleyebiliriz ve orjinal diziyi yazdırdıdığımızda görürüz.

//! square brachlet yöntemiyle gösterimi
kişil["ehliyet"] = false

/*----NESTED OBJELER----- */

// ! objeler itere edilebilir yapılar değildir.

const kişill = {
    ahmet:{soyisim:"yılmaz",kimlikno:"1231456758",
    doğum:"01/01/1985",
    maas:70000},
    mehmet :{
        soyisim:"yıldırım",kimlikno:"1231456759",
        maas:7000
    }
 
}

console.log(kişill.ahmet.kimlikno);
console.log(kişill.mehmet.maas);

const isim = "ahmet"
console.log(kişill[isim]);

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

const people = [
  {
    isim: "Ahmet",
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",
    maas: 70000,
    job: "developer",
  },
  {
    isim: "Mehmet",
    soyİsim: "Ozturk",
    kimlikNo: "1696571112",
    maas: 50000,
    job: "developer",
  },
  {
    isim: "Canan",
    soyİsim: "Can",
    kimlikNo: "33344571112",
    maas: 90000,
    job: "tester",
  },
]

// const key = prompt(
//   "Kisilerini hangi bilgisini ogrenmek istersiniz: isim, soyİsim,kimlikNo, maas?"
// )
// people.forEach((p) => console.log(p.isim))
// people.forEach((p) => console.log(p.maas))
// people.forEach((p) => console.log(p["kimlikNo"]))
// people.forEach((p) => console.log(p[key]))

//? Maasların toplami
const toplamMaas = people.reduce((t, p) => t + p.maas, 0)
console.log(toplamMaas)

//? job, developer olanların isim+soyisim yazdirinz

const devs = people.filter((p) => p.job === "developer")
console.log(devs)

const devNames = people
  .filter((p) => p.job === "developer")
  .map((p) => `${p.isim} ${p.soyİsim}`)
console.log(devNames)


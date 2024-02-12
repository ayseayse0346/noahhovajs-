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
yashesapla:function(){
    return new Date().getFullYear()-this.doğum
}
}

// !this keywordu içerisinde bulunduğumuz objeyi refere eder.
// !global alanda yazılan this ise global objeyi refere eder.
// !window tarayıcının her şeyini barındıran temel bir objeidr.

console.log(this); //global alanda (window nestesi gösterir.)
console.log(kişil.maas);
console.log(kişil.diller);
console.log(kişil.diller[1]);
console.log(kişil.notlar.mat); //AA 

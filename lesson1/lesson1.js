/***************
 * Constantner *
 **************/
/*
 chen karox poxel P  - n qani vor ayn constanst e
 P = 6 or P = 'sad' //  sranq sxal orinaknern en
 */
const  P = 3.14;
/*
  Array ev chenq karox poxeel orinak senc
 months = 2 kam  months = 'asdasd'  bayc karox enq
 poxel na meji andamnerin voncor ka nerqevi orinakum
 nuyn zev el ashxatuma obyekti het

 */
const  months = ['January ','February','March ','April','May','June','July','August','September','October','November ','December '];
months[0] = 'January-31';
months[1] = 'February-28 or 29';
months[2] = 'March-31';
months[3] = 'April-30';
months[4] = 'May-31';
months[5] = 'June-30';
months[6] = 'July-31';
months[7] = 'August-31';
months[8] = 'September-30';
months[9] = 'October-31';
months[10] = 'November-30';
months[11] = 'December-31';
console.log(P);
console.log(months);
/*********************
 * Let   popoxakaner *
 ********************/
/*
 Let -@  var-ic tarbervuma nranov
   1 -  vor chi karli nun anunov popoxakan@ noric sarqel orinak
        let popoxaka = 5;
        let  popoxaka = 8;
   2 -  Let@ i tarberutyun vari erb haytaravc e linum nerq qan iren arjeqa veragrac linum errora talis orinak
        v = 5
        var v; //es depqum ashxxatuma
        e = 8
        let e;//senc chi ashxatum
   3 -  orinak
         for(var  i = 0;i<5;i++){           //es depqum erb ancnuma 3 varkyan arden i 5 arjeqna unenum
         setTimeout(function(){
         console.log(i)
         },3000)
         }
         for(let  j = 0;j<5;j++){      //es depqum ashxatuma  vonc petqa
                                      // qani vor leti depqum es j haytararveluc hot @nkuma fori pakagceri mej u  erb mi angam anuma frum i avelunuma mekov nor
                                      popoxakan darnum dra hama tpuma lriv arjeqner@
                                      aysiqn@ j ashxatuma menak pakagceri nersum u urish tex tesaneli chi
         setTimeout(function(){
         console.log(j)
         },3000)
         }


*/
let b = 1;
 b = '8';
console.log(b);
for(var  i = 0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    },3000)
}
for(let  j = 0;j<5;j++){
    setTimeout(function(){
        console.log(j)
    },3000)
}
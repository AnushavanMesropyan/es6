const  original = function(){
    return 100;
};
console.log(original());
// nuyn@ ec6 - ov
// slaqnerov funkcianer
const  arrow = () => {
   return 200;
};
console.log(arrow());
// qani vor sa nuyn funkciane e karox enq poxancel parameter
// karox enq poxancel aynqan parametr ichqan uzenq
const  arrow2 = (num) => {
    return 200+num;
};
console.log(arrow2(50));
//ete funkcian petqa veradarcni arjeq mek toxov karox enq ayn krchatel hetevyal kerp
const  arrow3 = (num,num2) =>  200+num*num2;
console.log(arrow3(50,2));
// arrow3 karox enq evs krchatel ete ayn unena mek parameter hetvyal kerp  nayel arrow4 - in
// bayc sa miayn erb uni mek parameter
const  arrow4 = num =>  200+num;
console.log(arrow4(50));
// urish nrbutyuner
// Ays depqum this da  window
const  obj = {
    name:"WFM",
    logName:function(){
        setTimeout(function(){
            console.log('Name:'+this.name);

        },2000)
    }
}
obj.logName();
// Ays xndri lucum@ es6 ayl voch te this popoxakani veragrel@ minchev setTimeout i ashxatel@
const  obj2 = {
    name:"WFM2",
    logName:function(){
        setTimeout(() => {
            console.log('Name:'+this.name);

        },2000)
    }
}
obj2.logName();
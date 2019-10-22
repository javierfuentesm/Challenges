
const stringnum = (str)=>{
    var array = str.split(" ");
    var arrayClean = []; 


    array.forEach(element => {
        var wordFine = element.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
        arrayClean.push(wordFine);
    });
    
    var sf = arrayClean.sort((a,b)=>{
        return b.length - a.length;
    });
    return sf[0];
}
stringnum('hola com$$$$$o estas soekr')
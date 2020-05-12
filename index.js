function panggilSplit() {
    var kalimat = "Saya ingin belajar bersama";
    var result = kalimat.split(" ");

    result.forEach(function(item, index) {
        console.log("Item : " + " " + item + " " + "Index ke " + index);
    });

}
panggilSplit()
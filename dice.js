function dice(dy, xd) {
    xd = xd || 1;
    var total = 0;
    while (xd > 0) {
        total += parseInt(Math.random() * dy + 1);
        xd--;
    }
    return total;
}

//var AR = dice(20) + 19;
//var AD = dice(6, 2);
//console.log('Attack Roll : ' + AR);
//console.log('Damage : ' + AD);

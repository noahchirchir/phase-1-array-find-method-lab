function superbowlWin (record){
    function isWinningEntry(entry){
        return entry.result==="W" && entry.year
    }
    const win = record.find(isWinningEntry);
    if (win){
        return win.year;
    }
    else{
        return undefined;
    }
}
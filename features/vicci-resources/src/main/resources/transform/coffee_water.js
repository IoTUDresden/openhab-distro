(function(value){
    var tmp = JSON.parse(value);
    if(tmp.status.hasOwnProperty("enoughwater")){
        if(tmp.status.enoughwater == 1){
            return "ON";
        }
        else{
            return "OFF";     
        }
    }
    else{
        return "-";
    }     
})(input)

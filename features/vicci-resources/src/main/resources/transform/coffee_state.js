(function(value){
    var tmp = JSON.parse(value);
    if(tmp.status.hasOwnProperty("working")){
        if(tmp.status.working == true){
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
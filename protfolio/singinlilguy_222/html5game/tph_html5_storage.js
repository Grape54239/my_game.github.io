function ext_set_local_flag(key,value){

window.localStorage.setItem(key,value);
}

function ext_get_local_flag(key){
	var val = window.localStorage.getItem(key)
	if (val == null){
	return "";
}
	return val;

}
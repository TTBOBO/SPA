const jsonEncode = (val) => {
	val = JSON.parse(val.replace('\(','').replace('\)',''));
	return val

}
export default jsonEncode
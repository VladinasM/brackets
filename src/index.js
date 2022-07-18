module.exports = function check(str, bracketsConfig) {
		const config = bracketsConfig.map((value) => value.join(""));
		console.log(str);
		let i = -1;
		while (i < config.length) {
			i++;
			if (str.indexOf(config[i]) !== -1) {
				str =
					str.slice(0, str.indexOf(config[i])) +
					str.slice(str.indexOf(config[i]) + 2, str.length);
				i = -1;
			}
		}
		return str.length === 0;
} 


var stripSymbols = function(s) {
	var symbols = ",':;".split('');
	for (idx in symbols) {
		match_idx = s.indexOf(symbols[idx]);
		if (match_idx !== -1) {
			return s.substr(0, match_idx);
		} else {
			return s;
		}
	}
}

words = [];
word_histogram = {};
ps = $('fontprefs_bottom').children;
for (child in ps) {
    if (ps[child].innerHTML){
        ps_words = ps[child].innerHTML.split(" ");
        for (word_idx in ps_words) {
            word = stripSymbols(ps_words[word_idx]);
            if (word_histogram[word] !== undefined) {
                word_histogram[word] += 1;
            } else {
                word_histogram[word] = 1;
            }
            words.push(word);
        }
    }
}

for (word in word_histogram) {
    word_count = word_histogram[word];
    if (word_count > 1 && word && word[0].toUpperCase() == word[0] && word.length > 4) {
        console.log(word, word_count);
    }
}

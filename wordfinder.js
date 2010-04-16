var wordfinder = {};

wordfinder.stripSymbols = function(s) {
	var symbols = ",':;".split('');
	for (idx in symbols) {
		match_idx = s.indexOf(symbols[idx]);
		if (match_idx !== -1) {
			return s.substr(0, match_idx);
		} else {
			return s;
		}
	}
};


wordfinder.finder = function(id) {
	words = [];
	word_histogram = {};
	ps = $(id).children;
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
	return [words, word_histogram];
};

wordfinder.showTopResults = function(word_histogram) {
	for (word in word_histogram) {
		word_count = word_histogram[word];
		if (word_count > 1 && word && word[0].toUpperCase() == word[0] && word.length > 4) {
			console.log(word, word_count);
		}
	}
};

// right now this is limited to:
// http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2010/04/15/BAOE1CVFM5.DTL&tsp=1
// try with wordfinder.showTopResults(wordfinder.finder('fontprefs_bottom')[1]);

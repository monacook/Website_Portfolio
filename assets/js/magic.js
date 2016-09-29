var words = ["Developer"]
			el = document.getElementById('magic'),
			word_counter = 0,
			character_counter = 0;
			
		function updateText()
		{
			if(words[word_counter][character_counter] != ' '){
			el.innerHTML = el.innerHTML+words[word_counter][character_counter++]; 
		}else{
			el.innerHTML = el.innerHTML + '&nbsp';
			character_counter++;
		}
			if(character_counter === words[word_counter].length+1)
			{
				word_counter++; 	
				character_counter = 0  //start over with the first character of the word
				el.innerHTML = '';  //set the html to be blank
				//if we're displaying the last word, go back to the first word
				if(word_counter == words.length)
					word_counter = 0;
			}

		}
		setInterval(updateText, 200);


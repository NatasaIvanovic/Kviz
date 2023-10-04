fetch('quiz.json').then(function (response) {
    if (!response.ok) {
        throw Error("Error while reading file.");
    }

    return response.json();
    let {
        q1,
        q2,
        q3,
        q4
    } = quiz.quiz;
	
}).then(function(kviz){
	for(q in kviz.quiz){
		console.log(kviz.quiz[q]);
	}
}).then(function (kviz) {
    for (let i = 0; i < kviz.length; i++) 
{   
	//prvi kviz
	document.body.innerHTML 
	+= '<h2>' + kviz[i].q1.qustion + '</h2> <ul><li><label><input id="input" type="radio" value="${item}" name="q1"' + kviz[i].q1.options + '</label></li></ul>';
	//drugi kviz					
	document.body.innerHTML 
	+= '<h2>' + kviz[i].q2.qustion + '</h2> <ul><li><label><input id="input" type="radio" value="${item}" name="q2"' + kviz[i].q2.options + '</label></li></ul>';
	//treci kviz
	document.body.innerHTML 
	+= '<h2>' + kviz[i].q3.qustion + '</h2> <ul><li><label><input id="input" type="radio" value="${item}" name="q3"' + kviz[i].q3.options + '</label></li></ul>';
	//cetvrti kviz
	document.body.innerHTML 
	+= '<h2>' + kviz[i].q4.qustion + '</h2> <ul><li><label><input id="input" type="radio" value="${item}" name="q4"' + kviz[i].q4.options + '</label></li></ul>';
                }
				(() => {
					let radios = document.getElementsByName("q1");
					let val = localStorage.getItem('q1');
					for (let i = 0; i < radios.length; i++) {
						if (radios[i].value == val) {
							radios[i].checked = true;
						}
					}
					document.getElementsByName('q1').forEach(e => {
						e.onchange = () => {
							localStorage.setItem('q1', e.value);
						}
					})
				})();
				(() => {
					let radios = document.getElementsByName("q2");
					let val = localStorage.getItem('q2');
					for (let i = 0; i < radios.length; i++) {
						if (radios[i].value == val) {
							radios[i].checked = true;
						}
					}
					document.getElementsByName('q2').forEach(e => {
						e.onchange = () => {
							localStorage.setItem('q2', e.value);
						}
					})
				})();
				(() => {
					let radios = document.getElementsByName("q3");
					let val = localStorage.getItem('q3');
					for (let i = 0; i < radios.length; i++) {
						if (radios[i].value == val) {
							radios[i].checked = true;
						}
					}
					document.getElementsByName('q3').forEach(e => {
						e.onchange = () => {
							localStorage.setItem('q3', e.value);
						}
					})
				})();
				(() => {
					let radios = document.getElementsByName("q4");
					let val = localStorage.getItem('q4');
					for (let i = 0; i < radios.length; i++) {
						if (radios[i].value == val) {
							radios[i].checked = true;
						}
					}
					document.getElementsByName('q4').forEach(e => {
						e.onchange = () => {
							localStorage.setItem('q4', e.value);
						}
					})
				})();

				}).catch(function (err) {
					console.log('Fetch problem: ' + err.message);
				});
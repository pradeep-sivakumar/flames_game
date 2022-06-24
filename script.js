function fun(form) {
    var name = document.getElementById("mname").value;
    var a = name;
    name = name.toLowerCase();
    name = name.replaceAll(" ", "");

    var crushName = document.getElementById("cname").value;
    var b = crushName;
    crushName = crushName.toLowerCase()
    crushName = crushName.replaceAll(" ", "");
    var ts = new Array();
    var state = 0;
    var n1 = name.split('');
    var n2 = crushName.split('');
    for (var i = 0; i < name.length; i++) {
        for (var j = 0; j < crushName.length; j++) {
            if (n1[i] == n2[j]) {
                n1[i] = '-';
                n2[j] = '-';
                break;
            }
        }
    }
    for (const x of n1) {
        if (x != '-') {
            (ts.push(x) > 0);
        }
    }
    for (const x of n2) {
        if (x != '-') {
            (ts.push(x) > 0);
        }
    }

    var count = ts.length;
    var al = new Array();


    if(count>=1) 
    {
        var flames = ['F', 'L', 'A', 'M', 'E', 'S'];
        for (const x of flames) { (al.push(x) > 0); }
        while (al.length > 1) {
            var test = new Array();
            var index = state;
            for (var i = 0; i < count; i++) {
                if ((index) == al.length) {
                    index = 0;
                }
                (test.push(al[index++]) > 0);
            }
            for (let m = 0; m < al.length; m++) {
                if (test[count - 1] == al[m]) {
                    al.splice(m, 1);
                    state = m;
                    break;
                }
            }
        }
        var result = al[0];
        switch (result) {
            case 'F':
                alert(a + " and " + b + " will be friends.");
                break;
            case 'L':
                alert(a + " and " + b + " will love eachother.");
                break;
            case 'A':
                alert(a + " and " + b + " will get affection.");
                break;
            case 'M':
                alert(a + " and " + b + " will get married.");
                break;
            case 'E':
                alert(a + " and " + b + " will be enemies");
                break;
            case 'S':
                alert(a + " and " + b + " are siblings.");
                break;
        }
        
    }

    else
    {
        alert("These names are with same sequence :(\nPlease try with other names!")
    }
}

		function SubForm (){
			$.ajax({
				url:"https://api.apispreadsheets.com/data/RUwqIF8YREOwOW3C/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					// alert("Form Data Submitted :)")
				},
				error: function(){
					// alert("There was an error :(")
				}
			});
		}

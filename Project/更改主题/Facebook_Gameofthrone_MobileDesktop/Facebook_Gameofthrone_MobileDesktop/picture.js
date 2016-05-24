//cookie
var pic = document.getElementById('pic');
var others = document.getElementById('others');
//ajax
var xhr = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
xhr.open('GET', "https://graph.facebook.com/v2.6/me?access_token=CAACEdEose0cBAKtaxQuO3CPAZBW9DGGZB3GZAsbSkzPpZB9ZBKYnNetIZBJIB9KDZBZBnVjKlL9NxRC4uqDZBq2n62BtbqXPrOBfoZCoc8T36Sjt1H9l75swuj7ZCre73XDkZAJApGLpIpm3hYMJ23naaB6AyrZBrPZAdjPZCl9oHjb8RZBXER2BEdZBiK654NjrWEg2jdtHRjfWghu3JPZCrAh2B5pj6S", true);
//    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
//            console.log('成功');
        var msg = xhr.responseText;
//            console.log(msg);
        var json = eval('(' + msg + ')');
//            console.log(json.id);
        // user_pic
        xhr.open('GET', "https://graph.facebook.com/v2.6/"+json.id+"?fields=picture&access_token=CAACEdEose0cBACqSscQrGtG4U1imdGfTCJNkefL8jPJuFgckNUsZBsjXczO2btNPgsgtnBz6KZCyxuSgi9Y8bBCKGSIedkrZBYkiWoiwkJ4ZCjN43MwJSSoWeDpaCfSeSF2xDWjTZA2l3TdrMOjwZAngBPx2dsySnXEw2cLUeMSXi8ZAIflYA4UZBz6ghOKQ5HS0JMbkrxNQCgVcdYpaw8VC", true);
//    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
//                    console.log('成功');
                var data = xhr.responseText;
                var json_1 = eval('(' + data + ')');
//                    console.log(json_1.picture.data.url);
                var a = json_1.picture.data.url;
//                    pic.innerHTML = "<img src = " + '"' + a + '"' + "/>"
                //friend_pic
                xhr.open('GET',"https://graph.facebook.com/v2.6/me/friends?fields=picture&access_token=CAACEdEose0cBAAXjWTmhAFsjoQKg60CyLTrSLKCtZAgaa8NPGKCZBuYNaOya14i2gtmaXYQfF9fDYKwQitc2bOvA3epG42ZBdZAHZBau6ndPtyvevZCK7WYtEIuEZCI0ZAemHCWapPH0hBB65CQhdo3MUZBWUEcyroZBbhpFtVGg9lXalIB8nqm1wdE9GljSCa4M9GSJs2A81ujMP8CWo6ZAZCyr", true);
                //    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                xhr.send(null);
                xhr.onreadystatechange = function () {
                    if (xhr.status === 200 && xhr.readyState === 4) {
//                            console.log('成功');
                        var msg = xhr.responseText;
//            console.log(msg);
                        var json_2 = eval('(' + msg + ')');
//                  console.log(json_2.data);
                        var num = document.getElementById("num");
                        var m = parseInt(Math.random() * (json_2.data.length - 1));
                        var count = m / (json_2.data.length - 1);
                        if (count <= 1 / 6) {
                            var p_1 = 0;
                            var p_2 = 2;
                            var p_3 = 4;
                            var p_4 = 6;
                            var p_5 = 8;
                            var p_6 = 10;
                        } else if ((1 / 6) < count <= (2 / 6)) {
                            var p_1 = 1;
                            var p_2 = 3;
                            var p_3 = 5;
                            var p_4 = 7;
                            var p_5 = 9;
                            var p_6 = 10;
                        } else if ((2 / 6) < count <= (3 / 6)) {
                            var p_1 = 0;
                            var p_2 = 8;
                            var p_3 = 7;
                            var p_4 = 6;
                            var p_5 = 2;
                            var p_6 = 3;
                        } else if ((3 / 6) < count <= (4 / 6)) {
                            var p_1 = 8;
                            var p_2 = 9;
                            var p_3 = 2;
                            var p_4 = 4;
                            var p_5 = 6;
                            var p_6 = 10;
                        } else if ((4 / 6) < count <= (5 / 6)) {
                            var p_1 = 7;
                            var p_2 = 6;
                            var p_3 = 5;
                            var p_4 = 4;
                            var p_5 = 3;
                            var p_6 = 2;
                        } else {
                            var p_1 = 0;
                            var p_2 = 9;
                            var p_3 = 7;
                            var p_4 = 5;
                            var p_5 = 2;
                            var p_6 = 3;
                        }
//

                        others.innerHTML = "<img src = " + '"' + json_2.data[p_1].picture.data.url + '"' + "/>";
                        others.innerHTML += "<img src = " + '"' + json_2.data[p_2].picture.data.url + '"' + "/>";
                        others.innerHTML += "<img src = " + '"' + json_2.data[p_3].picture.data.url + '"' + "/>";
                        others.innerHTML += "<img src = " + '"' + json_2.data[p_4].picture.data.url + '"' + "/>";
                        others.innerHTML += "<img src = " + '"' + json_2.data[p_5].picture.data.url + '"' + "/>";
                        others.innerHTML += "<img src = " + '"' + json_2.data[p_6].picture.data.url + '"' + "/>";
                    }
                }
            }
        }
    }
}

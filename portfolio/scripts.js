
var box1 = document.getElementById('box1');
var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var heightbox1 = box1.style.height;
var heightsection1 = section1.style.height;
var heightsection2 = section2.style.height;
var heightsection3 = section3.style.height;

var skillsdata = document.getElementById("skillsdata");
var programdata = document.getElementById("programdata");
var strengthdata = document.getElementById("strengthdata");
var edudata = document.getElementById("edudata");
var expdata = document.getElementById("expdata");

var topskillsdata = skillsdata.style.top;
var topprogramdata = programdata.style.top;
var topstrengthdata = strengthdata.style.top;
var topedudata = edudata.style.top;
var topexpdata = expdata.style.top;

//Handling menu bar events.

window.addEventListener('click',()=>{
    var r1 = document.getElementById('r1');
    var r2 = document.getElementById('r2');
    var r3 = document.getElementById('r3');
    var prj = document.getElementById('prj');
    var rsm = document.getElementById('rsm');
    var prf = document.getElementById('prf');

    function changes(btn1,btn2,btn3){
        btn1.style.color='yellow';
        btn2.style.color='grey';
        btn3.style.color='grey';
        
    };
    
    if(r1.checked){
        box1.style.height = 0;
        section3.style.height = heightsection3;
        section1.style.height = 0;
        section2.style.height = 0;
        r2.checked=false;
        r3.checked=false;
        changes(prj,rsm,prf);

        skillsdata.style.top = "0em";
        programdata.style.top = "0em";
        strengthdata.style.top = "0em";   
        edudata.style.top = "0em";  
        expdata.style.top = "0em";
    }
    else if(r2.checked){
        box1.style.height = 0;
        section2.style.height = heightsection2;
        section1.style.height = 0;
        section3.style.height = 0;
        r1.checked=false;
        r3.checked=false;
        changes(rsm,prf,prj);
        prj.style.color='white';
    
        skillsdata.style.top = "65em";
        programdata.style.top = "65em";
        strengthdata.style.top = "65em";   
        edudata.style.top = "65em";  
        expdata.style.top = "65em";
    }
    else if(r3.checked){
        box1.style.height = 0;
        section1.style.height = heightsection1;
        section3.style.height = 0;
        section2.style.height = 0;
        r1.checked=false;
        r2.checked=false;
        changes(prf,prj,rsm);
        rsm.style.color='white';
        prj.style.color='white';

        skillsdata.style.top = "0em";
        programdata.style.top = "0em";
        strengthdata.style.top = "0em";   
        edudata.style.top = "0em";  
        expdata.style.top = "0em";
    }
    else if(r1.checked===false && r2.checked===false && r3.checked===false){
        box1.style.height = heightbox1;
        section1.style.height = heightsection1;
        section2.style.height = heightsection2;
        section3.style.height = heightsection3;
        prf.style.color='white';
        rsm.style.color='white';
        prj.style.color='white';

        skillsdata.style.top = topskillsdata;
        programdata.style.top = topprogramdata;
        strengthdata.style.top = topstrengthdata;   
        edudata.style.top = topedudata;  
        expdata.style.top = topexpdata;
    };
});

var resume = document.getElementById("resume");
var skills = document.getElementById("skills");
var program = document.getElementById("program");
var strength = document.getElementById("strength");
var edu = document.getElementById("edu");
var exp = document.getElementById("exp");
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');

var sk_li_1 = document.getElementById("sk_li_1");
var sk_li_2 = document.getElementById("sk_li_2");
var sk_li_3 = document.getElementById("sk_li_3");
var sk_li_4 = document.getElementById("sk_li_4");
var sk_li_5 = document.getElementById("sk_li_5");
var sk_li_6 = document.getElementById("sk_li_6");
var sk_li_7 = document.getElementById("sk_li_7");
var sk_li_8 = document.getElementById("sk_li_8");

//handling the book events in section 2.

skills.addEventListener("mouseenter", ()=>{
    skills.style.transform = 'rotatex(0deg)';
    page1.style.transform = "rotatey(0deg)";
    page1.style.transform = "translatex(-50%)";
    page1.style.transition = 'all ease 1s';
    page2.style.transform = "rotatey(0deg)";
    page2.style.transform = "translatex(50%)";
    page2.style.transition = 'all ease 1s';

    var func0 = window.setTimeout(()=>{skillsdata.style.visibility='visible';},1000);

    var func1 = setTimeout(()=>{sk_li_1.style.visibility='visible';},1100);
    var func2 = setTimeout(()=>{sk_li_2.style.visibility='visible';},1200);
    var func3 = setTimeout(()=>{sk_li_3.style.visibility='visible';},1300);
    var func4 = setTimeout(()=>{sk_li_4.style.visibility='visible';},1400);
    var func5 = setTimeout(()=>{sk_li_5.style.visibility='visible';},1500);
    var func6 = setTimeout(()=>{sk_li_6.style.visibility='visible';},1600);
    var func7 = setTimeout(()=>{sk_li_7.style.visibility='visible';},1700);
    var func8 = setTimeout(()=>{sk_li_8.style.visibility='visible';},1800);

    skills.addEventListener("mouseout", ()=>{
        clearTimeout(func0);
    
        clearTimeout(func1);
        clearTimeout(func2);
        clearTimeout(func3);
        clearTimeout(func4);
        clearTimeout(func5);
        clearTimeout(func6);
        clearTimeout(func7);
        clearTimeout(func8);
    
        skills.style.transform = "rotatex(30deg)";
        page1.style.transform = "translatex(0%)";
        page2.style.transform = "translatex(0%)";
        page1.style.transform = "rotatey(90deg)";
        page2.style.transform = "rotatey(-90deg)";
        skillsdata.style.visibility='hidden';
        sk_li_1.style.visibility='hidden';
        sk_li_2.style.visibility='hidden';
        sk_li_3.style.visibility='hidden';
        sk_li_4.style.visibility='hidden';
        sk_li_5.style.visibility='hidden';
        sk_li_6.style.visibility='hidden';
        sk_li_7.style.visibility='hidden';
        sk_li_8.style.visibility='hidden';
    });
});


var python = document.getElementById("python");
var mysql = document.getElementById("mysql");
var html_css = document.getElementById("html_css");
var javascript = document.getElementById("javascript");
var java = document.getElementById("java");

program.addEventListener("mouseenter", ()=>{
    program.style.transform = 'rotatex(0deg)';
    page1.style.transform = "rotatey(0deg)";
    page1.style.transform = "translatex(-50%)";
    page1.style.transition = 'all ease 1s';
    page2.style.transform = "rotatey(0deg)";
    page2.style.transform = "translatex(50%)";
    page2.style.transition = 'all ease 1s';
    var func10 = window.setTimeout(()=>{
        programdata.style.visibility='visible';
        python.style.transition = 'all ease 2s';
        mysql.style.transition = 'all ease 2s';
        html_css.style.transition = 'all ease 2s';
        javascript.style.transition = 'all ease 2s';
        java.style.transition = 'all ease 2s';
},1000);
    var func11 = window.setTimeout(()=>{
        python.style.width = '295px';
        mysql.style.width = '270px';
        html_css.style.width = '220px';
        javascript.style.width = '180px';
        java.style.width = '20px';
    },1200);

    program.addEventListener("mouseout", ()=>{
        program.style.transform = "rotatex(30deg)";
        page1.style.transform = "translatex(0%)";
        page2.style.transform = "translatex(0%)";
        page1.style.transform = "rotatey(90deg)";
        page2.style.transform = "rotatey(-90deg)";
        programdata.style.visibility='hidden';
        python.style.transition = 'all ease 0s';
        mysql.style.transition = 'all ease 0s';
        html_css.style.transition = 'all ease 0s';
        javascript.style.transition = 'all ease 0s';
        java.style.transition = 'all ease 0s';
    
        python.style.width = '0px';
        mysql.style.width = '0px';
        html_css.style.width = '0px';
        javascript.style.width = '0px';
        java.style.width = '0px';
    
        clearTimeout(func10);
        clearTimeout(func11);
    });

});

strength.addEventListener("mouseenter", ()=>{
    strength.style.transform = 'rotatex(0deg)';
    page1.style.transform = "rotatey(0deg)";
    page1.style.transform = "translatex(-50%)";
    page1.style.transition = 'all ease 1s';
    page2.style.transform = "rotatey(0deg)";
    page2.style.transform = "translatex(50%)";
    page2.style.transition = 'all ease 1s';
    var func21 = window.setTimeout(()=>{strengthdata.style.visibility='visible';},1000);

    strength.addEventListener("mouseout", ()=>{
        strength.style.transform = "rotatex(30deg)";
        page1.style.transform = "translatex(0%)";
        page2.style.transform = "translatex(0%)";
        page1.style.transform = "rotatey(90deg)";
        page2.style.transform = "rotatey(-90deg)";
        strengthdata.style.visibility='hidden';
        clearTimeout(func21);
    });
});


edu.addEventListener("mouseenter", ()=>{
    edu.style.transform = 'rotatex(0deg)';
    page1.style.transform = "rotatey(0deg)";
    page1.style.transform = "translatex(-50%)";
    page1.style.transition = 'all ease 1s';
    page2.style.transform = "rotatey(0deg)";
    page2.style.transform = "translatex(50%)";
    page2.style.transition = 'all ease 1s';
    var func31 = window.setTimeout(()=>{edudata.style.visibility='visible';},1000);

    edu.addEventListener("mouseout", ()=>{
        edu.style.transform = "rotatex(30deg)";
        page1.style.transform = "translatex(0%)";
        page2.style.transform = "translatex(0%)";
        page1.style.transform = "rotatey(90deg)";
        page2.style.transform = "rotatey(-90deg)";
        edudata.style.visibility='hidden';
        clearTimeout(func31);
    });
});


exp.addEventListener("mouseenter", ()=>{
    exp.style.transform = 'rotatex(0deg)';
    page1.style.transform = "rotatey(0deg)";
    page1.style.transform = "translatex(-50%)";
    page1.style.transition = 'all ease 1s';
    page2.style.transform = "rotatey(0deg)";
    page2.style.transform = "translatex(50%)";
    page2.style.transition = 'all ease 1s';
    var i = 0;
    var j = 0;
    var k = 0;
    var yt_para = document.getElementById('yt_para');
    var real_prj_para = document.getElementById('real_prj_para');
    var ent_para = document.getElementById('ent_para');
    yt_para.innerHTML = "";
    real_prj_para.innerHTML = "";
    ent_para.innerHTML = "";
    var func41 = window.setTimeout(()=>{
        expdata.style.visibility='visible';
        var yt_datas = "Educational channel based on programming including with tips and tricks related to that such as how to develop full web app on android phone, how to run database server on android phone,etc.1000+ subscribers and 50+ videos.";
        var real_prj_datas = "More details in project section.";
        var ent_datas = "comming soon";

        var yt_para_interval = setInterval(()=>{
            yt_para.innerHTML = yt_datas.slice(0,i);
            if(yt_datas.slice(0,i)===yt_datas){clearInterval(yt_para_interval);};
            i++;
            exp.addEventListener("mouseout", ()=>{clearInterval(yt_para_interval);});

        },40);

        var real_prj_para_interval = setInterval(()=>{
            real_prj_para.innerHTML = real_prj_datas.slice(0,i);
            if(real_prj_datas.slice(0,i)===real_prj_datas){clearInterval(real_prj_para_interval);};
            i++;
            exp.addEventListener("mouseout", ()=>{clearInterval(real_prj_para_interval);});

        },40);

        var ent_para_interval = setInterval(()=>{
            ent_para.innerHTML = ent_datas.slice(0,i);
            if(ent_datas.slice(0,i)===ent_datas){clearInterval(ent_para_interval);};
            i++;
            exp.addEventListener("mouseout", ()=>{clearInterval(ent_para_interval);});

        },40);
    },1000);
    
    exp.addEventListener("mouseout", ()=>{
        exp.style.transform = "rotatex(30deg)";
        page1.style.transform = "translatex(0%)";
        page2.style.transform = "translatex(0%)";
        page1.style.transform = "rotatey(90deg)";
        page2.style.transform = "rotatey(-90deg)";
        expdata.style.visibility='hidden';
        clearTimeout(func41);
    });
});

//handling the profile events in section 1.

var linkedin = document.getElementById("linkedin");
var git = document.getElementById("git");
var lngit = document.getElementById("lngit");

linkedin.addEventListener("mouseover", ()=>{
    lngit.style.width = '25em';
    lngit.style.height = '25em';
    lngit.style.backgroundColor = 'rgb(53, 134, 201)';
});

linkedin.addEventListener("pointerleave", ()=>{
    lngit.style.width = '0em';
    lngit.style.height = '0em';
    lngit.style.backgroundColor = 'transparent'
});

git.addEventListener("mouseover", ()=>{
    lngit.style.width = '25em';
    lngit.style.height = '25em';
    lngit.style.backgroundColor = 'black';
});

git.addEventListener("pointerleave", ()=>{
    lngit.style.width = '0em';
    lngit.style.height = '0em';
    lngit.style.backgroundColor = 'transparent'
});

//adding events in projects

var project_1 = document.getElementById('project_1');
var project_2 = document.getElementById('project_2');
var project_3 = document.getElementById('project_3');
var project_4 = document.getElementById('project_4');
var project_5 = document.getElementById('project_5');

var project_01 = document.getElementById('project_01');
var project_02 = document.getElementById('project_02');
var project_03 = document.getElementById('project_03');
var project_04 = document.getElementById('project_04');
var project_05 = document.getElementById('project_05');

project_01.addEventListener('mouseenter', ()=>{
    project_1.style.width = '42em';
    project_01.addEventListener('mouseleave', ()=>{
        project_1.style.width = '20em';
    });

});

project_02.addEventListener('mouseenter', ()=>{
    project_2.style.width = '42em';
    project_02.addEventListener('mouseleave', ()=>{
        project_2.style.width = '20em';
    });

});

project_03.addEventListener('mouseenter', ()=>{
    project_3.style.width = '42em';
    project_03.addEventListener('mouseleave', ()=>{
        project_3.style.width = '20em';
    });

});

project_04.addEventListener('mouseenter', ()=>{
    project_4.style.width = '42em';
    project_04.addEventListener('mouseleave', ()=>{
        project_4.style.width = '20em';
    });

});

project_05.addEventListener('mouseenter', ()=>{
    project_5.style.width = '42em';
    project_05.addEventListener('mouseleave', ()=>{
        project_5.style.width = '20em';
    });

});
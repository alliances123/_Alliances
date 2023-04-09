let borderbottomreload2  = document.querySelector('.borderbottomreload2');
let borderbottomreload  = document.querySelector('.borderbottomreload');
let header = document.querySelector('.header');

if(scrollY >= 1){
    header.classList.add('active');
    borderbottomreload.classList.add('active');
    borderbottomreload2.classList.add('active');
}else{
    document.querySelector('header').classList.remove('active');
    borderbottomreload.classList.remove('active');
    borderbottomreload2.classList.remove('active');
};


let cats = document.querySelector(".cats");
cats.onclick = () =>  {
    window.scrollTo({
    top: 10000,
    behavior:"smooth",
});
};

let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let list4 = document.querySelector('.list4');
let list5 = document.querySelector('.list5');
let list6 = document.querySelector('.list6');
let list7 = document.querySelector('.list7');
let page4 = document.querySelector('.page4');



list1.onclick = () => {
    list1.classList.add('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    window.scrollTo({
        top:"0",
        behavior:"smooth",
    });
    page3.classList.remove('active');
    page2.classList.remove('active');
    page4.classList.remove('active');
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
}

list2.onclick = () => {
    list1.classList.remove('active');
    list2.classList.add('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    page3.classList.add('active');
    page2.classList.remove('active');
    page4.classList.remove('active');
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
}

list3.onclick = () => {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.add('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    page3.classList.remove('active');
    page2.classList.add('active');
    page4.classList.remove('active');
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
}

list4.onclick = () => {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.add('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    page4.classList.add('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    });
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
};

list5.onclick = () => {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.add('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    page4.classList.remove('active');
    bodypage2kollchoose2.classList.add('active');
    list5.classList.add('active');
    list1.classList.remove('active');
    body.classList.add('gera');
    window.scrollTo({
        top: 0,
    });
};

list6.onclick = () => {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.add('active');
    list7.classList.remove('active');
    body.classList.add('gera');
    bodypage2kollchoose2.classList.add('active');
    window.scrollTo({
        top: 0,
    });
};

list7.onclick = () => {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.add('active');
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
};



let btnSignin = document.querySelector('.btnSignin');
let btnSignUp500 = document.querySelector('.btnSignUp500');
let box = document.querySelector('.box');
let container = document.querySelector('.test');
let contentcontainer = document.querySelector('.contentcontainer');
let tasgeel = document.querySelector('.tasgeel');
let movediv = document.querySelector('.movediv');
let Sig = document.querySelector(".Sig");
let mt = document.querySelector(".mt");
let Sigu = document.querySelector(".Sigu");
let x = document.querySelector("#x");
let x2 = document.querySelector("#x2");
let kollsignin = document.querySelector(".kollsignin");
let kalam = document.querySelector(".kalam");
let part4 = document.querySelector(".part4");
let kala = document.querySelector(".kala");
let kalam2 = document.querySelector(".kalam2");
let kala2 = document.querySelector(".kala2");
let ll = document.querySelector(".ll");
let boton = document.querySelector(".klma");
let donthaveanaccount = document.querySelector(".donthaveanaccount");
let signupcontainer4 = document.querySelector(".signupcontainer4");
let signincontainer4 = document.querySelector(".signincontainer4");
let haveanaccount = document.querySelector(".haveanaccount");
let check1 = document.querySelector(".check1");
let check2 = document.querySelector(".check2");
let animateheadercontainer4 = document.querySelector(".animateheadercontainer4");
let licontainer4Signin = document.querySelector(".licontainer4Signin");
let licontainer4SignUp = document.querySelector(".licontainer4SignUp");
let page3 = document.querySelector(".page3");
let wagehat = document.querySelector('.wagehat');
let bodypage3 = document.querySelector('.bodypage3.active');
let closepage3 = document.getElementById('closepage3');
let zrrpage3 = document.getElementById('zrrpage3');
let li2 = document.querySelector('.li2');
let down = document.querySelector('.down500');
let imgcontainer1 = document.querySelector('#imgcontainer1');
let ta3alla = document.querySelector('.ta3alla');
let pagel = document.querySelector('.pagel');
let text = document.querySelector('.text');
let body = document.querySelector('body');
let imgcontainer1black = document.querySelector('.imgcontainer1black');
let navigation = document.querySelector('.navigation');
let imagepagel23 = document.querySelector('#imagepagel2');
let imagepagel1 = document.querySelector('#imagepagel1');
let movemood = document.querySelector('.movemood');
let light = document.querySelector('.light');
let black = document.querySelector('.black1');
let imagepagel3 = document.querySelector('#imagepagel3');
let sign = document.querySelector('#sign');
let page2 = document.querySelector('.page2');
let page2kollchoose2 = document.querySelector('.page2kollchoose2');
let iconup = document.querySelector('.iconup');
let geraleft = document.querySelector('.geraleft');


window.onscroll = () => {
    let value = scrollY;
    text.style.top = value*3  + 'px';
    pagel.style.top = -value + 'px';
    imagepagel3.style.left = value *3 + 'px';
    borderbottomreload2.style.right = value *1.1 + 'px';
    imagepagel1.style.right = -value *3 + 'px';
    imagepagel23.style.left =  -value *3 + 'px';
    if (scrollY >= 100){
        iconup.classList.add('active')
    }else{
        iconup.classList.remove('active');
    };
    if (scrollY >=500){
        body.classList.add('active');
    }else{
        body.classList.remove('active');
    };
    if(scrollY >= 200){
        text.style.display = ('none');
    }else{
        text.style.display = ('block');
    };
    if(scrollY >= 11){
        body.classList.add('active');
    }else{
        body.classList.remove('active');
    };
    if(scrollY <= 200){
        navigation.classList.remove('active');
    };
}


document.querySelector('.title2').onclick = function() {
    page3.classList.add('active');
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


let items = document.querySelector('.items');
let btn = document.querySelector('#btn');
let tawasl = document.querySelector('.tawasl');

items.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    page2.classList.remove('active');
    text.style.display = ('block');
    nahn.style.display = ("block");
    nahnx.style.display = ("block");
    imagepagel1.style.display = ("block");
    imagepagel2.style.display = ("block");
    imgcontainer1.style.display = ("block");
    ta3alla.style.display = ("block");
    document.querySelector('.imgcontainer1').style.display = ("flex");
    document.querySelector('.kollwindow').style.display = ("flex");
    page2.classList.remove('active');
    page3.classList.remove('active');
    page4.classList.remove('active');
    page2kollchoose2.classList.remove('active');
    body.classList.remove('gera');
    list1.classList.add('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    window.scrollTo({
        top:"0",
        behavior:"smooth",
    });
    page3.classList.remove('active');
    page2.classList.remove('active');
    page4.classList.remove('active');
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
};

let barmga1 = document.querySelector(".barmga1");

barmga1.onclick = () =>  {
    page2.classList.add('active');
    nahn.style.display = ("none");
    nahnx.style.display = ("none");
    imagepagel1.style.display = ("none");
    imagepagel2.style.display = ("none");
    imgcontainer1.style.display = ("none");
    ta3alla.style.display = ("none");
    document.querySelector('.imgcontainer1').style.display = ("none");
    document.querySelector('.kollwindow').style.display = ("none");
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
    bodypage2kollchoose2.classList.remove('active');
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.add('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
};

btn.onclick = () => {
    window.scrollTo({
        top: 1438,
        behavior: 'smooth',
    });
    bodypage2kollchoose2.classList.remove('active');
    body.classList.remove('gera')
};

tawasl.onclick = () => {
    window.scrollTo({
        top: 1000000000000000,
        behavior: 'smooth',
    });
    page2kollchoose2.classList.remove('active')
    body.classList.remove('gera')
    page2.classList.remove('active');
    text.style.display = ('block');
    nahn.style.display = ("block");
    nahnx.style.display = ("block");
    imagepagel1.style.display = ("block");
    imagepagel2.style.display = ("block");
    imgcontainer1.style.display = ("block");
    ta3alla.style.display = ("block");
    document.querySelector('.imgcontainer1').style.display = ("flex");
    document.querySelector('.kollwindow').style.display = ("flex");
    list1.classList.add('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    body.classList.remove('gera');
    bodypage2kollchoose2.classList.remove('active');
};


let ulcontainer1page3 = document.querySelector('#ulcontainer1page3');
let barpre = document.querySelector('.barpre');
let barpreclose = document.querySelector('.barpreclose');


barpre.onclick = () => {
    ulcontainer1page3.classList.add('active');
    barpre.classList.add('active');
    barpreclose.classList.add('active');
};

barpreclose.onclick = () => {
    ulcontainer1page3.classList.remove('active');
    barpre.classList.remove('active');
    barpreclose.classList.remove('active');
};



document.querySelector('#sign').onclick = () => {
    page2.classList.add('active')
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

document.querySelector('#home').onclick = () => {
    page2.classList.remove('active');
};


check2.onclick = () => {
    signupcontainer4.classList.add('active');
    signincontainer4.classList.add('active');
    check1.classList.add('active');
    check2.classList.add('active');
    animateheadercontainer4.classList.add('active');
};

check1.onclick = () => {
    signincontainer4.classList.remove('active');
    signupcontainer4.classList.remove('active');
    check1.classList.remove('active');
    check2.classList.remove('active');
    animateheadercontainer4.classList.remove('active');
};




let kollchoose2 = document.querySelector('.kollchoose2');
let bodypage2kollchoose2 = document.querySelector('.page2kollchoose2');
let kollchoose1 = document.querySelector('.kollchoose1');
let nahn = document.querySelector('#nahn');
let nahnx = document.querySelector('.nahn');
let geraphic = document.querySelector('.geraphic');


kollchoose1.onclick = () => {
    page2.classList.add('active');
    nahn.style.display = ("none");
    nahnx.style.display = ("none");
    imagepagel1.style.display = ("none");
    imagepagel2.style.display = ("none");
    imgcontainer1.style.display = ("none");
    ta3alla.style.display = ("none");
    document.querySelector('.imgcontainer1').style.display = ("none");
    document.querySelector('.kollwindow').style.display = ("none");
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
}

geraphic.onclick = () =>  {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.add('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    page3.classList.remove('active');
    page2.classList.remove('active');
    page4.classList.remove('active');
    body.classList.add('gera');
    bodypage2kollchoose2.classList.add('active');
    window.scrollTo({
        top:0,
    });
};


kollchoose2.onclick = () => {
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.add('active');
    list6.classList.remove('active');
    list7.classList.remove('active');
    page3.classList.remove('active');
    page2.classList.remove('active');
    page4.classList.remove('active');
    body.classList.add('gera');
    bodypage2kollchoose2.classList.add('active');
    window.scrollTo({
        top:0,
    });
};
    
let bars = document.querySelector("#barsclick");

bars.onclick = () => {
    navigation.classList.toggle('active');
    document.querySelector('header').classList.add('active');
    borderbottomreload.classList.add('active');
    borderbottomreload2.classList.add('active');
};



let l2 = document.querySelector('.l2');
let btnl500 = document.querySelector('.btnl500');
let kollsignin2 = document.querySelector('.kollsignin2');
let x22 = document.querySelector('#x22');
let x12 = document.querySelector('#x12');


btnl500.onclick = () =>  {
    l2.classList.add('active');
    kollsignin2.classList.add('active');
    x12.classList.add('active');
    kalam2.classList.add('active');
};




let sig2 = document.querySelector(".Sig2");
let part42 = document.querySelector(".part42");
    sig2.onclick = () =>  {
    kalam2.classList.remove('active');
    l2.classList.remove('active');
    l2.classList.add('hopa');
    kollsignin2.classList.remove('active');
    kollsignin2.classList.add('hopa');
    kala2.classList.add('active');
    part42.classList.add('active');
    x22.classList.add('active');
    x12.classList.remove('active');
};


let sigu2 = document.querySelector(".Sigu2");
sigu2.onclick = () =>  {
    kalam2.classList.add('active');
    l2.classList.add('active');
    l2.classList.remove('hopa');
    kollsignin2.classList.add('active');
    kollsignin2.classList.remove('hopa');
    kala2.classList.remove('active');
    part42.classList.remove('active');
    x22.classList.remove('active');
    x12.classList.add('active');
};

x22.onclick = () =>  {
    kalam2.classList.remove('active');
    l2.classList.remove('active');
    l2.classList.remove('hopa');
    kollsignin2.classList.remove('active');
    kollsignin2.classList.remove('hopa');
    kala2.classList.remove('active');
    part42.classList.remove('active');
    x22.classList.remove('active');
}

x12.onclick = () =>  {
    kalam2.classList.remove('active');
    x12.classList.remove('active');
    l2.classList.remove('active');
    l2.classList.remove('hopa');
    kollsignin2.classList.remove('active');
    kollsignin2.classList.remove('hopa');
    kala2.classList.remove('active');
    part42.classList.remove('active');
    x22.classList.remove('active');
    l2.classList.remove('active');
    kollsignin2.classList.remove('active');
    kalam2.classList.remove('active');
};

// mood

boton.onclick = () => {
    mt.classList.add("active");
    mt.classList.remove("kk");
    kollsignin.classList.add("active");
    kalam.classList.add("active");
    kalam.classList.remove("hopa");
    x.classList.add("active");
    boton.classList.add('active');
    l2.classList.add('active');
    document.querySelector('header').classList.add('active');
    borderbottomreload.classList.add('active');
    borderbottomreload2.classList.add('active');
};


let koll2 = document.querySelector('.koll2');
let koll500 = document.querySelector('.koll500');




btnSignin.onclick = () => {
    box.classList.add("active");
    box.classList.add("hopa");
    box.classList.remove("tese");
    container.classList.add("active");
    container.classList.remove("hopa");
    contentcontainer.classList.add("active");
    contentcontainer.classList.remove("hopa");
    document.querySelector('.koll2').classList.add("active");
    document.querySelector('.koll500').classList.add("active");
};


btnSignUp500.onclick = () => {
    box.classList.remove("active");
    box.classList.remove("hopa");
    box.classList.add("tese");
    container.classList.remove("active");
    container.classList.remove("hopa");
    contentcontainer.classList.remove("active");
    contentcontainer.classList.add("hopa");
    koll2.classList.remove("active");
    document.querySelector('.koll500').classList.remove("active");
};



wagehat.onclick = () => {
    movediv.classList.add('active');
    page3.classList.remove('hopa');
    page3.classList.add('active');
    page2.classList.remove('active');
    page2.classList.add('hopa');
}


tasgeel.onclick = () => {
    movediv.classList.remove('active');
    page3.classList.remove('active');
    page2.classList.add('active');
    page2.classList.remove('hopa');
    page3.classList.add('hopa');
}




Sigu.onclick = () => {
    mt.classList.remove("hopa");
    kalam.classList.remove("hopa");
    mt.classList.add("active");
    kalam.classList.remove("nn");
    part4.classList.remove("active");
    kala.classList.remove("active");
    x.classList.add("active");
    x2.classList.remove("active");
    kalam.classList.add('active');
    kollsignin.classList.remove('nn');
}

Sig.onclick = () => {
    mt.classList.add("hopa");
    mt.classList.remove("active");
    kalam.classList.remove("nn");
    kalam.classList.add("hopa");
    part4.classList.add("active");
    kala.classList.add("active");
    x.classList.remove("active");
    x2.classList.add("active");
    kollsignin.classList.add('nn');
}

x.onclick = () => {
    x.classList.remove("active");
    kollsignin.classList.remove("active");
    mt.classList.remove("active");
    kalam.classList.remove("hopa");
    kalam.classList.remove("active");
    boton.classList.remove('active');
}

x2.onclick = () => {
    mt.classList.add("kk");
    mt.classList.remove("hopa");
    mt.classList.remove("active");
    kollsignin.classList.remove("active");
    kala.classList.remove("active");
    part4.classList.remove("active");
    x2.classList.remove("active");
    kalam.classList.remove("active");
    boton.classList.remove('active');
    kala.classList.remove('hopa');
}


raesy.onclick = () => {
    page2.classList.remove('active');
    text.style.display = ('block');
    nahn.style.display = ("block");
    nahnx.style.display = ("block");
    imagepagel1.style.display = ("block");
    imagepagel2.style.display = ("block");
    imgcontainer1.style.display = ("block");
    ta3alla.style.display = ("block");
    document.querySelector('.imgcontainer1').style.display = ("block");
    document.querySelector('.kollwindow').style.display = ("flex");
    page2.classList.remove('active');
    page3.classList.remove('active');
    page4.classList.remove('active');
}

window.onscroll = () => {
    let value = scrollY;
    text.style.top = value*3  + 'px';
    pagel.style.top = -value + 'px';
    imagepagel3.style.left = value *3 + 'px';
    borderbottomreload2.style.right = value *1.1 + 'px';
    imagepagel1.style.right = -value *3 + 'px';
    imagepagel2.style.left =  -value *3 + 'px';

    if(scrollY >= 1){
        header.classList.add('active');
        borderbottomreload.classList.add('active');
        borderbottomreload2.classList.add('active');
    }else{
        header.classList.remove('active')
        borderbottomreload.classList.remove('active');
        borderbottomreload2.classList.remove('active');
    }
    if (scrollY >= 100){
        iconup.classList.add('active');
    }else{
        iconup.classList.remove('active');
    }
    if (scrollY >=500){
        body.classList.add('active');
    }else{
        body.classList.remove('active');
    }

    if(scrollY >= 200){
        text.style.display = ('none');
    }else{
        text.style.display = ('block');
    }
    if(scrollY >= 11){
        body.classList.add('active');
    }else{
        body.classList.remove('active');
    }
    if(scrollY <= 200){
        navigation.classList.remove('active');
    }
}

iconup.onclick = () => {
    window.scrollTo({
    top:"0",
    behavior:"smooth",
});
};

down.onclick = () => {
        li2.classList.toggle('active');
    }

closepage3.onclick = () => {
    bodypage3.classList.remove('active');
}

zrrpage3.onclick = () => {
    bodypage3.classList.add('active');
}

donthaveanaccount.onclick = () => {
    signupcontainer4.classList.add('active');
    signincontainer4.classList.add('active');
    check1.classList.add('active');
    check2.classList.add('active');
    animateheadercontainer4.classList.add('active');
}

haveanaccount.onclick = () => {
    signincontainer4.classList.remove('active');
    signupcontainer4.classList.remove('active');
    check1.classList.remove('active');
    check2.classList.remove('active');
    animateheadercontainer4.classList.remove('active');
}

document.querySelector(".licontainer4SignUp").onclick = function() {
    signupcontainer4.classList.add('active');
    signincontainer4.classList.add('active');
    check1.classList.add('active');
    check2.classList.add('active');
    animateheadercontainer4.classList.add('active');
}


licontainer4Signin.onclick = function() {
    signupcontainer4.classList.remove('active');
    signincontainer4.classList.remove('active');
    check1.classList.remove('active');
    check2.classList.remove('active');
    animateheadercontainer4.classList.remove('active');
}

let fady = document.querySelector('.fady');
let close = document.querySelector('#close');
let kalamfady = document.querySelector(".kalamfady");
let zrr = document.querySelector(".zrr");
let home2 = document.querySelector(".home2");
let header2 = document.querySelector(".header2");
let kollshoglgera = document.querySelector(".kollshoglgera");
let barmga = document.querySelector(".barmga");
let footer = document.querySelector("footer");
let koll = document.querySelector("koll");

home2.onclick = () => {
    page3.classList.remove('active');
    movediv.classList.remove('active');
    page3.classList.remove('hopa');
    page2.classList.remove('hopa');
    page2.classList.remove('active');
    header2.classList.remove('active');
    kollshoglgera.classList.remove('active');
    barmga.classList.remove('active');
    footer.classList.remove('active');
    koll.classList.remove('active');
    page2.classList.remove('hopa');
}



let items2 = document.querySelector('.items2');
items2.onclick = function ()  {
    window.scrollTo({
        top: 100000000,
        behavior:"smooth" ,
    });
    page2.classList.remove('active');
    page3.classList.remove('active');
};


btn.onclick =  () => {
    window.scrollTo({
        top: 1400,
        behavior: "smooth",
    })
};



zrr.onclick =  () => {
    fady.classList.remove('active');
    kalamfady.classList.remove('active');
    close.classList.remove('active');
    page2.classList.add('active');
    header2.classList.add('active');
    kollshoglgera.classList.add('active');
    barmga.classList.add('active');
    footer.classList.add('active');
    koll.classList.add('active');
};



close.onclick =  () => {
    fady.classList.remove('active');
    close.classList.remove('active');
    kalamfady.classList.remove('active');
};




let home = document.querySelector(".home");
home.onclick = function ()  {
    window.scrollTo({
    top: 0,
    behavior:"smooth",
});
};

let programming = document.querySelector("#programming");








let list = document.querySelector('.list');
    function activelink(){
        list.forEach((item) => 
        this.classList.add('active'));
    }
        list.forEach((item) =>
        item.addEvetlistener('click, activelink'));

Sigu2.onclick = () => {
    l2.classList.remove('hopa');
    l2.classList.add('active');
    kalam2.classList.remove('nn');
    part42.classList.remove('nn');
    part42.classList.remove('active');
    kollsignin2.classList.remove('nn');
    kala2.classList.remove('active');
    x12.classList.add('active');
    x22.classList.remove('active');
}

x12.onclick = () => {
    l2.classList.remove('active');
    btnl500.classList.remove('active');
    kollsignin2.classList.remove('active');
    x12.classList.remove('active');
    kalam2.classList.remove('active');
}

x22.onclick = () => {
    x22.classList.remove('active');
    l2.classList.remove('active');
    l2.classList.remove('nn');
    l2.classList.remove('hopa');
    btnl500.classList.remove('active');
    part42.classList.remove('active');
    part42.classList.remove('nn');
    kollsignin2.classList.remove('active');
    kollsignin2.classList.remove('nn');
    x12.classList.remove('active');
    kalam2.classList.remove('active');
    kalam2.classList.remove('nn');
    kala2.classList.remove('active');
    kala2.classList.add('mm');
    l2.classList.add('mm');
}


let container500 = document.querySelector('.container500');
let empty = document.querySelector('.empty');
let emptydiv = document.querySelector('.emptydiv');

empty.onclick = () => {
    empty.classList.add("active");
    emptydiv.classList.add("active");
};

emptydiv.onclick = () => {
    empty.classList.remove("active");
    emptydiv.classList.add("hopa");
};

let dogs = document.querySelector(".dogs");
dogs.onclick = function ()  {
    window.scrollTo({
        top: 100000,
        behavior:"smooth",
    });
};
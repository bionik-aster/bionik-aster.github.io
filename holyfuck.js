function cockandballs() {
    var messages = [
      `i dont think am ok`,
      `dude can you like shut the fuck up`,
      `h`,
      `technoblade never dies`,
      `stay in school kids it makes you better at pvp`,
      `corn :fire:`,
      `ohio??`,
      `bench communist republic`,
      `bench communist republic`,
      `am not a commie i think`,
      `also try terraria and minecraft`,
      `texting people is my hobby, harrassing them is my passion`,
      `also try cbt`,
      `also try cbt x2`,
      `also try cRt`,
      `who starts a conversation like that? i just sat down!`,
      `did you know the only joke my mother made was 14 years ago`,
      `alive, alert and causing concern`,
      `dead, aloof, and still causing concern`,
      `the only soul i need is the one to find me the will to live`,
      `made in china`,
      `what if i put you in a jar`,
        `truly a quote of all time`,
        `cannibalism is a viable way of reducing the overpopulation problem`,
        `does the alpha make the omega or the omega make the alpha`,
        `gingerbrave aint running faster than the homing missile i sent`,
        `the power lies in the people until they drop dead`,
        `polen kannot into spaec`,
        `crazy? i was crazy once`,
        `one must imagine a coder happy`,
        `i just want to talk to him`,
        `obliteration of the self`,
        `asterLP`,
        `asterOS`,
        `go4schools.github.io/projectbyp/`,
        `doing gods work without pay`,
        `benchic asfaleiocracy is nice`,
        `deer lourdes`,
        `sleep is a type of meditation im not gonna use`,
        `if she leaves you for another there is always her brother`,
        `bond with the lizard`,
        `i just gave you prostate cancer`,
        `sorry about the syphilis`,
        `you cant put loyalty on a hoe`,
        `stop it, get some help`,
        `literally 1984`,
        `eugh an eraser`,
        `swallowing a big girthy banana rn`,
        `<span class="ikibimi">ancient ikibimi</span>`,
        `2 + 2 is fish<br/>change my mind`,
        `imagine<br>inage breathing oxygen`,
        `cheese`,
        `hi kommit`,
        `you people arent very nice`,
        `<span style="color:green;">WHY EM SEE Æ</span>`,


    ];
    //  `text`,
    //  `<span class="ancient ikibimi">ANCIENTIKIBIMI</span>`,
    //  `<span class="utsans">UNDERTALESANSTEXT</span>`,
    //  `<span class="utpapyrus">UNDERTALEPAPYRUSTEXT</span>`,
    //  `<span class="comicsans">COMICSANSMSTEXT</span>`,
    //  `<span class="dealer">BUCKSHOTROULETTEDEALERTEXT</span>`,
    //  `<span class="vcr">VCRULTRAKILLTEXT</span>`,
    //  `<span class="omori">OMORITEXT</span>`,
    //  `<span class="balatro">JIMBOFONT</span>`,


    var rText = Math.floor(Math.random() * messages.length);
    
    document.getElementById("randomsplash").innerHTML = messages[rText];

    const clickSplash = document.getElementById("randomsplash");

    clickSplash.addEventListener("click", function() {
        var rText = Math.floor(Math.random() * messages.length);
        document.getElementById("randomsplash").innerHTML = messages[rText];
    });
}

cockandballs();

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

console.log("I SEE JS FILE");
$(".link back").hide();
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'NYSL APP',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/about/',
            url: 'about.html',
    },

  ],
    methods: {
        alert: function () {
            app.dialog.alert('Hello World');
        }
    }
    // ... other parameters
});

//ADD CLASSES
$("#tab2row2, #tab2row3").addClass("accordion-item-toggle");

//CHANGE COLOR OF NAVBAR ON TAB CLICK

var nav = document.getElementById("navbar");

$("#tab1").click(function () {
    $(".navbar").css("cssText", "background-color:#F0701B !important;");
});
$("#tab2").click(function () {
    $(".navbar").css("cssText", "background-color:#F0BD1B !important;");
});
$("#tab3").click(function () {
    $(".navbar").css("cssText", "background-color:#D6F01B !important;");
});
$("#tab4").click(function () {
    $(".navbar").css("cssText", "background-color:#9BF01B !important;");
});

$("#tab2table1").addClass("tab2table1");
$("#tab2table2").addClass("tab2table2");
$("#tab2table3").addClass("tab2table3");
$("#tab2table4").addClass("tab2table4");
$("#tab2table5").addClass("tab2table5");
$("#tab2table6").addClass("tab2table6");

//TAB2 RESIZE BUTTONS, ADD NEW ONES




//CLICK TEAM TAB2
var resized = 0;
var accordion = 0;
console.log("resized value: " + resized);
console.log("accordion value: " + accordion);


//THIS RESIZES ALL BUTTONS TO ORIGINAL SIZES ON TAB CHANGE

$("#tab1, #tab2, #tab3, #tab4").click(function () {

    if (resized === 1 && accordion === 0) {

        $("#tab2row2, #tab2button2").animate({
            height: "23vh",
        }, 400);
        app.accordion.close("accordion-item")
        resized = 0;
    }


});

//FUNCTION FOR TEAMS
//--------------------------------------
//FUNCTION FOR SLIDERS ON PAGES

$("#tab2row2").click(function () {
    if (resized === 0) {
        console.log("showing accordion");
        $("#tab2row2, #tab2button2").animate({
            height: "10vh",
            opacity: "1",
        }, 200);
        $("#accordion-item").addClass("accordion-item accordion-item-opened");

        resized = 1;
        accordion = 1;
        console.log(resized);
        console.log("is resized")
        console.log(accordion);
        console.log("is accordion in");

    } else {
        if (accordion === 1) {
            console.log("hiding accordion")
            $("#tab2row2, #tab2button2").animate({
                height: "23vh",
                opacity: "1",
            }, 200);
            accordion = 0;
            resized = 0;
            console.log("resizing back")
        }
        if (accordion === 2) {
            console.log("hiding accordion when he's on left")
            $("#tab2table1").removeClass("slideInRight");
            $("#tab2table1, #tab2table2, #tab2table3, #tab2table4, #tab2table5, #tab2table6").addClass("slideOutRight");
            $("#tab2acc1").removeClass("slideOutLeft");
            $("#tab2acc1").addClass("slideInLeft");
            $("#tab2row2, #tab2button2").animate({
                height: "23vh",
                opacity: "1",
            }, 200);
            accordion = 0;
            resized = 0;
        }

    }


});

//THIS MAKES ACCORDEON MOVE LEFT AND SLIDES TABLE FROM RIGHT
//FOR ALL TEAMS 
$("#tab2acc1but1").click(function () {
    tab2acc1($("#tab2table1"));
})
$("#tab2acc1but2").click(function () {
    tab2acc1($("#tab2table2"));
})
$("#tab2acc1but3").click(function () {
    tab2acc1($("#tab2table3"));
})
$("#tab2acc1but4").click(function () {
    tab2acc1($("#tab2table4"));
})
$("#tab2acc1but5").click(function () {
    tab2acc1($("#tab2table5"));
})
$("#tab2acc1but6").click(function () {
    tab2acc1($("#tab2table6"));
})

function tab2acc1(tableNumber) {
    if (accordion === 1) {

        $("#tab2table1, #tab2table2, #tab2table3, #tab2table4, #tab2table5, #tab2table6").removeClass("slideOutRight");

        $("#tab2acc1").addClass("slideOutLeft");
        $("#tab2acc1").addClass("animated");

        tableNumber.addClass("slideInRight");
        tableNumber.addClass("animated");
        $("#tab2table1, #tab2table2, #tab2table3, #tab2table4, #tab2table5, #tab2table6").css("cssText", "display:none");
        tableNumber.css("cssText", "display: flex;");
        accordion = 2; //MEANS ACCORDION IS SLIDED TO LEFT SIDE
        console.log("accordion value: " + accordion);
    }
}
//$("#tab2acc1but1").click(function () {
//    console.log(accordion);
//    if (accordion === 1) {
//
//        $("#tab2table1").removeClass("slideOutRight");
//
//        $("#tab2acc1").addClass("slideOutLeft");
//        $("#tab2acc1").addClass("animated");
//
//        $("#tab2table1").addClass("slideInRight");
//        $("#tab2table1").addClass("animated");
//        $("#tab2table1").css("cssText", "display: flex;");
//        accordion = 2; //MEANS ACCORDION IS SLIDED TO LEFT SIDE
//        console.log(accordion);
//    }
//
//
//});


//CLICK VS -> GO BACK TO U1-6 
$("#tab2table1").click(function () {
    hideTable($("#tab2table1"));
});
$("#tab2table2").click(function () {
    hideTable($("#tab2table2"));
});
$("#tab2table3").click(function () {
    hideTable($("#tab2table3"));
});
$("#tab2table4").click(function () {
    hideTable($("#tab2table4"));
});
$("#tab2table5").click(function () {
    hideTable($("#tab2table5"));
});
$("#tab2table6").click(function () {
    hideTable($("#tab2table6"));
});

function hideTable(table) {
    if (accordion === 2) {
        table.removeClass("slideInRight");
        table.addClass("slideOutRight");
        $("#tab2acc1").removeClass("slideOutLeft");
        $("#tab2acc1").addClass("slideInLeft")
        accordion = 1;
        console.log("accordion value: " + accordion);
    }
}
//$("#tab2table1").click(function () {
//    if (accordion === 2) {
//        $("#tab2table1").removeClass("slideInRight");
//        $("#tab2table1").addClass("slideOutRight");
//        $("#tab2acc1").removeClass("slideOutLeft");
//        $("#tab2acc1").addClass("slideInLeft")
//        accordion = 1;
//        console.log(accordion);
//    }
//});

//FUNCTIONS FOR LOCATIONS
//---------------------------------------------------
var resized2 = 0
var accordion2 = 0
$("#tab2row3").click(function () {
    if (resized2 === 0) {
        $("#tab2row3, #tab2button3").animate({
            height: "10vh",
            //            opacity: "0.9",
        }, 400);


        resized2 = 1;
        accordion2 = 1;
        console.log(resized2);
        console.log("is resized")
        console.log(accordion2);
        console.log("is accordion in");

    } else {
        if (accordion2 === 1) {
            $("#tab2row3, #tab2button3").animate({
                height: "23vh",
            }, 400);
            accordion2 = 0;
            resized2 = 0;
            console.log("resizing back")
        }
        if (accordion2 === 2) {
            $("#tab2map1").removeClass("slideInRight");
            $("#tab2map1").addClass("slideOutRight");
            $("#tab2acc2").removeClass("slideOutLeft");
            $("#tab2acc2").addClass("slideInLeft");
            $("#tab2row3, #tab2button3").animate({
                height: "23vh",
            }, 400);
            accordion2 = 0;
            resized2 = 0;
        }
    }
})


//THIS MAKES ACCORDEON MOVE LEFT AND SLIDES TABLE FROM RIGHT
//FOR ALL TEAMS 
$("#tab2acc2but1").click(function () {
    console.log(accordion2);
    if (accordion2 === 1) {

        $("#tab2map1").removeClass("slideOutRight");

        $("#tab2acc2").addClass("slideOutLeft");
        $("#tab2acc2").addClass("animated");

        $("#tab2map1").addClass("slideInRight");
        $("#tab2map1").addClass("animated");
        $("#tab2map1").css("cssText", "display: flex;");
        accordion2 = 2; //MEANS ACCORDION IS SLIDED TO LEFT SIDE
        console.log(accordion2);
    }
    if (accordion === 1) {

    }
});
//ADAPTING TOP FOR ACCORDION 2
$("#tab2acc2but1").click(function() {
    changeFukingCSS("#tab2map1");
})
function changeFukingCSS(map){
    if (accordion === 1 || accordion === 2) {
        $(map).css("cssText", "margin-top: 87vh !important;")
    }
}

//CLICK VS -> GO BACK TO LOCATIONS
$("#tab2map1").click(function () {
    if (accordion2 === 2) {
        $("#tab2map1").removeClass("slideInRight");
        $("#tab2map1").addClass("slideOutRight");
        $("#tab2acc2").removeClass("slideOutLeft");
        $("#tab2acc2").addClass("slideInLeft")
        accordion2 = 1;
        console.log(accordion2);
    }
});


//FUNCTIONS FOR TAB 3
//-------------------------------------------------------------
var map = 0;
console.log("map value" + map);
//EXECUTES FUNCTION FOR EVERYBUTTON
$("#tab3row2").click(function () {
    tab3function($("#locationMap1"), "Katzenmeier");
});
$("#tab3row3").click(function () {
    tab3function($("#locationMap2"), "Marjorie");
});
$("#tab3row4").click(function () {
    tab3function($("#locationMap3"), "Howard");
});
$("#tab3row5").click(function () {
    tab3function($("#locationMap4"), "Greenbay");
});
$("#tab3row6").click(function () {
    tab3function($("#locationMap5"), "North");
});
$("#tab3row7").click(function () {
    tab3function($("#locationMap6"), "South");
});
//FUNCTION EXECUTED FFOR EVERY BUTTON
function tab3function(mapNumber, button1Text) {
    if (map === 0) {
        mapNumber.removeClass("slideOutRight");

        $("#locations").addClass("animated");
        $("#locations").addClass("slideOutLeft")

        mapNumber.addClass("animated");
        mapNumber.addClass("slideInRight");
        mapNumber.css("cssText", "display: flex;");
        map = 1;
        console.log("map value" + map);
        $("#tab3button1span").text(button1Text);
    }
}
//FUNCTION EXECUTED FOR MAP CLICK
$("#tab3button1 , #locationMap2, #locationMap3, #locationMap4, #locationMap5, #locationMap6").click(function () {
    if (map === 1) {
        $("#locationMap1, #locationMap2, #locationMap3, #locationMap4, #locationMap5, #locationMap6").removeClass("slideInRight");

        $("#locationMap1, #locationMap2, #locationMap3, #locationMap4, #locationMap5, #locationMap6").addClass("slideOutRight");

        $("#locations").removeClass("slideOutLeft");
        $("#locations").addClass("slideInLeft");
        map = 0;
        $("#tab3button1span").text("Choose Location:");
        console.log("map value" + map);

    }

});
$(".gmnoprint.gm-style-cc").css("cssText", "display: none;");
$("locationMap1").contents().find(".gmnoprint.gm-style-cc").css("cssText", "display: none;");

//FUNCTION FOR TAB4
//----------------------------------------------------
var chat = 0;
console.log("map value" + chat);

$("#tab4row2").click(function () {
    tab4function($("#chatU1"), "U1 CHAT");
});
$("#tab4row3").click(function () {
    tab4function($("#chatU2"), "U2 CHAT");
});
$("#tab4row4").click(function () {
    tab4function($("#chatU3"), "U3 CHAT");
});
$("#tab4row5").click(function () {
    tab4function($("#chatU4"), "U4 CHAT");
});
$("#tab4row6").click(function () {
    tab4function($("#chatU5"), "U5 CHAT");
});
$("#tab4row7").click(function () {
    tab4function($("#chatU6"), "U6 CHAT");
});

function tab4function(chatNumber, button1Text) {
    if (chat === 0) {
        chatNumber.removeClass("slideOutRight");

        $("#chats").addClass("animated");
        $("#chats").addClass("slideOutLeft")

        chatNumber.addClass("animated");
        chatNumber.addClass("slideInRight");
        chatNumber.css("cssText", "display: flex;");
        chat = 1;
        console.log("chat value" + chat);
        $("#tab4button1").text(button1Text);
    }
}
//FUNCTION EXECUTED FOR CHAT CLICK
$("#tab4button1").click(function () {
    if (chat === 1) {
        $("#chatU1, #chatU2, #chatU3, #chatU4, #chatU5, #chatU6").removeClass("slideInRight");

        $("#chatU1, #chatU2, #chatU3, #chatU4, #chatU5, #chatU6").addClass("slideOutRight");

        $("#chats").removeClass("slideOutLeft");
        $("#chats").addClass("slideInLeft");
        chat = 0;
        $("#tab4button1").text("Choose Team Chat:");
        console.log("chat value" + chat);
    }
});
$("#fukingTab").css("cssText", "display: block;")

//CHAT CODE
//--------------------------------------------------
//document.getElementById("login").addEventListener("click", login);

$("#login, #login2, #login3, #login4 #login5 #login6").on("click", login);

$("#create-post").on("click", function () {
    writeNewPost("textInput", "ubiqum")
});
$("#create-post2").on("click", function () {
    writeNewPost("textInput2", "ubiqum2")
});
$("#create-post3").on("click", function () {
    writeNewPost("textInput3", "ubiqum3")
});
$("#create-post4").on("click", function () {
    writeNewPost("textInput4", "ubiqum4")
});
$("#create-post5").on("click", function () {
    writeNewPost("textInput5", "ubiqum5")
});
$("#create-post6").on("click", function () {
    writeNewPost("textInput6", "ubiqum6")
});

getPosts("ubiqum", "#posts");
getPosts("ubiqum2", "#posts2");
getPosts("ubiqum3", "#posts3");
getPosts("ubiqum4", "#posts4");
getPosts("ubiqum5", "#posts5");
getPosts("ubiqum6", "#posts6");
var audio = new Audio('blop.mp3');

function login() {

    // https://firebase.google.com/docs/auth/web/google-signin

    // Provider
    var provider = new firebase.auth.GoogleAuthProvider();
    // How to Log In
    firebase.auth().signInWithPopup(provider)

    console.log("login", "#posts");

}


function writeNewPost(parameter1, parameter2) {

    // https://firebase.google.com/docs/database/web/read-and-write

    // Values
    var message = document.getElementById(parameter1).value;
    var user = firebase.auth().currentUser.displayName;
    // A post entry.
    var post = {
        message: message,
        user: user
    }
    console.log(post);
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child(parameter2).push().key;
    console.log(newPostKey);
    //Write data
    var data = {};
    data[newPostKey] = post;
    audio.play();
    //    console.log(data);

    return firebase.database().ref(parameter2).update(data);
    //    message = "";

    console.log("write");

}



function getPosts(database, posts) {

    firebase.database().ref(database).on('value', function (data) {
        //        var posts = document.getElementById(posts);
        var postsBox = $(posts);
        postsBox.innerHTML = "";

        var messages = data.val();

        for (var key in messages) {
            var text = document.createElement("div");
            var user = document.createElement("p");
            user.classList.add("userP");
            var txt = document.createElement("p");
            txt.classList.add("messageP");
            var element = messages[key];
            console.log(element.user);
            user.append(element.user + " " + "says:");
            text.appendChild(user);
            txt.append(element.message);
            text.appendChild(txt);
            if (element.user == firebase.auth().currentUser.displayName) {
                text.classList.add("myPosts");
            } else {
                text.classList.add("notMyPosts");
            }

            postsBox.append(text);
            $("#textInput, #textInput2, #textInput3, #textInput4, #textInput5, #textInput6").val("");
            $("#posts2, #posts, #posts3, #posts4, #posts5, #posts6").animate({
                scrollTop: $(".box").prop("scrollHeight")
            }, 0);

        }
    })
    console.log("getting posts");
}

$("#login, #login2, #login3, #login4, #login5, #login6").hide();
$("#posts, #posts2, #posts3, #posts4, #posts5, #posts6").hide();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        $("#login, #login2, #login3, #login4, #login5, #login6").hide();
        $("#posts, #posts2, #posts3, #posts4, #posts5, #posts6").show();
        $("#signOut, #signOut2, #signOut3, #signOut4, #signOut5, #signOut6").show();
        $(".inputs").show();
        $("#loginScreen, #loginScreen2, #loginScreen3, #loginScreen4, #loginScreen5, #loginScreen6").hide();
        getPosts("ubiqum", "#posts");
        getPosts("ubiqum2", "#posts2");
        getPosts("ubiqum3", "#posts3");
        getPosts("ubiqum4", "#posts4");
        getPosts("ubiqum5", "#posts5");
        getPosts("ubiqum6", "#posts6");

    } else {
        $("#login, #login2, #login3, #login4, #login5, #login6").show();
        $("#posts, #posts2, #posts3, #posts4, #posts5, #posts6").hide();
        $("#signOut, #signOut2, #signOut3, #signOut4, #signOut5, #signOut6").hide();
        $(".inputs").hide();
        $("#loginScreen, #loginScreen2, #loginScreen3, #loginScreen4, #loginScreen5, #loginScreen6").show();
        // No user is signed in.
    }
});

$("#signOut, #signOut2, #signOut3, #signOut4, #signOut5, #signOut6").click(function () {
    logMeOut();
})


function logMeOut() {
    firebase.auth().signOut().then(function () {
        console.log("Signed Out");
    }, function (error) {
        console.error("Sign Out Error", error);
    });
}

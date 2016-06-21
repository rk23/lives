var milestone = {
    personal: 'personal',
    educational: "educational",
    career: "career",
    setback: "setback",
    current: 'current',
    eol: "eol"
};
var rowling = {
    name: 'Joanne K. Rowling',
    birthday: new Date(1965, 6, 31),
    category: 'writers',
    events: [
        {
            date: new Date(1990, 9, 15),
            message: 'JK Rowling gets idea for Harry Potter while stuck on a delayed train',
            type: milestone.career
        },
        {
            date: new Date(1995, 10, 15),
            message: 'JK Rowling finishes Harry Potter and the Sorcerer\'s Stone and begins looking for a publisher',
            type: milestone.career
        },
        {
            date: new Date(1997, 6, 26),
            message: 'JK Rowling gets the first Harry Potter book published',
            type: milestone.career
        },
        {
            date: new Date(1998, 6, 2),
            message: 'JK Rowling gets the second Harry Potter book published',
            type: milestone.career
        },
        {
            date: new Date(1999, 6, 8),
            message: 'JK Rowling gets the third Harry Potter book published',
            type: milestone.career
        },
        {
            date: new Date(),
            message: 'Current week in J.K. Rowling\'s life',
            type: milestone.current
        }
    ]
};
var einstein = {
    name: 'Albert Einstein',
    birthday: new Date(1879, 2, 14),
    category: 'scientists',
    events: [
        {
            date: new Date(1900, 6, 28),
            message: 'Einstein graduates college',
            type: milestone.educational
        },
        {
            date: new Date(1902, 5, 16),
            message: 'Einstein becomes a patent clerk',
            type: milestone.career
        },
        {
            date: new Date(1903, 3, 15),
            message: 'Einstein forms the Olympia Academy with his two friends',
            type: milestone.personal
        },
        {
            date: new Date(1905, 2, 17),
            message: 'Einstein finishes paper with equation e=mc^2',
            type: milestone.career
        },
        {
            date: new Date(1905, 8, 28),
            message: 'Einstein\'s paper on the special theory of relativity is published in the Annalen der Physik.',
            type: milestone.career
        },
        {
            date: new Date(1922, 10, 9),
            message: 'Einstein wins Nobel prize',
            type: milestone.personal
        },
        {
            date: new Date(1955, 3, 18),
            message: 'Einstein dies',
            type: milestone.eol
        }
    ]
};
var nietzsche = {
    name: 'Friedrick Nietzsche',
    birthday: new Date(1844, 9, 15),
    category: 'philosophers',
    events: [
        {
            date: new Date(1867, 9, 9),
            message: 'Nietzsche joins the military',
            type: milestone.career
        },
        {
            date: new Date(1868, 2, 15),
            message: 'Nietzsche discharged from the military',
            type: milestone.setback
        },
        {
            date: new Date(1869, 1, 15),
            message: 'Nietzsche becomes professor at Basil',
            type: milestone.career
        },
        {
            date: new Date(1876, 4, 19),
            message: 'Nietzsche retires from Basil due to illness',
            type: milestone.setback
        },
        {
            date: new Date(1883, 1, 14),
            message: 'Nietzsche sends Thus Spoke Zarathustra, Part 1 to his publisher'
        },
        {
            date: new Date(1883, 7, 15),
            message: 'The first part of Thus Spoke Zarathustra is published',
            type: milestone.career
        },
        {
            date: new Date(1889, 0, 18),
            message: 'Nietzsche admitted to the Basel mental asylum',
            type: milestone.setback
        },
        {
            date: new Date(1900, 7, 25),
            message: 'Nietzsche dies',
            type: milestone.eol
        }
    ]
};
var musk = {
    name: 'Elon Musk',
    birthday: new Date(1971, 5, 28),
    category: 'entrepreneurs',
    events: [
        {
            date: new Date(1995, 5, 1),
            message: 'Musk and brother co-found Zip2',
            type: milestone.career
        },
        {
            date: new Date(1999, 1, 5),
            message: 'Musk sells Zip2 for over $300 million and keeps $22 million himself',
            type: milestone.career
        },
        {
            date: new Date(1999, 1, 15),
            message: 'Musk co-founds X.com with money from the sale of Zip2',
            type: milestone.career
        },
        {
            date: new Date(2002, 6, 15),
            message: 'Paypal is bought by eBay and Musk takes home $165 million',
            type: milestone.career
        },
        {
            date: new Date(),
            message: 'Current week in Elon Musk\'s life',
            type: milestone.current
        }
    ]
};
var gates = {
    name: 'Bill Gates',
    birthday: new Date(1955, 9, 28),
    category: 'entrepreneurs',
    events: [
        {
            date: new Date(1973, 8, 1),
            message: 'Bill Gates attends Harvard University',
            type: milestone.educational
        },
        {
            date: new Date(1974, 3, 4),
            message: 'Bill Gates and Paul Allen form partnership called Micro-Soft',
            type: milestone.career
        },
        {
            date: new Date(),
            message: 'Current week in Bill Gate\'s life',
            type: milestone.current
        }
    ]
};
var napoleon = {
    name: 'Napoleon Bonaparte',
    birthday: new Date(1769, 7, 15),
    category: 'military',
    events: [
        {
            date: new Date(1785, 9, 28),
            message: 'Napoleon graduates from military school',
            type: milestone.educational
        },
        {
            date: new Date(1796, 2, 2),
            message: 'Napoleon given command of the French army in Italy',
            type: milestone.career
        },
        {
            date: new Date(1804, 4, 18),
            message: 'Senate proclaims Napoleon emperor of France',
            type: milestone.career
        },
        {
            date: new Date(1815, 9, 16),
            message: 'Napoleon forced to exile',
            type: milestone.setback
        },
        {
            date: new Date(1821, 2, 5),
            message: 'Napoleon dies',
            type: milestone.eol
        }
    ]
};
var gandhi = {
    name: 'Mohandus Gandhi',
    birthday: new Date(1869, 9, 2),
    category: 'humanitarians',
    events: [
        {
            date: new Date(1891, 5, 10),
            message: 'Gandhi passes the bar exam in England',
            type: milestone.educational
        },
        {
            date: new Date(1894, 2, 15),
            message: 'Gandhi founds the Natal Indian Congress',
            type: milestone.career
        },
        {
            date: new Date(1948, 0, 30),
            message: 'Gandhi is assassinated',
            type: milestone.eol
        }
    ]
};
var oprah = {
    name: 'Oprah Winfrey',
    birthday: new Date(1954, 0, 29),
    category: 'celebrities',
    events: [
        {
            date: new Date(1963, 2, 15),
            message: 'Oprah raped by family members throughout age 9',
            type: milestone.setback
        },
        {
            date: new Date(1968, 9, 1),
            message: 'Oprah gives birth to stillborn boy, an event which she considered her second chance.',
            type: milestone.setback
        },
        {
            date: new Date(1978, 7, 14),
            message: 'Youngest news anchor and the first black female news anchor at Nashville\'s WLAC-TV. ',
            type: milestone.career
        },
        {
            date: new Date(1984, 0, 2),
            message: 'Winfrey relocated to Chicago to host WLS-TV\'s low-rated half-hour morning talk-show, AM' +
            ' Chicago, which aired on this date.',
            type: milestone.career
        },
        {
            date: new Date(1986, 8, 8),
            message: 'The Oprah Winfrey Show begins',
            type: milestone.career
        },
        {
            date: new Date(2002, 8, 22),
            message: 'Oprah wins the Bob Hope Humanitarian award',
            type: milestone.career
        },
        {
            date: new Date(),
            message: 'Current week in Oprah\'s life',
            type: milestone.current
        }
    ]
};
var picasso = {
    name: 'Pablo Picasso',
    birthday: new Date(1881, 9, 25),
    category: 'artists',
    events: [
        {
            date: new Date(1892, 9, 1),
            message: 'Picasso enters classes at the art school in La Coruña, Spain',
            type: milestone.educational
        },
        {
            date: new Date(1900, 1, 1),
            message: 'Picasso\'s exhibition of drawings at Els Quatre Gats opens.',
            type: milestone.career
        },
        {
            date: new Date(1901, 1, 17),
            message: 'Picasso\s friend Casagemas commits suicide in Paris',
            type: milestone.setback
        },
        {
            date: new Date(1901, 5, 24),
            message: 'Picasso\'s show opens at the Galerie Vollard.',
            type: milestone.career
        },
        {
            date: new Date(1901, 11, 1),
            message: 'Picasso\'s Blue Period begins',
            type: milestone.personal
        },
        {
            date: new Date(1973, 3, 8),
            message: 'Picasso dies',
            type: milestone.eol
        }
    ]
};
var jfk = {
    name: 'John F. Kennedy',
    birthday: new Date(1917, 4, 29),
    category: 'politicians',
    events: [
        {
            date: new Date(1940, 5, 20),
            message: 'JFK graduates cum laude from Harvard, and his senior thesis is published that summer.',
            type: milestone.educational
        },
        {
            date: new Date(1941, 9, 1),
            message: 'JFK enlists in the Navy, following his brother.',
            type: milestone.career
        },
        {
            date: new Date(1943, 7, 2),
            message: 'JFK\'s PT boat is rammed by a Japanese destroyer. Under his leadership, most of the crew is' +
            ' eventually rescued. JFK receives the Purple Heart for his heroics.',
            type: milestone.personal
        },
        {
            date: new Date(1944, 7, 12),
            message: 'JFK\'s brother, Joseph Kennedy, Jr. is killed while flying a mission over Europe.',
            type: milestone.setback
        },
        {
            date: new Date(1946, 10, 11),
            message: 'JFK is elected to the House of Representatives.',
            type: milestone.career
        },
        {
            date: new Date(1960, 10, 8),
            message: 'JFK defeats Nixon and becomes president.',
            type: milestone.career
        },
        {
            date: new Date(1963, 10, 22),
            message: 'JFK assassinated in Dallas, Texas.',
            type: milestone.eol
        }
    ]
};
var mAli = {
    name: 'Muhammad Ali',
    birthday: new Date(1942, 0, 17),
    category: 'sports',
    events: [
        {
            date: new Date(1954, 9, 15),
            message: 'Muhammad Ali\'s bicycle was stolen and he told the policement, Joe Martin, that he wanted to' +
            ' "whup" whoever had stolen his bike. Martin trained young boxers and started to train Clay.',
            type: milestone.setback
        },
        {
            date: new Date(1960, 9, 29),
            message: 'Muahmmad Ali wins first pro fight.',
            type: milestone.career
        },
        {
            date: new Date(1964, 1, 26),
            message: 'Muhammad Ali joins the Nation of Islam',
            type: milestone.personal
        },
        {
            date: new Date(1974, 9, 30),
            message: 'Muhammad Ali beats defeated George Foreman and reclaimed the title of Heavyweight Champion of ' +
            'the World. This fight was a very famous fight event known as the "Rumble in the Jungle" since the fight ' +
            'was at a stadium in Zaire.'
        },
        {
            date: new Date(1981, 11, 13),
            message: 'Muhammad Ali retires from boxing',
            type: milestone.career
        },
        {
            date: new Date(2016, 5, 3),
            message: 'Muhammad Ali dies of septic shock',
            type: milestone.eol
        }
    ]
};
var swift = {
    name: 'Taylor Swift',
    birthday: new Date(1989, 11, 13),
    category: 'celebrities',
    events: [
        {
            date: new Date(2001, 11, 27),
            message: 'Swift starts writing songs two days after receiving her first guitar for Christmas.',
            type: milestone.career
        },
        {
            date: new Date(2006, 5, 19),
            message: 'Taylor Swift releases Tim McGraw, her first single.',
            type: milestone.career
        },
        {
            date: new Date(2006, 9, 24),
            message: 'Taylor Swift releases debut album which peaked at #1 on the US Country Chart and #5 Billboard.',
            type: milestone.career
        },
        {
            date: new Date(2007, 0, 27),
            message: '"Tim McGraw" Reaches Number 6 On Billboard\'s Hot Country Songs',
            type: milestone.career
        },
        {
            date: new Date(2008, 6, 25),
            message: 'Taylor Swift graduates high school',
            type: milestone.educational
        },
        {
            date: new Date(),
            message: 'Current week in Taylor Swift\'s life',
            type: milestone.current
        }
    ]
};

var everybody = [
    einstein,
    gates,
    musk,
    nietzsche,
    rowling,
    jfk,
    mAli,
    gandhi,
    napoleon,
    oprah,
    picasso,
    swift,
];

var yearsSince = function(start, end){
    var diff = end - start;
    var day = 1000 * 60 * 60 * 24;

    var days = diff/day;
    var months = days/30.44;
    var years = Math.floor(months/12);

    return years
};
var weeksSince = function(start, offset, end){
    var diff = end - start;
    var day = 1000 * 60 * 60 * 24;
    offset = offset * day * 365.2425;


    var days = (diff-offset)/day;
    var weeks = Math.ceil(days/7) - 1;

    return weeks
};
var timeSince = function(birthday, event){
    var years = yearsSince(birthday, event);
    var weeks = weeksSince(birthday, years, event);

    var formatted = years + '.' + weeks;

    return formatted
};

var setInnerHtml = function(){};
var removeInnerHtml = function(){
    infoMessage.innerHTML = '';
};

var peopleSelected;
var careerSelected;

var birthdaySubmit = document.getElementById('birthday-submit');
birthdaySubmit.addEventListener('submit', function(e){
    e.preventDefault();
    var previousSelection = document.getElementsByClassName('done');
    for (var a = previousSelection.length - 1; a >= 0; a--){
        previousSelection[a].classList.remove('done');
    }

    var birthdayRaw = document.getElementById('birthday').value.split('-');
    var birthday = new Date(birthdayRaw[0], birthdayRaw[1] - 1, birthdayRaw[2]);
    var today = new Date().setHours(0,0,0,0);
    var years = ((today - birthday) / 86400000 / 365);
    var remainder = (years % 1) * 52;

    for (var i = 0; i < years - 1; i++){
        for(var j = 0; j < 52; j++){
            document.getElementById(i + '.' + j).classList.add('done')
        }
    }
    for (var k = 0; k < remainder; k++){
        document.getElementById(Math.floor(years) + '.' + k).classList.add('done')
    }

});

var infoMessage = document.getElementById('info-message');
var applyHover = function(person){
    for (let i = 0; i < person.events.length; i++){
        let message = person.events[i].message;
        let yearWeek = timeSince(person.birthday, person.events[i].date);
        setInnerHtml = function(){
            if(infoMessage.innerHTML){
                var breaks = '<br><br>'
            } else {
                var breaks = ''
            }
            infoMessage.innerHTML = infoMessage.innerHTML + breaks + '<strong>' + person.events[i].date.toDateString()
              + '</strong><br><strong>' + yearWeek.split('.')[0] + ' years old</strong><span>: ' + message + '</span>';
        }

        var element = document.getElementById(yearWeek);
        element.style.cursor = "pointer";


        if (element.classList.contains('reserved')){
            //console.log('Overwriting previous event. Person: ' + person.name + ' with event: ' +
            //  person.events[i].message)
            message = infoMessage.innerHTML + message;
            element.style.backgroundColor = '#E0E0E0';
        } else {
            element.classList.add('reserved');
            element.classList.add(person.events[i].type);
        }

        element.addEventListener('mouseover', setInnerHtml);
        element.addEventListener('mouseleave', removeInnerHtml);
    }
};

var init = function(){
    reset(true);
    for (var j = 0; j < everybody.length; j++){
        applyHover(everybody[j]);
        addPeople(everybody[j], false)
    }
};

var highlighted = document.getElementsByClassName('reserved');
var setLength = parseInt(highlighted.length)
var reset = function(resetPeople){

    if (peopleSelected) peopleSelected.classList.remove('selected');

    for (var i = highlighted.length; i > 0; i--){
        highlighted[0].style.cursor = "default";
        highlighted[0].style.backgroundColor = '';
        highlighted[0].classList.remove('personal', 'educational', 'career', 'setback', 'current', 'eol');

        //Currently adding event listeners w/o removing - need to fix
        highlighted[0].addEventListener('mouseover', function(){
            infoMessage.innerHTML = '';
        });
        //highlighted[0].removeEventListener('mouseover', setInnerHtml);

        highlighted[0].classList.remove('reserved')
    }
    while (peopleTable.firstChild && resetPeople) {
        if (careerSelected) careerSelected.classList.remove('selected');
        peopleTable.removeChild(peopleTable.firstChild)
    }
};

var addPeople = function(person, shouldApply){
    if(shouldApply){
        applyHover(person)
    }

    var div = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = person.name;
    span.id = person.name;

    span.addEventListener('click', function(){
        reset(false);
        if (peopleSelected) peopleSelected.classList.remove('selected')
        peopleSelected = this;
        this.classList.add('selected');
        applyHover(person)
    });

    span.addEventListener('mouseover', function(){
        span.style.backgroundColor = 'lightcoral';
    });
    span.addEventListener('mouseleave', function(){
        span.style.backgroundColor = ''
    });

    div.appendChild(span)
    peopleTable.appendChild(div)
}

// Select a specific career type
var careers = document.getElementsByClassName('career-type');
var peopleTable = document.getElementById('people-col');
for (let i = 0; i < careers.length; i++){
    careers[i].addEventListener('click', function(){
        reset(true);
        for (var j = 0; j < everybody.length; j++){
            if(everybody[j].category == careers[i].innerHTML.toLowerCase()){
                careerSelected = careers[i];
                careers[i].classList.add('selected');
                addPeople(everybody[j], true)
            }
        }
    });
    careers[i].addEventListener('mouseover', function(){
        careers[i].style.backgroundColor = 'lightcoral'
    });
    careers[i].addEventListener('mouseleave', function(){
        careers[i].style.backgroundColor = '';
    })
}


// Select all career types
var all = document.getElementById('career-type-all');
all.addEventListener('click', function(){
    init();
});
var peopleAll = document.getElementById('people-all');
peopleAll.addEventListener('click', function(){
    init();
});

init();
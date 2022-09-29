let testStrings = [
    'viasat.user.alianza.com',         // should pass
    'managevoice.quantumfiber.com',    // should pass
    'acme.com',                        // should NOT pass - not enough labels
    '1voiceworks.nonsense.net',        // should NOT pass - starts with a non-letter
    'user.voice-fax.com',              // should pass
    '-user.acme.com',                  // should NOT pass - starts with a non-letter
    'user.acme.nonsense',              // should pass
    'viasat..user.alianza.com',        // should NOT pass - the second label is ZLS
    'viasat.user.alianza-.com',        // should NOT pass - the third label ends in a non-letter, non-number
    'viasat.user1.alianza.com',        // should pass
    'viasat.user1.al1anza.com',        // should pass
    'via$at.user1.al1anza.com',        // should NOT pass - has symbol in it
];

let regEx = new RegExp(/^([a-zA-Z][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.){2,}([a-zA-Z][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])$/);
//regEx = new RegExp(/^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$/);
testStrings.forEach(s => {
    console.log(regEx.test(s).toString().padEnd(5,' ') + '   ' + s);
});


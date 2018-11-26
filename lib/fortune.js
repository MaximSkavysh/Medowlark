const fortuneCookies = [
    'Conquer your fears or they will conquer you.',
    'Rivers need springs.',
    'Do not fear what you do not know.',
    'Whenewer possible, keep it simple'
];
exports.getFortune = () => {
    let idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}
//1
const InstagramPost = function(handle, content, image, views, likes) {
    this.handle = handle,
    this.content = content,
    this.image = image,
    this.views = views,
    this.likes = likes
};

//2

let InstagramPost1 = new InstagramPost('iCode','Writing contents can be tiring', 'google.com', 50, 6);
let InstagramPost2 = new InstagramPost('iWrite', 'Nothing to type biko election is tomorrow', 'image.com', 1200, 560);

console.log(InstagramPost1);
console.log(InstagramPost2);

//3
//a
const createPerson = function(name, age, location){
    return {
        name,
        age,
        location
    }
};

let Person1 = createPerson('Musa Dawodu',19, 'Lekki, Laagos State' )
console.log(Person1);
//b
createJambScores = function(eng, govt, lit, crk) {
    return {
        eng,
        govt,
        lit,
        crk
    }
};


let JambScores1 = createJambScores(70,85,82,94);
console.log(JambScores1);

let MusaScores = Object.assign(Person1,JambScores1);
console.log(MusaScores);

//alternatively
let personScores = Object.assign(createPerson,createJambScores);

//4 - Cloning
const createClothe = function(type, color, size){
    return {
        type,
        color,
        size
    }
};
clothe = createClothe('ankara', 'blue', 'm')
console.log(clothe);

//Using Spread Syntax
const clotheClone = {...clothe}
console.log(clotheClone);

//Using JSON.parse  
const clotheClone2 = JSON.parse(JSON.stringify(clothe));
console.log(clotheClone2);


//5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
for (let key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + ' is the presidential candidate of ' + key);
};
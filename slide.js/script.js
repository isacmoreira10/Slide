const buttons = document.getElementById ( 'buttons' );
const image = document.getElementById ( 'image' );
let gearsIndex = 0 ;

const luffyGears = ( event ) => {
    images[event.target.id]();
}

const nextIndex = () => {
    if ( gearsIndex < 4){
        gearsIndex++
    }
    else { gearsIndex = 0;}
}


const changeImage = () => {
const gears = ['gearOne','gearSecond','gearThird','gearFourth','gearFive']
const gear = gears[ gearsIndex ];
images[gear]();
nextIndex();
}

const images = {
    'gearOne':       () => image.src = 'image/gearOne.png',
    'gearSecond':    () => image.src = 'image/GearSecond1.png',
    'gearThird':     () => image.src = 'image/GearOne.png',
    'gearFourth':    () => image.src = 'image/GearFourth.png',
    'gearFive':      () => image.src = 'image/GearFive.png',
    'automatic':     () => setInterval( changeImage, 1000 )    

}
buttons.addEventListener( 'click', luffyGears);
















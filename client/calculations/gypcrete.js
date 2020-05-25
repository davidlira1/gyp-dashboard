var gypcrete = (SF, gypThick) => {

    var bags = SF * (gypThick / 12) * 1000 / 20;
    var tons = Math.ceil(bags / 9);
    var perFoam = SF /4;

    return { bags, tons, perFoam }
}

export default gypcrete;
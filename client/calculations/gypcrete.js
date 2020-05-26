var gypcrete = (SF, gypThick) => {

    var bags = Math.ceil(SF * (gypThick / 12) / 2.5);
    var tons = Math.ceil(bags * (1.9 * 100 / 2000));
    var perFoam = Math.ceil(SF * .31 / 450);

    return { bags, tons, perFoam }
}

export default gypcrete;
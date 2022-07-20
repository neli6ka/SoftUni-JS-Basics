function areaOfFigures(arr) {
    let area = 0;
    let typeOfFigures = arr[0];
    

    if (typeOfFigures === "square") {
        let a = Number(arr[1]);
        area = a * a;
        
    } else if (typeOfFigures === "rectangle") {
        let a = Number(arr[1]);
        let b = Number(arr[2]);
        area = a * b;

    } else if (typeOfFigures === "circle") {
        let r = Number(arr[1]);
        area = Math.PI * r * r;


    } else if (typeOfFigures === "triangle") {
        let a = Number(arr[1]);
        let h = Number(arr[2]);
        area = (a * h) / 2;
    }
    console.log(area.toFixed(3));
}

areaOfFigures(["square", "5"]);
//areaOfFigures(["rectangle", "7", "2.5"]);
//areaOfFigures(["circle", "6"]);
//areaOfFigures(["triangle", "4.5", "20"]);
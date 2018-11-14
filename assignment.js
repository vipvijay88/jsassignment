var house = {
    areas: [{
    livingRoom: {
    items: ['tv','sofa']
    },
    bedroomOne: {
    items: ['bed','washing machine'],
    windows: 3
    },
    bedroomTwo:{
    items: ['bed','bed','desk'],
    windows: 4
    },
    kitchen:{
    items: ['fridge','broken chair']
    }
    }],
    garden: [true, 'Red Rose'],
    garage: {
    car: {
    color: 'red',
    wheels: 4,
    honk: ()=>{alert("Beep")}
    }
    }
    }
    
    // Find total number of areas in the house
    let a = Object.keys(house.areas[0]).length;
    console.log('Total number of areas in the house is',a);
    
    // Add a dining table to the living room
    
    let b = house.areas[0].livingRoom.items;
    b.push("Dining Table");
    console.log(b);

    // Add a stove to the kitchen

    let c = house.areas[0].kitchen.items;
    c.push("Stove");
    console.log(c);

    // Remove the washing machine from bedroomOne

    let d = house.areas[0].bedroomOne.items;
    d.pop("washing machine");
    console.log(d);

    // Find the total number of beds in all rooms

    let e = Object.keys(house.areas[0]);
    let beds = 0;

    for (let x = 0; x<e.length; x++){
        let roomItems = house.areas[0][e[x]]["items"];
        for (let y=0; y<roomItems.length;y++){
            if(roomItems[y] == "bed"){
                beds++
            }
        }
    };
    console.log(beds);
  
    // Change the color of the car to blue

    let f = house.garage.car
    f.color = 'blue';
    console.log(f);
    // Add a another car to the garage with a honk function

    let g = house.garage;
    g.newcar = {color:'green', wheels: 4, honk: ()=>{alert("Beep")}};
    console.log(g);

    // Make the new car honk
    let h = house.garage;
    // h.newcar.honk();

    // Change the 'broken chair' in the kitchen to 'new chair'
    let i = house.areas[0].kitchen.items;
    c.splice(1,1,"new chair");
    console.log(i);

    // If the house has a garden, console.log the name of the flower
    
    let j = house.garden;
    console.log(j);
    if(j[0]== true){
        console.log(j[1])
    }else console.log('House doesn\'t have a garden')
  
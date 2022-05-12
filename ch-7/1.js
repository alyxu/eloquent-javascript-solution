const roads = [
"Alice's House-Bob's House", "Alice's House-Post Office", "Daria's House-Ernie's House", "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office", "Marketplace-Town Hall",
"Alice's House-Cabin", "Bob's House-Town Hall", "Daria's House-Town Hall", "Grete's House-Farm", "Marketplace-Farm", "Marketplace-Shop", "Shop-Town Hall"];


function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to){
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from,to);
        addEdge(to,from);
    }
    return graph;
}


const roadGraph = buildGraph(roads);

console.log(roadGraph);
    
class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            //can't move to a place that isn't directly connected
            //just return the object in this case
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) {
                    //parcel's location is not where the current location is
                    //just return the parcel without modifying it
                    return p;
                }
                //otherwise, move it to the destination
                return {place:destination, address:p.address};}).filter(p => {
                    //remove those parcel who have reached their destination
                    return p.place != p.address
                });
            return new VillageState(destination, parcels);
        }
    }
}


let first = new VillageState(
"Post Office",
    [{place: "Post Office", address: "Alice's House"},{place:"Bob's House",address:"Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next);

next = next.move("Bob's House");
console.log(next);

next = next.move("Alice's House");
console.log(next);

function runRobot(state, robot, memory){
    for(let turn = 0;;turn++){
        if(state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            //break;
            return turn;
        }
        let action = robot(state,memory);
        console.log(action);
        state = state.move(action.direction);
        console.log(state);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

let vs = VillageState.random()
//console.log(vs);
//runRobot(vs, randomRobot);

const mailRoute = [
"Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House",
"Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
];

                    
function routeRobot(state, memory) {
   if (memory.length == 0) {
     memory = mailRoute;
   }
   return {direction: memory[0], memory: memory.slice(1)};
}

//runRobot(VillageState.random(), routeRobot, []);


      
function findRoute(graph, from, to){
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++){
        console.log(`At outer loop ${i} with ${JSON.stringify(work[i])}`);
        let {at, route} = work[i];
        for (let place of graph[at]){
            console.log(`Currently looking at ${place}`);
            console.log(work);
            if (place == to) {
                //we've found the route
                return route.concat(place);
            }
            if (!work.some(w => w.at == place)){
                //F: if any of the work elements are at the place
                //T: if none of the work elements are at the place
                //basically, dont visit the same place again (which has a shorter route?)
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route){
    if (route.length == 0){
        let parcel = parcels[0];
        if (parcel.place != place){
            //find a route to the parcel's location
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            //we are at parcel location, time to deliver to parcel address
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    console.log(route);
    return {direction:route[0], memory:route.slice(1)};
}


//let route = findRoute(roadGraph, "Alice's House", "Farm");
//console.log(route);

function compareRobots(robot_1, robot_1_memory, robot_2, robot_2_memory){
    let task;
    let robot_1_sum = 0;
    let robot_2_sum = 0;
    for(let i = 0; i < 10; i++){
        task = VillageState.random();
        robot_1_sum += runRobot(task, robot_1, robot_1_memory);
        robot_2_sum += runRobot(task, robot_2, robot_2_memory);
    }
    console.log(`robot 1 average: ${robot_1_sum }`);
    console.log(`robot 2 average: ${robot_2_sum }`);
}

compareRobots(goalOrientedRobot, [], randomRobot, null);
    
        
        
      

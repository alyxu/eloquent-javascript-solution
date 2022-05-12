import { bigOak } from "./crow-tech";
bigOak.readStorage("food caches", (caches) => {
     let firstCache = caches[0];
     bigOak.readStorage(firstCache, (info) => {
          console.log(info);
     });
});

import { defineRequestType } from "./crow-tech";
defineRequestType("note", (nest, content, source, done) => {
     console.log(`${nest.name} received note: ${content}`);
     done();
});

function storage(nest, name) {
     return new Promise((resolve) => {
          nest.readStorage(name, (result) => resolve(result));
     });
}
storage(bigOak, "enemies").then((value) => console.log("Got", value));

class Timeout extends Error {}
function request(nest, target, type, content) {
     return new Promise((resolve, reject) => {
          let done = false;
          function attempt(n) {
               nest.send(target, type, content, (failed, value) => {
                    done = true;
                    if (failed) reject(failed);
                    else resolve(value);
               });
               setTimeout(() => {
                    if (done) return;
                    else if (n < 3) attempt(n + 1);
                    else reject(new Timeout("Timed out"));
               }, 250);
          }
          attempt(1);
     });
}

function requestType(name, handler) {
     defineRequestType(name, (nest, content, source, callback) => {
          try {
               Promise.resolve(handler(nest, content, source)).then(
                    (response) => callback(null, response),
                    (failure) => callback(failure)
               );
          } catch (exception) {
               callback(exception);
          }
     });
}

requestType("ping", () => "pong");
function availableNeighbors(nest) {
     let requests = nest.neighbors.map((neighbor) => {
          return request(nest, neighbor, "ping").then(
               () => true,
               () => false
          );
     });
     return Promise.all(requests).then((result) => {
          return nest.neighbors.filter((_, i) => result[i]);
     });
}

import { everywhere } from "./crow-tech";
everywhere((nest) => {
     nest.state.gossip = [];
});
function sendGossip(nest, message, exceptFor = null) {
     nest.state.gossip.push(message);
     for (let neighbor of nest.neighbors) {
          if (neighbor == exceptFor) continue;
          request(nest, neighbor, "gossip", message);
     }
}
requestType("gossip", (nest, message, source) => {
     if (nest.state.gossip.includes(message)) return;
     console.log(`${nest.name} received gossip '${message}' from ${source}`);
     sendGossip(nest, message, source);
});

requestType("connections", (nest, { name, neighbors }, source) => {
     let connections = nest.state.connections;
     if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors))
          return;
     connections.set(name, neighbors);
     broadcastConnections(nest, name, source);
});
function broadcastConnections(nest, name, exceptFor = null) {
     for (let neighbor of nest.neighbors) {
          if (neighbor == exceptFor) continue;
          request(nest, neighbor, "connections", {
               name,
               neighbors: nest.state.connections.get(name),
          });
     }
}

everywhere((nest) => {
     nest.state.connections = new Map();
     nest.state.connections.set(nest.name, nest.neighbors);
     broadcastConnections(nest, nest.name);
});

function anyStorage(nest, source, name) {
     if (source == nest.name) return storage(nest, name);
     else return routeRequest(nest, source, "storage", name);
}
async function chicks(nest, year) {
     let list = "";
     await Promise.all(
          network(nest).map(async (name) => {
               list += `${name}: ${await anyStorage(
                    nest,
                    name,
                    `chicks in ${year}`
               )}\n`;
          })
     );
     return list;
}

async function chicks(nest, year) {
     let lines = network(nest).map(async (name) => {
          return (
               name + ": " + (await anyStorage(nest, name, `chicks in ${year}`))
          );
     });
     return (await Promise.all(lines)).join("\n");
}

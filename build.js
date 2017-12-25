const Rx = require('rxjs');
const Docker = require('dockerode');
const fs     = require('fs');

const socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
const stats  = fs.statSync(socket);

if (!stats.isSocket()) {
  throw new Error('Are you sure the docker is running?');
}

const docker = new Docker({ socketPath: socket });


function pullDockerImage(imageName) {
  return Rx.Observable.create(function (observer) {
    docker.pull(imageName, (err, stream) => {
      if (err) return observer.error(err);
      stream.on('data', x => observer.next(x.toString('utf8')));
      stream.on('error', e => observer.error(e));
      stream.on('end', () => observer.complete());
    });
  });
}

pullDockerImage('eldarshamukhamedov/pingpong').subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('completed')
);


//promise
// docker.run('hello-world', [], process.stdout).then(function(container) {
//   console.log(container.output.StatusCode);
//   return container.remove();
// }).then(function(data) {
//   console.log('container removed');
// }).catch(function(err) {
//   console.log(err);
// });

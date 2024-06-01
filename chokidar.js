import chokidar from 'chokidar';

const target_directory_00 = 'src/app';
const target_directory_01 = 'src/components/';
const target_directory_02 = 'src/features/';

const log = console.log.bind(console);

var watcher = chokidar.watch(target_directory_00, target_directory_01, target_directory_02, {
  ignored: /\/\\]\./,
  persistent: true
});

watcher.on('ready', function () {
  log('Initial scan complete. Ready for changes');

  watcher.on('add', function (path, stats) {
    log(`File ${path} has been added`);
    log(`Stats: ${JSON.stringify(stats)}`);
  });

  watcher.on('change', function (path, stats) {
    log(`File ${path} has been changed`);
    log(`Stats: ${JSON.stringify(stats)}`);
  });
});

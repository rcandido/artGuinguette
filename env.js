
var envs = [{
        env: 'local1',
        port: ':9000',
        prod: false,
        isCurrent: true
    }, {
        env: 'local2',
        port: ':8888',
        prod: false,
        isCurrent: false
    }, {
        env: 'prod1',
        port: '',
        prod: true,
        isCurrent: false
    }
];
var currentArtEnv = envs[0];

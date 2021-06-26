const config = {
    // api: 'https://60.205.155.29',
    // ws: 'ws://60.205.155.29:3000'
    api: typeof location !== 'undefined' ? location.origin.slice(0, location.origin.lastIndexOf(':')) + ':3000' : 'https://60.205.155.29',
    ws: 'ws://localhost:3000'
}

if (typeof module !== 'undefined') {
    module.exports = config
}
let dns = require('dns'),
    args = process.argv.splice(2),
    domain = args[0];

dns.resolve(domain, (err, addresses) => {
    if (err) {
        console.log(err);
    }

    addresses.forEach(address => {
        console.log('resolve => address: %j', address);
    });
});

dns.lookup(domain, (err, address, family) => {
    if (err) {
        console.log(err);
    }

    console.log('lookup => address: %j family: IPv%s', address, family);
});

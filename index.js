const utm = require('utm')
for(let zone=18; zone<=19; zone++) {
    for (const letter of ['F', 'G', 'H', 'J', 'K']) {
        for (let easting = 100; easting < 834; easting++) {
            for (let northing=0; northing < 9999; northing++) {
                const {latitude, longitude} = utm.toLatLon(easting*1000 + 500, northing*1000 + 500, zone, letter, undefined ,true)
                if (latitude > -60 && latitude < -10 && longitude > -80 && longitude < -60) {
                    const {zoneNum, zoneLetter} = utm.fromLatLon(latitude, longitude)
                    if (zone === zoneNum && zoneLetter === letter) {
                        console.log(`${getLetter(zone,letter)}${easting}${northing}, ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
                        break
                    }
                }
            }
        }
    }
}

function getLetter(zone, letter) {
    switch (zone + letter)
    {
        case "18F":
            return "A";
        case "18G":
            return "B";
        case "18H":
            return "C";
        case "18J": return "D";
        case "18K": return "E";
        case "19F": return "F";
        case "19G": return "G";
        case "19H": return "H";
        case "19J": return "I";
        case "19K": return "J";
        default:
            return "";
    }
}


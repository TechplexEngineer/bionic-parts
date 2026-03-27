export const nexusToTBA = (nexusMatch: string) => {
    if (!nexusMatch) {
        return '';
    }
    // Split by space, e.g. "Playoff 2" => ["Playoff", "2"]
    const [type, numString] = nexusMatch.split(' ');
    const matchNum = parseInt(numString, 10);

    if (type === 'Qualification') {
        // "Qualification X" => "qmX"
        return `qm${matchNum}`;
    } else if (type === 'Playoff') {
        // "Playoff X" => "sfXm1"
        return `sf${matchNum}m1`;
    } else if (type === 'Final') {
        // "Final X" => "f1mX"
        return `f1m${matchNum}`;
    }

    // If there's no recognized pattern, return something indicating an unmapped match
    return '';
}

export const tbaToNexus = (tbaMatch: string) => {
    if (!tbaMatch) {
        return '';
    }
    // "qm1" => ["qm", "1"]
    // "sf2m1" => ["sf", "2", "m1"]
    // "f1m3" => ["f", "1", "m3"]
    const parts = tbaMatch.split(/(\d+)/).filter(Boolean); // split by digits and remove empty strings
    const type = parts[0];
    const numString = parts[1];

    if (type === 'qm') {
        // "qmX" => "Qualification X"
        return `Qualification ${numString}`;
    } else if (type === 'sf') {
        // "sfXm1" => "Playoff X"
        return `Playoff ${numString}`;
    } else if (type === 'f') {
        // "f1mX" => "Final X"
        return `Final ${numString.slice(1)}`; // remove 'm' from "m3" to get "3"
    }

    // If there's no recognized pattern, return something indicating an unmapped match
    return '';
}

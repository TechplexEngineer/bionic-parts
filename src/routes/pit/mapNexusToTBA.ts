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
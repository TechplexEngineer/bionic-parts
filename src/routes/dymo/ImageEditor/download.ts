export const downloadImage = (data: string, name: string) => {
    // const imageData = data.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    const m = data.match(/^data:image\/(?<format>png|jpeg|jpg);base64,/);
    if (!m || !m.groups || !m.groups["format"]) {
        alert('Error: unsupported image format');
        return;
    }
    const format = m.groups["format"];

    const link = document.createElement('a');
    link.href = data;
    link.download = name;
    link.dispatchEvent(new MouseEvent('click'));;
}


export const downloadSVG = (SVGmarkup: string, name: string) => {
    const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVGmarkup);

    const link = document.createElement('a');
    link.href = url;
    link.download = name+'.svg';
    link.dispatchEvent(new MouseEvent('click'));
    setTimeout(() => {
        // for Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(url);
    }, 60);
}
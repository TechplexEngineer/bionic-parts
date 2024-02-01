export interface EncoderProps {
    activeItem: string,
    rawText: string,
    urlLink: string,
    telPhoneNumber: string,
    smsPhoneNumber: string,
    smsMessage: string,
    wifiAuth: string,
    wifiNetworkName: string,
    wifiPassword: string,
    wifiIsHidden: boolean,
    emailAddress: string,
    eventTitle: string,
    eventDescription: string,
    eventLocation: string,
    eventStartDate: string,
    eventStartTime: string,
    eventEndDate: string,
    eventEndTime: string,
    vcardPrefix: string,
    vcardFirstName: string,
    vcardLastName: string,
    vcardPhoneNumber: string,
    vcardWorkPhone: string,
    vcardEmail: string,
    vcardOrg: string,
    vcardJobTitle: string,
    vcardBirthday: string,
    vcardAddress: string,
    vcardWebsite: string
}

export const encoder = (props: EncoderProps) => {
    const {
        activeItem,
        rawText,
        urlLink,
        telPhoneNumber,
        smsPhoneNumber,
        smsMessage,
        wifiAuth,
        wifiNetworkName,
        wifiPassword,
        wifiIsHidden,
        emailAddress,
        eventTitle,
        eventDescription,
        eventLocation,
        eventStartDate,
        eventStartTime,
        eventEndDate,
        eventEndTime,
        vcardPrefix,
        vcardFirstName,
        vcardLastName,
        vcardPhoneNumber,
        vcardWorkPhone,
        vcardEmail,
        vcardOrg,
        vcardJobTitle,
        vcardBirthday,
        vcardAddress,
        vcardWebsite
    } = props;


    switch (activeItem) {
        case 'Raw Data':
            return rawText;
        case 'URL Web Link':
            return urlLink;
        case 'Phone Number':
            return `tel:${telPhoneNumber}`;
        case 'Text Message':
            return `sms:${smsPhoneNumber}:${smsMessage}`;
        case 'Wi-Fi Credentials':
            return `WIFI:T:${wifiAuth};S:${wifiNetworkName};P:${wifiPassword};H:${wifiIsHidden};`;
        case 'Email':
            return `mailto:${emailAddress}`;
        case 'Calendar Event':
            return `BEGIN:VEVENT\n` +
                `SUMMARY:${eventTitle}\n` +
                `DESCRIPTION:${eventDescription}\n` +
                `LOCATION:${eventLocation}\n` +
                `DTSTART:${eventStartDate}T${eventStartTime}00Z\n` +
                `DTEND:${eventEndDate}T${eventEndTime}00Z\n` +
                `END:VEVENT`;
        case 'vCard Contact Card':
            return `BEGIN:VCARD\n` +
                `VERSION:3.0\n` +
                `FN;CHARSET=UTF-8:${vcardPrefix ? `${vcardPrefix} ` : ''}${vcardFirstName} ${vcardLastName}\n` +
                `N;CHARSET=UTF-8:${vcardLastName};${vcardFirstName};;${vcardPrefix}\n` +
                `TEL;TYPE=HOME,VOICE:${vcardPhoneNumber}\n` +
                `TEL;TYPE=WORK,VOICE:${vcardWorkPhone}\n` +
                `EMAIL:${vcardEmail}\n` +
                `ORG;CHARSET=UTF-8:${vcardOrg}\n` +
                `TITLE:${vcardJobTitle}\n` +
                `BDAY:${vcardBirthday}\n` +
                `ADR;CHARSET=UTF-8:${vcardAddress}\n` +
                `URL:${vcardWebsite}\n` +
                `END:VCARD`;
        default:
            throw new Error(`Invalid activeItem value. ${activeItem}`);
    }
};
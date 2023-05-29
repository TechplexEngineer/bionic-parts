export enum MfgMethods {
    //key = value (shown to user)
    Machined = 'Machined',
    Printed = '3D Printed',
    Cots = 'Purchased',
    // Magic = 'Magic'
}

export enum Machines {
    //key = value (shown to user)
    Lathe = 'Lathe',
    CNCLathe = 'CNC Lathe',
    Mill = 'Mill',
    CNCMill = 'CNC Mill (Velox/Tormach)',
    DrillPress = 'Drill Press',
    LaserCutter = 'Laser Cutter',
    Bandsaw = 'Bandsaw',
    TableSaw = 'Table Saw',
    ChopSaw = 'Chop Saw',
}

export enum Printers {
    //key = value (shown to user)
    Prusa = 'Prusa',
    FormLabs = 'Formlabs',
    Other = "Other (See Description)"
}

export enum PrusaPrinterMaterials {
    //key = value (shown to user)
    PLA = 'PLA',
    PETG = 'PETG',
    NylonX = 'NylonX',
    Other = "Other (See Description)"
}

export enum FormLabsPrinterMaterials {
    //key = value (shown to user)
    SLSNylon = 'SLS Nylon',
    SLSTPU = 'SLS TPU',
    EResin = 'Engineering Resin',
    FResin = 'Fast Resin',
    Other = "Other (See Description)"
}
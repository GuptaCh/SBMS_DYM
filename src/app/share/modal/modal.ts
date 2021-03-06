export interface AssertType {
    assetTypeId?: String;
    assetType?: String;
    description?: String;
    assetCategoryName?: String;
}

export interface AssetCategory {
    assetCategoryId?: string;
    categoryName?: string;
    description?: string;
}

export interface Assert {
    assetId?: string;
    serialNumber?: string;
    storageTemperature?: string;
    ratedBetteryCapacity?: string;
    specifiedCharge?: string;
    dimensions?: string;
    dischargeRate?: string;
    nominalVoltage?: string;
    chargingPolicy?: string;
    operatingTemperature?: string;
    warrantyPeriod?: string;
    assetCategory?: string;
    assetType?: string;
    typeOfAsset?: string;
}

export interface RoleList {
    createdBy?: string;
    createdDate?: string;
    modifiedBy?: string;
    modifiedDate?: string;
    roleId?: string;
    name?: string;
    aliasName?: string;
    description?: string;
    permissions: string[]
}

export interface permissionsList {
    createdBy?: string,
    createdDate: Date;
    modifiedBy?: string;
    modifiedDate?: string;
    permissionId?: string;
    name?: string;
    description?: string;
}

export interface CreatePermission {
    permissionId?: string;
    name?: string;
    description?: string;
}


export interface User {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    emailId: string;
    password: string;
    phoneNumber: string;
    city: string;
    state: string;
    country: string;
    roleName?: string;
    permissions?: string[];
}
export interface Country {
    id: number;
    name: string;
    phone_code: string;
}

export interface State {
    id: string;
    name: string;
    state_code: string;
}

export interface City {
    name: string;
}
export interface RoleName {
    roleId: string;
    aliasName: string;
    name: string;

}
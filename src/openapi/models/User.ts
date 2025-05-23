/* tslint:disable */
/* eslint-disable */
/**
 * Car Rental API
 * Backend API for Car Rental Application
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
    UserRoleToJSONTyped,
} from './UserRole';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * User's first name
     * @type {string}
     * @memberof User
     */
    firstName: string;
    /**
     * User's last name
     * @type {string}
     * @memberof User
     */
    lastName: string;
    /**
     * User's email address
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * User's phone number
     * @type {string}
     * @memberof User
     */
    phoneNumber: string;
    /**
     * AWS Cognito user ID
     * @type {string}
     * @memberof User
     */
    cognitoId: string;
    /**
     * User's role
     * @type {UserRole}
     * @memberof User
     */
    role?: UserRole;
}



/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('phoneNumber' in value) || value['phoneNumber'] === undefined) return false;
    if (!('cognitoId' in value) || value['cognitoId'] === undefined) return false;
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'email': json['email'],
        'phoneNumber': json['phone_number'],
        'cognitoId': json['cognito_id'],
        'role': json['role'] == null ? undefined : UserRoleFromJSON(json['role']),
    };
}

export function UserToJSON(json: any): User {
    return UserToJSONTyped(json, false);
}

export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'email': value['email'],
        'phone_number': value['phoneNumber'],
        'cognito_id': value['cognitoId'],
        'role': UserRoleToJSON(value['role']),
    };
}


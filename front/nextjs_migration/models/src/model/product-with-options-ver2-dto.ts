/* tslint:disable */
/* eslint-disable */
/**
 * ecommerce API
 * ecommerce API MVP
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProductWithOptionsVer2DTO
 */
export interface ProductWithOptionsVer2DTO {
    /**
     * 
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'categoryId': number;
    /**
     * 
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'productId': number;
    /**
     * 
     * @type {string}
     * @memberof ProductWithOptionsVer2DTO
     */
    'productName': string;
    /**
     * 
     * @type {string}
     * @memberof ProductWithOptionsVer2DTO
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'rating': number;
    /**
     * 
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'ratingCount': number;
    /**
     * 
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'productItemId': number;
    /**
     * Price of the product
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'price': number;
    /**
     * 
     * @type {number}
     * @memberof ProductWithOptionsVer2DTO
     */
    'optionVariationId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductWithOptionsVer2DTO
     */
    'optionVariationName'?: string;
}

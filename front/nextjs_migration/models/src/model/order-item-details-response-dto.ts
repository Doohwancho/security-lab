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
 * @interface OrderItemDetailsResponseDTO
 */
export interface OrderItemDetailsResponseDTO {
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'orderItemId': number;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'orderId': number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'orderDate': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'orderStatus': string;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'memberId': number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'role': string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderItemDetailsResponseDTO
     */
    'enabled': boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'updatedAt': string;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'productId': number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'productName': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'rating': number;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'ratingCount': number;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'optionValue': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItemDetailsResponseDTO
     */
    'optionVariationValue': string;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'quantity': number;
    /**
     * 
     * @type {number}
     * @memberof OrderItemDetailsResponseDTO
     */
    'price': number;
}

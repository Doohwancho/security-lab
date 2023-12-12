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


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import { AllCategoriesByDepthResponseDTO } from '../../src/model';
// @ts-ignore
import { ErrorResponseDTO } from '../../src/model';
// @ts-ignore
import { OptionsOptionVaraitonsResponseDTO } from '../../src/model';
// @ts-ignore
import { PaginatedProductResponse } from '../../src/model';
// @ts-ignore
import { ProductCreateRequestDTO } from '../../src/model';
// @ts-ignore
import { ProductDTO } from '../../src/model';
// @ts-ignore
import { ProductDetailResponseDTO } from '../../src/model';
// @ts-ignore
import { ProductWithOptionsListResponseDTO } from '../../src/model';
/**
 * ProductApi - axios parameter creator
 * @export
 */
export const ProductApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new product
         * @param {ProductCreateRequestDTO} productCreateRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct: async (productCreateRequestDTO: ProductCreateRequestDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productCreateRequestDTO' is not null or undefined
            assertParamExists('createProduct', 'productCreateRequestDTO', productCreateRequestDTO)
            const localVarPath = `/products`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(productCreateRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a product by ID
         * @param {number} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct: async (productId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('deleteProduct', 'productId', productId)
            const localVarPath = `/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches categories organized by their depth levels.
         * @summary Retrieve all categories, sort by depth
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCategoriesSortByDepth: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get options and option variations for a category
         * @param {number} categoryId ID of the category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOptionsByCategory: async (categoryId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryId' is not null or undefined
            assertParamExists('getOptionsByCategory', 'categoryId', categoryId)
            const localVarPath = `/categories/{categoryId}/options`
                .replace(`{${"categoryId"}}`, encodeURIComponent(String(categoryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get product details by product ID
         * @param {number} productId The ID of the product to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductDetailDTOsById: async (productId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('getProductDetailDTOsById', 'productId', productId)
            const localVarPath = `/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of products belonging to a specific category
         * @summary Get products by category
         * @param {number} categoryId ID of the category to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsWithOptionsByCategory: async (categoryId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryId' is not null or undefined
            assertParamExists('getProductsWithOptionsByCategory', 'categoryId', categoryId)
            const localVarPath = `/products/category/{categoryId}`
                .replace(`{${"categoryId"}}`, encodeURIComponent(String(categoryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all products with pagination
         * @param {number} [page] Page number of the requested page
         * @param {number} [size] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsWithPagiation: async (page?: number, size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches top 10 higest rated products
         * @summary Retrieve top 10 products sort by highest rating
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopTenHighestRatedProducts: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/highestRatings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a product by ID
         * @param {number} productId 
         * @param {ProductDTO} productDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProduct: async (productId: number, productDTO: ProductDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('updateProduct', 'productId', productId)
            // verify required parameter 'productDTO' is not null or undefined
            assertParamExists('updateProduct', 'productDTO', productDTO)
            const localVarPath = `/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(productDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductApi - functional programming interface
 * @export
 */
export const ProductApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new product
         * @param {ProductCreateRequestDTO} productCreateRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProduct(productCreateRequestDTO: ProductCreateRequestDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProduct(productCreateRequestDTO, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.createProduct']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Delete a product by ID
         * @param {number} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProduct(productId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProduct(productId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.deleteProduct']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Fetches categories organized by their depth levels.
         * @summary Retrieve all categories, sort by depth
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCategoriesSortByDepth(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AllCategoriesByDepthResponseDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCategoriesSortByDepth(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.getAllCategoriesSortByDepth']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get options and option variations for a category
         * @param {number} categoryId ID of the category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOptionsByCategory(categoryId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OptionsOptionVaraitonsResponseDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOptionsByCategory(categoryId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.getOptionsByCategory']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get product details by product ID
         * @param {number} productId The ID of the product to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductDetailDTOsById(productId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProductDetailResponseDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductDetailDTOsById(productId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.getProductDetailDTOsById']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns a list of products belonging to a specific category
         * @summary Get products by category
         * @param {number} categoryId ID of the category to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductsWithOptionsByCategory(categoryId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductWithOptionsListResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductsWithOptionsByCategory(categoryId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.getProductsWithOptionsByCategory']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get all products with pagination
         * @param {number} [page] Page number of the requested page
         * @param {number} [size] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductsWithPagiation(page?: number, size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedProductResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductsWithPagiation(page, size, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.getProductsWithPagiation']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Fetches top 10 higest rated products
         * @summary Retrieve top 10 products sort by highest rating
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopTenHighestRatedProducts(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProductDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopTenHighestRatedProducts(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.getTopTenHighestRatedProducts']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Update a product by ID
         * @param {number} productId 
         * @param {ProductDTO} productDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProduct(productId: number, productDTO: ProductDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProduct(productId, productDTO, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProductApi.updateProduct']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ProductApi - factory interface
 * @export
 */
export const ProductApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new product
         * @param {ProductCreateRequestDTO} productCreateRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(productCreateRequestDTO: ProductCreateRequestDTO, options?: any): AxiosPromise<ProductDTO> {
            return localVarFp.createProduct(productCreateRequestDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a product by ID
         * @param {number} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct(productId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches categories organized by their depth levels.
         * @summary Retrieve all categories, sort by depth
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCategoriesSortByDepth(options?: any): AxiosPromise<Array<AllCategoriesByDepthResponseDTO>> {
            return localVarFp.getAllCategoriesSortByDepth(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get options and option variations for a category
         * @param {number} categoryId ID of the category
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOptionsByCategory(categoryId: number, options?: any): AxiosPromise<Array<OptionsOptionVaraitonsResponseDTO>> {
            return localVarFp.getOptionsByCategory(categoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get product details by product ID
         * @param {number} productId The ID of the product to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductDetailDTOsById(productId: number, options?: any): AxiosPromise<Array<ProductDetailResponseDTO>> {
            return localVarFp.getProductDetailDTOsById(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of products belonging to a specific category
         * @summary Get products by category
         * @param {number} categoryId ID of the category to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsWithOptionsByCategory(categoryId: number, options?: any): AxiosPromise<ProductWithOptionsListResponseDTO> {
            return localVarFp.getProductsWithOptionsByCategory(categoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all products with pagination
         * @param {number} [page] Page number of the requested page
         * @param {number} [size] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsWithPagiation(page?: number, size?: number, options?: any): AxiosPromise<PaginatedProductResponse> {
            return localVarFp.getProductsWithPagiation(page, size, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches top 10 higest rated products
         * @summary Retrieve top 10 products sort by highest rating
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopTenHighestRatedProducts(options?: any): AxiosPromise<Array<ProductDTO>> {
            return localVarFp.getTopTenHighestRatedProducts(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a product by ID
         * @param {number} productId 
         * @param {ProductDTO} productDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProduct(productId: number, productDTO: ProductDTO, options?: any): AxiosPromise<ProductDTO> {
            return localVarFp.updateProduct(productId, productDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductApi - interface
 * @export
 * @interface ProductApi
 */
export interface ProductApiInterface {
    /**
     * 
     * @summary Create a new product
     * @param {ProductCreateRequestDTO} productCreateRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    createProduct(productCreateRequestDTO: ProductCreateRequestDTO, options?: AxiosRequestConfig): AxiosPromise<ProductDTO>;

    /**
     * 
     * @summary Delete a product by ID
     * @param {number} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    deleteProduct(productId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Fetches categories organized by their depth levels.
     * @summary Retrieve all categories, sort by depth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    getAllCategoriesSortByDepth(options?: AxiosRequestConfig): AxiosPromise<Array<AllCategoriesByDepthResponseDTO>>;

    /**
     * 
     * @summary Get options and option variations for a category
     * @param {number} categoryId ID of the category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    getOptionsByCategory(categoryId: number, options?: AxiosRequestConfig): AxiosPromise<Array<OptionsOptionVaraitonsResponseDTO>>;

    /**
     * 
     * @summary Get product details by product ID
     * @param {number} productId The ID of the product to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    getProductDetailDTOsById(productId: number, options?: AxiosRequestConfig): AxiosPromise<Array<ProductDetailResponseDTO>>;

    /**
     * Returns a list of products belonging to a specific category
     * @summary Get products by category
     * @param {number} categoryId ID of the category to filter by
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    getProductsWithOptionsByCategory(categoryId: number, options?: AxiosRequestConfig): AxiosPromise<ProductWithOptionsListResponseDTO>;

    /**
     * 
     * @summary Get all products with pagination
     * @param {number} [page] Page number of the requested page
     * @param {number} [size] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    getProductsWithPagiation(page?: number, size?: number, options?: AxiosRequestConfig): AxiosPromise<PaginatedProductResponse>;

    /**
     * Fetches top 10 higest rated products
     * @summary Retrieve top 10 products sort by highest rating
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    getTopTenHighestRatedProducts(options?: AxiosRequestConfig): AxiosPromise<Array<ProductDTO>>;

    /**
     * 
     * @summary Update a product by ID
     * @param {number} productId 
     * @param {ProductDTO} productDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApiInterface
     */
    updateProduct(productId: number, productDTO: ProductDTO, options?: AxiosRequestConfig): AxiosPromise<ProductDTO>;

}

/**
 * ProductApi - object-oriented interface
 * @export
 * @class ProductApi
 * @extends {BaseAPI}
 */
export class ProductApi extends BaseAPI implements ProductApiInterface {
    /**
     * 
     * @summary Create a new product
     * @param {ProductCreateRequestDTO} productCreateRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public createProduct(productCreateRequestDTO: ProductCreateRequestDTO, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).createProduct(productCreateRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a product by ID
     * @param {number} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public deleteProduct(productId: number, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).deleteProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches categories organized by their depth levels.
     * @summary Retrieve all categories, sort by depth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getAllCategoriesSortByDepth(options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).getAllCategoriesSortByDepth(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get options and option variations for a category
     * @param {number} categoryId ID of the category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getOptionsByCategory(categoryId: number, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).getOptionsByCategory(categoryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get product details by product ID
     * @param {number} productId The ID of the product to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getProductDetailDTOsById(productId: number, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).getProductDetailDTOsById(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of products belonging to a specific category
     * @summary Get products by category
     * @param {number} categoryId ID of the category to filter by
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getProductsWithOptionsByCategory(categoryId: number, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).getProductsWithOptionsByCategory(categoryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all products with pagination
     * @param {number} [page] Page number of the requested page
     * @param {number} [size] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getProductsWithPagiation(page?: number, size?: number, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).getProductsWithPagiation(page, size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches top 10 higest rated products
     * @summary Retrieve top 10 products sort by highest rating
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getTopTenHighestRatedProducts(options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).getTopTenHighestRatedProducts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a product by ID
     * @param {number} productId 
     * @param {ProductDTO} productDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public updateProduct(productId: number, productDTO: ProductDTO, options?: AxiosRequestConfig) {
        return ProductApiFp(this.configuration).updateProduct(productId, productDTO, options).then((request) => request(this.axios, this.basePath));
    }
}


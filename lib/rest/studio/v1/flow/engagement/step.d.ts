/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';
import { StepContextList } from './step/stepContext';
import { StepContextListInstance } from './step/stepContext';

/**
 * @description Initialize the StepList
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 * @param engagementSid - Engagement Sid.
 */
declare function StepList(version: V1, flowSid: string, engagementSid: string): StepListInstance;

interface StepListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): StepContext;
  /**
   * Streams StepInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: StepListInstanceEachOptions, callback?: (item: StepInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a step
   *
   * @param sid - Step Sid.
   */
  get(sid: string): StepContext;
  /**
   * Retrieve a single target page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
  /**
   * Lists StepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: StepListInstanceOptions, callback?: (error: Error | null, items: StepInstance[]) => any): Promise<StepInstance[]>;
  /**
   * Retrieve a single page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: StepListInstancePageOptions, callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface StepListInstanceEachOptions {
  callback?: (item: StepInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface StepListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface StepListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface StepPayload extends StepResource, Page.TwilioResponsePayload {
}

interface StepResource {
  account_sid: string;
  context: string;
  date_created: Date;
  date_updated: Date;
  engagement_sid: string;
  flow_sid: string;
  links: string;
  name: string;
  sid: string;
  transitioned_from: string;
  transitioned_to: string;
  url: string;
}

interface StepSolution {
  engagementSid?: string;
  flowSid?: string;
}


declare class StepContext {
  /**
   * Initialize the StepContext
   *
   * @property stepContext - stepContext resource
   *
   * @param version - Version of the resource
   * @param flowSid - Flow Sid.
   * @param engagementSid - Engagement Sid.
   * @param sid - Step Sid.
   */
  constructor(version: V1, flowSid: string, engagementSid: string, sid: string);

  /**
   * fetch a StepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StepInstance) => any): Promise<StepInstance>;
  stepContext: StepContextListInstance;
}


declare class StepInstance extends SerializableClass {
  /**
   * Initialize the StepContext
   *
   * @property sid - A string that uniquely identifies this Step.
   * @property accountSid - Account Sid.
   * @property flowSid - Flow Sid.
   * @property engagementSid - Engagement Sid.
   * @property name - The event that caused the flow to transition to this Step.
   * @property context - The context
   * @property transitionedFrom - The Widget that preceded the Widget for this Step.
   * @property transitionedTo - The Widget that will follow the Widget for this Step.
   * @property dateCreated - The date this Step was created
   * @property dateUpdated - The date this Step was updated
   * @property url - The URL of this resource.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param engagementSid - Engagement Sid.
   * @param sid - Step Sid.
   */
  constructor(version: V1, payload: StepPayload, flowSid: string, engagementSid: string, sid: string);

  private _proxy: StepContext;
  accountSid: string;
  context: string;
  dateCreated: Date;
  dateUpdated: Date;
  engagementSid: string;
  /**
   * fetch a StepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StepInstance) => any): void;
  flowSid: string;
  links: string;
  name: string;
  sid: string;
  /**
   * Access the stepContext
   */
  stepContext(): StepContextListInstance;
  /**
   * Produce a plain JSON object version of the StepInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  transitionedFrom: string;
  transitionedTo: string;
  url: string;
}


declare class StepPage extends Page<V1, StepPayload, StepResource, StepInstance> {
  /**
   * Initialize the StepPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: StepSolution);

  /**
   * Build an instance of StepInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StepPayload): StepInstance;
}

export { StepContext, StepInstance, StepList, StepListInstance, StepListInstanceEachOptions, StepListInstanceOptions, StepListInstancePageOptions, StepPage, StepPayload, StepResource, StepSolution }

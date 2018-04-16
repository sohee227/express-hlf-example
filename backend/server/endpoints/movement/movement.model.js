import uuid from 'uuid/v4';
import moment from 'moment';

/**
 * Create a movement from an incoming ADD request, with values in the right order
 *
 * ORDER OF OBJECT VALUES:
 *
 * Key
 * Transporter
 * Location
 * Timestamp
 * Holder
 *
 * @param Request A validated ADD request containing all needed values
 * @returns {Object}
 */
export function addRequestToArgs(req) {
  return Object.values({
    Key: uuid(),
    Transporter: req.body.transporter,
    Location: req.body.location,
    Timestamp: moment().unix().toString(),
    Holder: req.body.holder
  });
}

/**
 * Create a key object from an incoming GET ONE request
 *
 * @param Request A validated GET ONE request
 * @returns {Object}
 */
export function getOneRequestToArgs(req) {
  return Object.values({
    Key: req.params.key,
  });
}

/**
 * Create an update object from an incoming UPDATE request
 *
 * @param Request A validated UPDATE request
 * @returns {Object}
 */
export function updateRequestToArgs(req) {
  return Object.values({
    Key: req.body.key.toString(),
    Holder: req.body.holder
  });
}

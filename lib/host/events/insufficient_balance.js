'use strict'

/**
 * Propagates the error to all instances that have the relevant listener
 *
 * @param {Object} aoHost
 * @param {string} gid - AO instance GID to operate on
 * @param {Order} order - the order that failed due to insufficient balance
 * @param {Notification} notification - which reported the error
 */
module.exports = async (aoHost, gid, order, notification) => {
  const instance = aoHost.getAOInstance(gid)

  if (!instance) {
    return
  }

  aoHost.triggerAOEvent(instance, 'errors', 'insufficient_balance', order, notification)
}

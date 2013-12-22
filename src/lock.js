/**
 * Asynchronous read/write lock implementation for Node.
 *
 * The rules:
 *	- there may be zero or more readers at the same time,
 *	- there may be only one writer at a time,
 *	- if there is a writer there may be no readers.
 *
 * ReadWriteLock also supports multiple independent locks identified by custom
 * user-defined strings called `keys'.
 *
 * @class ReadWriteLock
 * @constructor
 */
module.exports = function () {
	'use strict';

	function Lock() {
		this.readers = 0;
		this.queue = [];
	}

	var defaultLock = new Lock();
	var table = {};

	/**
	 * Acquires a read lock and invokes a user-defined callback as soon as it is
	 * acquired.
	 *
	 * The operation might require some time as there may be a writer. You can
	 * optionally specify a timeout in milliseconds: if it expires before a read
	 * lock can be acquired, this request is canceled and no lock will be
	 * acquired.
	 *
	 * The `key` argument allows you to work on a specific lock; omitting it
	 * will request the default lock.
	 *
	 * @method readLock
	 * @param [key] {String} The name of the lock to read-acquire. The default
	 * lock will be requested if no key is specified.
	 * @param callback {Function} A user-defined function invoked as soon as a
	 * read lock is acquired.
	 * @param callback.release {Function} A function that releases the lock.
	 *
	 * This must be called by the ReadWriteLock user at some point, otherwise
	 * the read lock will remain and prevent any writers from operating. Anyway
	 * you do not necessarily need to call it inside the `callback` function:
	 * you can save a reference to the `release` function and call it later.
	 * @param [options] {Object} Further optional settings.
	 * @param [options.scope] {Object} An optional object to use as `this` when
	 * calling the `callback` function.
	 * @param [options.timeout] {Number} A timeout in milliseconds within which
	 * the lock must be acquired; if a writer is still operating and the timeout
	 * expires the request is canceled and no lock is acquired.
	 * @param [options.timeoutCallback] {Function} An optional user-defined
	 * callback function that gets invokes in case the timeout expires before
	 * the lock can be acquired.
	 */
	function readLock(key, callback, options) {
		var lock;
		if (typeof key !== 'function') {
			if (!table.hasOwnProperty(key)) {
				table[key] = new Lock();
			}
			lock = table[key];
		} else {
			options = callback;
			callback = key;
			lock = defaultLock;
		}
		// TODO
	}

	/**
	 * TODO
	 *
	 * @method writeLock
	 * @param [key] {String} TODO
	 * @param callback {Function} TODO
	 * @param callback.release {Function} TODO
	 * @param [options] {Object} TODO
	 * @param [options.scope] {Object} TODO
	 * @param [options.timeout] {Number} TODO
	 * @param [options.timeoutCallback] {Function} TODO
	 */
	function writeLock() {
		// TODO
	}

	this.readLock = readLock;
	this.writeLock = writeLock;

	/**
	 * TODO
	 *
	 * @method readSection
	 * @param [key] {String} TODO
	 * @param callback {Function} TODO
	 * @param [options] {Object} TODO
	 * @param [options.scope] {Object} TODO
	 * @param [options.timeout] {Number} TODO
	 * @param [options.timeoutCallback] {Function} TODO
	 */
	this.readSection = function (key, callback, options) {
		// TODO
	};

	/**
	 * TODO
	 *
	 * @method writeSection
	 * @param [key] {String} TODO
	 * @param callback {Function} TODO
	 * @param [options] {Object} TODO
	 * @param [options.scope] {Object} TODO
	 * @param [options.timeout] {Number} TODO
	 * @param [options.timeoutCallback] {Function} TODO
	 */
	this.writeSection = function (key, callback, options) {
		// TODO
	};
};

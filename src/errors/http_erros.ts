class HttpError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

/** 
 *  Status code :401
*/


export class UnautorizeError extends HttpError {}

/** 
 *  Status code :409
*/

export class ConflicError extends HttpError {}


// Add more error classes if you need distinction


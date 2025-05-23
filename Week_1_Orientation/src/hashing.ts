import crypto  from "crypto";

const input = '100xdevs';

//Creates and returns a Hash object that can be used to generate hash digests using the given algorithm
//(method) Hash.update(data: crypto.BinaryLike): crypto.Hash (+1 overload)
//Updates the hash content with the given data, the encoding of which is given in inputEncoding. If encoding is not provided, and the data is a string, an encoding of 'utf8' is enforced. If data is a Buffer, TypedArray, orDataView, then inputEncoding is ignored.
const hash = crypto.createHash('sha256').update(input).digest('hex')
console.log(hash);



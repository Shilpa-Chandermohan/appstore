//
// Copyright (C) 2011 Panasonic Corporation. All Rights Reserved.
//
//**************************************
// File Name: pkg_signature.js
// Date: 17 January 2011
//**************************************/

var hexcase = 0;

// hex output format. 0 - lowercase; 1 - uppercase        
var b64pad  = "";


// base - 64 pad character. "=" for strict RFC compliance   

// Below function taken from a website
// These are the functions you'll usually want to call
// They take string arguments and return either hex or base - 64 encoded strings

function hex_md5(s) {
   return rstr2hex(rstr_md5(str2rstr_utf8(s)));
}


/*
 * Calculate the MD5 of a raw string
 */
function rstr_md5(s) {
   return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}

//*******************************************
// Purpose: Calculate the HMAC - MD5, of a key and some data (raw strings)
// Input Parameters:    
//        key   -The key required for Calculating the HMAC.
//        data - The info   required for Calculating the HMAC.
// Output Parameters:   None
// Return:
//      binl2rstr(binl_md5(opad.concat(hash), 512 + 128));   -The bin format of the hmac.
// Calling Sequence: This method is called when we want to generate
//                      a hmac.
//***********************************************/
function rstr_hmac_md5(key, data) {
    var bkey = rstr2binl(key);
    if (bkey.length > 16)
        bkey = binl_md5(bkey, key.length * 8);

    var ipad = Array(16), opad = Array(16);
    for(var loopVar = 0; loopVar < 16; loopVar ++ ) {
       ipad[loopVar] = bkey[loopVar] ^ 0x36363636;
       opad[loopVar] = bkey[loopVar] ^ 0x5C5C5C5C;
    }
    
    var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    
    return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
}

//*******************************************
// Purpose: Convert a raw string to a hex string
// Input Parameters:    
//        input   -The input string to be converted.
// Output Parameters:   None
// Return:
//      output  -The Hex format of the input string.
// Calling Sequence: This method is called when we want to convert the raw string
// to hex format
//***********************************************/
function rstr2hex(input) {
   try {
      hexcase
   } catch(e) {
      hexcase = 0;
   }
   
   //For selecting the case of alphabets
   var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
   
   //Output Hex string variable.
   var output = "";
   var x;
   for(var loopVar = 0; loopVar < input.length; loopVar ++ ) {
      x = input.charCodeAt(loopVar);
      output += hex_tab.charAt((x >>> 4) & 0x0F) +  hex_tab.charAt( x & 0x0F);
   }
   
   return output;
}

//*******************************************
// Purpose: Convert a raw string to base 8 UTF String format.
// Input Parameters:    
//        input   -The input string to be converted.
// Output Parameters:   None
// Return:
//      output  -The base 8 UTF String format of the input string.
// Calling Sequence: This method is called when we want to convert the raw string
// to base 8 UTF String format.
//***********************************************/
function str2rstr_utf8(input) {
   var output = "";
   var loopVar = - 1;
   var x, y;

   while( ++ loopVar < input.length) {
   
      /* Decode utf - 16 surrogate pairs */
      x = input.charCodeAt(loopVar);
      y = loopVar + 1 < input.length ? input.charCodeAt(loopVar + 1) : 0;
      if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
         x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
         loopVar ++ ;
      }

      /* Encode output as utf - 8 */
      if(x <= 0x7F)
          output += String.fromCharCode(x);
      else if(x <= 0x7FF)
          output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F), 0x80 | ( x & 0x3F));
      else if(x <= 0xFFFF)
          output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),0x80 | ((x >>> 6 ) & 0x3F),0x80 | ( x & 0x3F));
      else if(x <= 0x1FFFFF)
          output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6 ) & 0x3F), 0x80 | ( x & 0x3F));
   }
   return output;
}

//*******************************************
// Purpose: Convert a raw string to base 16 littleendian UTF String format.
// Input Parameters:    
//        input   -The input string to be converted.
// Output Parameters:   None
// Return:
//      output  -The base 16 littleendian UTF String format of the input string.
// Calling Sequence: This method is called when we want to convert the raw string
// to base 16 littleendian UTF String format.
//***********************************************/
function str2rstr_utf16le(input) {
    var output = "";
    for(var loopVar = 0; loopVar < input.length; loopVar ++ ) {
        output += String.fromCharCode( input.charCodeAt(loopVar) & 0xFF, (input.charCodeAt(loopVar) >>> 8) & 0xFF);
    }
    return output;
}

//*******************************************
// Purpose: Convert a raw string to base 16 bigendian UTF String format.
// Input Parameters:    
//        input   -The input string to be converted.
// Output Parameters:   None
// Return:
//      output  -The base 16 bigendian UTF String format of the input string.
// Calling Sequence: This method is called when we want to convert the raw string
// to base 16 bigendian UTF String format.
//***********************************************/
function str2rstr_utf16be(input) {
   var output = "";
   for(var loopVar = 0; loopVar < input.length; loopVar ++ )
       output += String.fromCharCode((input.charCodeAt(loopVar) >>> 8) & 0xFF,input.charCodeAt(loopVar)        & 0xFF);
   return output;
}

//*******************************************
// Purpose: Convert a raw string to binary little endian String format.
//             Characters > 255 have their high - byte silently ignored.
// Input Parameters:    
//        input   -The input string to be converted.
// Output Parameters:   None
// Return:
//      output  -The binary little endian String format of the input string.
// Calling Sequence: This method is called when we want to convert the raw string
// to binary little endian String format.
//***********************************************/
function rstr2binl(input) {
   var output = Array(input.length >> 2);
   for(var loopVar = 0; loopVar < output.length; loopVar ++ )
       output[loopVar] = 0;
   for(var loopVar = 0; loopVar < input.length * 8; loopVar += 8)
       output[loopVar >> 5] |= (input.charCodeAt(loopVar / 8) & 0xFF) << (loopVar % 32);
   return output;
}

//*******************************************
// Purpose: Convert a array of little endian words to a string.
// Input Parameters:    
//        input   -The array of little endian words.
// Output Parameters:   None
// Return:
//      output  -The String format of the array of little endian words.
// Calling Sequence: This method is called when we want to convert a array of little endian words to a string.
//***********************************************/
function binl2rstr(input) {
   var output = "";
   for(var loopVar = 0; loopVar < input.length * 32; loopVar += 8)
       output += String.fromCharCode((input[loopVar >> 5] >>> (loopVar % 32)) & 0xFF);
   return output;
}

//*******************************************
// Purpose: Calculate the MD5 of an array of LittleEndian words.
// Input Parameters:    
//        x   -The array of little endian words.
//        len  -The array length of little endian words
// Output Parameters:   None
// Return:
//      output  -The array of MD5 of little endian words
// Calling Sequence: This method is called when we want to Calculate
//               the MD5 of an array of LittleEndian words.
//***********************************************/
function binl_md5(x, len) {
   /* append padding */
   x[len >> 5] |= 0x80 << ((len) % 32);
   x[(((len + 64) >>> 9) << 4) + 14] = len;

   var a =  1732584193;
   var b = - 271733879;
   var c = - 1732584194;
   var d =  271733878;

   for(var loopVar = 0; loopVar < x.length; loopVar += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;

      a = md5_ff(a, b, c, d, x[loopVar + 0], 7 , - 680876936);
      d = md5_ff(d, a, b, c, x[loopVar + 1], 12, - 389564586);
      c = md5_ff(c, d, a, b, x[loopVar + 2], 17,  606105819);
      b = md5_ff(b, c, d, a, x[loopVar + 3], 22, - 1044525330);
      a = md5_ff(a, b, c, d, x[loopVar + 4], 7 , - 176418897);
      d = md5_ff(d, a, b, c, x[loopVar + 5], 12,  1200080426);
      c = md5_ff(c, d, a, b, x[loopVar + 6], 17, - 1473231341);
      b = md5_ff(b, c, d, a, x[loopVar + 7], 22, - 45705983);
      a = md5_ff(a, b, c, d, x[loopVar + 8], 7 ,  1770035416);
      d = md5_ff(d, a, b, c, x[loopVar + 9], 12, - 1958414417);
      c = md5_ff(c, d, a, b, x[loopVar + 10], 17, - 42063);
      b = md5_ff(b, c, d, a, x[loopVar + 11], 22, - 1990404162);
      a = md5_ff(a, b, c, d, x[loopVar + 12], 7 ,  1804603682);
      d = md5_ff(d, a, b, c, x[loopVar + 13], 12, - 40341101);
      c = md5_ff(c, d, a, b, x[loopVar + 14], 17, - 1502002290);
      b = md5_ff(b, c, d, a, x[loopVar + 15], 22,  1236535329);

      a = md5_gg(a, b, c, d, x[loopVar + 1], 5 , - 165796510);
      d = md5_gg(d, a, b, c, x[loopVar + 6], 9 , - 1069501632);
      c = md5_gg(c, d, a, b, x[loopVar + 11], 14,  643717713);
      b = md5_gg(b, c, d, a, x[loopVar + 0], 20, - 373897302);
      a = md5_gg(a, b, c, d, x[loopVar + 5], 5 , - 701558691);
      d = md5_gg(d, a, b, c, x[loopVar + 10], 9 ,  38016083);
      c = md5_gg(c, d, a, b, x[loopVar + 15], 14, - 660478335);
      b = md5_gg(b, c, d, a, x[loopVar + 4], 20, - 405537848);
      a = md5_gg(a, b, c, d, x[loopVar + 9], 5 ,  568446438);
      d = md5_gg(d, a, b, c, x[loopVar + 14], 9 , - 1019803690);
      c = md5_gg(c, d, a, b, x[loopVar + 3], 14, - 187363961);
      b = md5_gg(b, c, d, a, x[loopVar + 8], 20,  1163531501);
      a = md5_gg(a, b, c, d, x[loopVar + 13], 5 , - 1444681467);
      d = md5_gg(d, a, b, c, x[loopVar + 2], 9 , - 51403784);
      c = md5_gg(c, d, a, b, x[loopVar + 7], 14,  1735328473);
      b = md5_gg(b, c, d, a, x[loopVar + 12], 20, - 1926607734);

      a = md5_hh(a, b, c, d, x[loopVar + 5], 4 , - 378558);
      d = md5_hh(d, a, b, c, x[loopVar + 8], 11, - 2022574463);
      c = md5_hh(c, d, a, b, x[loopVar + 11], 16,  1839030562);
      b = md5_hh(b, c, d, a, x[loopVar + 14], 23, - 35309556);
      a = md5_hh(a, b, c, d, x[loopVar + 1], 4 , - 1530992060);
      d = md5_hh(d, a, b, c, x[loopVar + 4], 11,  1272893353);
      c = md5_hh(c, d, a, b, x[loopVar + 7], 16, - 155497632);
      b = md5_hh(b, c, d, a, x[loopVar + 10], 23, - 1094730640);
      a = md5_hh(a, b, c, d, x[loopVar + 13], 4 ,  681279174);
      d = md5_hh(d, a, b, c, x[loopVar + 0], 11, - 358537222);
      c = md5_hh(c, d, a, b, x[loopVar + 3], 16, - 722521979);
      b = md5_hh(b, c, d, a, x[loopVar + 6], 23,  76029189);
      a = md5_hh(a, b, c, d, x[loopVar + 9], 4 , - 640364487);
      d = md5_hh(d, a, b, c, x[loopVar + 12], 11, - 421815835);
      c = md5_hh(c, d, a, b, x[loopVar + 15], 16,  530742520);
      b = md5_hh(b, c, d, a, x[loopVar + 2], 23, - 995338651);

      a = md5_ii(a, b, c, d, x[loopVar + 0], 6 , - 198630844);
      d = md5_ii(d, a, b, c, x[loopVar + 7], 10,  1126891415);
      c = md5_ii(c, d, a, b, x[loopVar + 14], 15, - 1416354905);
      b = md5_ii(b, c, d, a, x[loopVar + 5], 21, - 57434055);
      a = md5_ii(a, b, c, d, x[loopVar + 12], 6 ,  1700485571);
      d = md5_ii(d, a, b, c, x[loopVar + 3], 10, - 1894986606);
      c = md5_ii(c, d, a, b, x[loopVar + 10], 15, - 1051523);
      b = md5_ii(b, c, d, a, x[loopVar + 1], 21, - 2054922799);
      a = md5_ii(a, b, c, d, x[loopVar + 8], 6 ,  1873313359);
      d = md5_ii(d, a, b, c, x[loopVar + 15], 10, - 30611744);
      c = md5_ii(c, d, a, b, x[loopVar + 6], 15, - 1560198380);
      b = md5_ii(b, c, d, a, x[loopVar + 13], 21,  1309151649);
      a = md5_ii(a, b, c, d, x[loopVar + 4], 6 , - 145523070);
      d = md5_ii(d, a, b, c, x[loopVar + 11], 10, - 1120210379);
      c = md5_ii(c, d, a, b, x[loopVar + 2], 15,  718787259);
      b = md5_ii(b, c, d, a, x[loopVar + 9], 21, - 343485551);

      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
   }
   return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
   return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}

function md5_ff(a, b, c, d, x, s, t) {
   return md5_cmn((b & c) | (( ~ b) & d), a, b, x, s, t);
}

function md5_gg(a, b, c, d, x, s, t) {
   return md5_cmn((b & d) | (c & ( ~ d)), a, b, x, s, t);
}

function md5_hh(a, b, c, d, x, s, t) {
   return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5_ii(a, b, c, d, x, s, t) {
   return md5_cmn(c ^ (b | ( ~ d)), a, b, x, s, t);
}

//*******************************************
// Purpose: Add integers, wrapping at 2 ^ 32. 
//              This uses 16 - bit operations internally
//              to work around bugs in some JS interpreters.
// Input Parameters:    
//        x,y   -The two numbers to be added
// Output Parameters:   None
// Return:
//      -The sum of the two input numbers.
// Calling Sequence: This method is called when we want to sum two numbers.
//***********************************************/
function safe_add(x, y) {
   var lsw = (x & 0xFFFF) + (y & 0xFFFF);
   var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
   return (msw << 16) | (lsw & 0xFFFF);
}

//*******************************************
// Purpose: To perform Bitwise rotate a 32 - bit number to the left
// Input Parameters:    
//        num   -The number to be rotated.
//        cnt  -The no of times to be rotated.
// Output Parameters:   None
// Return:
//      -The required number after rotation
// Calling Sequence: This method is called when we want to
//                  do  Bitwise rotation of a 32 - bit number to the left.
//***********************************************/
function bit_rol(num, cnt) {
   return (num << cnt) | (num >>> (32 - cnt));
}

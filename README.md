# Table of Contents
- [Introduction](#introducioni_asteram)
- [What to Expect](#what_to_expect)
- [About AErrors](#about_Aerrors)
- [System Log](#system_log)

# introducioni_asteram
-----
Velkomme/Welcome/Xvilkom/Halu
im aster, maker of conlangs
avid script enthusiast
apparently an os

Thank you for choosing AsterLP. I hope you have as much fun using it as I did making it.
-sincerely, aster irving

# what_to_expect
-----
fuckton of random pages and unfinished projects
i procrastinate a lot so dont expect polished shit
# about_Aerrors
-----
AErrors (short for AsterLP Errors) are a bunch of more human-readable errors compared to HTTP errors comprised of the following:

| Code  | Meaning                            | HTTP Equivalent |
|-------|------------------------------------|----------------|
| A001  | Page not found/file missing        | 404            |
| A001(1) | Previous page not found/missing  | 404            |
| A002  | Parsing Error                      | 400            |
| A003  | Server overload/Server error       | 500            |
| A004  | Protocol violation                 | 400            |
| A005  | Service unavailable                | 503            |
| A005(1) | Service outdated                 | 426            |
| A005(2) | Service unimplemented on version | 501            |
| A005(3) | Service unsupported on browser   | 400/415        |
| A006  | Credentials invalid (NIU\*)        | 401            |
| A007  | Credentials forbidden (NIU\*)      | 403            |
| A008  | Response duration timeout          | 504            |
| A998  | Under Construction                 | 404            |

\*NIU is shorthand for **Not In Use** (on AsterLP)

basically they serve as my version of HTTP errors that are relevant to AsterLP for you the client to see since they're only logged in the console

currently A001, A001(1) and A998 are fully operational but expect the others in the future
# system_log
-----
| Version | Changes |
|---------|---------|
| v14.9.3.2 | Added aerrors.js and loaded into every index.html |
| v14.9.3 | Added /revision/geo/; Added placeholder default html for /geo/clim/; Fixed dvh issue with AsterLP image; Made sidebar scrollable |
| v14.9.1 | Added URL, current subdirectories, and subdirectory display to `404.html`; added `error.png`; added class `error`; added AError log to `404.html` |
| v14.9.0.2 | Added /anthem/; fixed `<div class="content">` pairing in index.html; gave up on herobrine |
| v14.9.0 | Added /revision/eng/index.html; added more stuff to /revision/; removed herobrine |
| v14.8.5 | Added /revision/; ceased progress on CSC and CC; removed herobrine |
| v14.6.13 | Added progress bar to conlang centre; renamed `ikibimi` to `ikbm`; worked on SPK and SL CSC entries; planning on PK and SL CC entries; removed herobrine |
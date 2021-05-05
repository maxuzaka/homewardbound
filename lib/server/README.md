<!--

Copyright (c) 2021 The Homeward Bound Authors.

-->

# Website Server

> Create an HTTP server for serving website files.

<section class="usage">

## Usage

```javascript
var httpServer = require( 'TODO/server' );
```

#### httpServer( \[options] )

Returns a function which creates an HTTP server for serving website files.

<!-- run-disable -->

```javascript
var opts = {
    'port': 7331,
    'address': '127.0.0.1'
};
var createServer = httpServer( opts );

function done( error, fastify ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Success!' );
    fastify.server.close();
}

createServer( done );
```

The function accepts the following `options`:

-   **address**: server address. Default: `'127.0.0.1'`.
-   **hostname**: server hostname (e.g., `localhost` ).
-   **logger**: `boolean` indicating whether to enable logging. Default: `false`.
-   **port**: server port. Default: `0` (i.e., randomly assigned).
-   **prefix**: URL path prefix used to create a virtual mount path for a static directory (e.g., `/` to match a website virtual mount path). Default: `'/'`.
-   **root**: root directory containing website files. May be either an absolute path or a path relative to the current working directory. This directory will be mounted onto the virtual path `/`. Default: current working directory.
-   **static**: directory from which to serve static documentation assets and files. May be either an absolute path or a path relative to the current working directory. When set to an empty string (as is the default), the server does **not** serve static assets. Default: `''`.
-   **template**: application shell template. Default: `''`.
-   **trustProxy**: `boolean` indicating whether to trust `X-forwarded-by` headers when the server is sitting behind a proxy. Default: `false`.

An application shell template should include a `{{ FRAGMENT }}` parameter into which fragments are injected.

<!-- run-disable -->

```javascript
var template = [
    '<html>',
    '<body>',
    '{{ FRAGMENT }}',
    '</body>',
    '</html>'
];

var opts = {
    'port': 7331,
    'address': '127.0.0.1',
    'template': template.join( '\n' )
};

var createServer = httpServer( opts );
```

* * *

### Routes

<a name="ping-get"></a>

#### GET /ping

Pings the server application.

##### Response: 200 (text/plain)

The response body will be

```text
pong
```

##### Examples

From the command-line,

<!-- run-disable -->

```bash
$ curl 'http://127.0.0.1:<port>/ping'
```

* * *

<a name="status-get"></a>

#### GET /status

Returns the server application's status.

##### Response: 200 (text/plain)

The response body will be

```text
OK
```

##### Examples

From the command-line,

<!-- run-disable -->

```bash
$ curl 'http://127.0.0.1:<port>/status'
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var httpServer = require( 'TODO/server' );

var opts = {
    'port': 3000,
    'address': '127.0.0.1',
    'logger': true,
    'root': join( __dirname, 'examples', 'fixtures' ),
    'template': '<html><body>Fragment: {{ FRAGMENT }}</body></html>'
};

var createServer = httpServer( opts );

function done( error, fastify ) {
    if ( error ) {
        console.error( error.message );
        return;
    }
    console.log( 'Success!' );
    console.log( fastify.server.address() );
    fastify.server.close();
}

createServer( done );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: homeward-bound-server [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
         --address address           Server address. Default: 127.0.0.1.
         --hostname hostname         Server hostname.
         --logger                    Enable logging.
         --port port                 Server port. Default: 0.
         --prefix prefix             Virtual mount path for static files.
         --root dir                  Root directory.
         --static dir                Static file directory.
         --template filepath         Path to an application shell template.
         --trust_proxy               Trust X-forwarded-by headers.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   A `template` file path may be either an absolute path or a path relative to the current working directory.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

<!-- run-disable -->

```bash
$ homeward-bound-server --logger
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->

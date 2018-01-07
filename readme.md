# Serverless mandelbrot "server"

This was created just to toy with AWS lambda and the serverless framework. 
The main idea was to have a cheap way to scale the mandelbrot calculation 
to 1000 compute nodes (the current max).

The easiest way to use this server is to run the mandelbrot client at
https://github.com/marre/mandelbrot-client-java.

Drawbacks:
 * The "data" is returned as a json array so the result is quite large and
   takes a while to transfer.
   * Currently no easy way to transfer a binary from a lambda via the 
     serverless framework.
   * Max result size is 6Mb, an alternative is to send the result to S3 and 
     redirect to that file.
 * Scaling problems, I haven't been able to get AWS to scale this to more
   than one instance yet

## How to setup

In brief:

* Install nodejs (https://nodejs.org/)
* Install serverless (https://serverless.com/)
* Setup AWS account
* Configure serverless credentials (https://serverless.com/framework/docs/providers/aws/guide/credentials/)


And then run:
```
✗ npm install
[...]
✗ serverless deploy
[...]
```

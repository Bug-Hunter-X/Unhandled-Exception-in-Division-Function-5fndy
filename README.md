# Unhandled Exception in Division Function

This repository demonstrates a common error in JavaScript: unhandled exceptions. The `divide` function throws an error if the divisor is zero, which is not properly handled, causing the program to halt abruptly.

## Bug Description

The `divide` function lacks proper error handling. If the second argument (`b`) is zero, it throws an error, but this error is not caught.  This leads to an unhandled exception and program termination.

## Solution

The provided solution implements proper error handling using a `try-catch` block. This approach prevents the program from crashing and allows the execution to continue gracefully, even when unexpected inputs such as zero divisor occur.  The solution also provides a more informative error message.
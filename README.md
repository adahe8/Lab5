# Lab 5 - Starter

Name: Ada He
## Explore and Expose
[Expose](https://adahe8.github.io/Lab5/expose.html)
[Explor](https://adahe8.github.io/Lab5/explore.html)

## Unit Testing Understanding Check
1. I would not use unit testing for a full "message" feature between users, since I'm not sure how unit testing would work for application-scale feature. There are multiple components acting together for a message feature: the generation of the text bubble and visual text, the sending of information to another user, etc. Multiple components that can have individual unit tests to clear before message sending can occur are in conjunciton with each other.
2. Yes, I would unit test! The max message length feature is small-scale and quick to check; I can intuitively see how a unit test can be written for it.

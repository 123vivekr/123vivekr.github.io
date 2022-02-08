---
layout: post
title:  "Rust: First Impressions"
date:   2022-02-08 20:57:21 +0530
tags: [rust]
---

It was for a project during my undergrad that I grew interest for this strange programming language. It was suggested by none other than my team mate, and hardcore Rustacean [Devdutt](https://twitter.com/devShenoi).

Rust is different from the languages I've been used to, like Python and JavaScript. I have tried my hands at static typed low level languages like C and C++ and in my opinion, they are easy to get started with. But Rust is not. Rust has a steep learning curve and it takes time.

I feel that the tradeoff here is that with C/C++, though it's easier to get started, it takes a whole lot of time and effort to write memory safe and efficient programs. But with Rust, safety and efficiency are built-in from day one. Along with Rust's ownership concept and the compiler that enforces it, you will get used to the underlying rules. Moreover, the compiler is patient enough to explain what went wrong, and where.

# Community
Rust is a fairly new programming language. It doesn't have polished edges and sometimes you get stuck while learning stuff. For a beginner, a good community is a boon. Thankfully Rust has a great community. 

At the very beginning you have the most excellent Rust tutorial - [The Rust Book](https://doc.rust-lang.org/book/). Well explained and goes in detail about the most useful parts of the language. The second best thing is the people who share what they've learnt along their journey - through blogs and youtube videos. (Yes, those 2hr long streaming sessions on youtube. Those too)

# Low level concepts
Learn Rust - that's the advice I'd give my younger self when starting my undergrad in CS. Rust is a low level language but still retains a high level syntax. The concepts remain, and there is a lot you'll get to learn. As a CS student, it is extremely important to understand the low level working of a program and concepts like memory management, concurrency and the like.

You can build systems software projects like CLIs, operating systems, game engines, embedded system software or even web servers. My first systems software prorject was a simple shell with a few builtins. It was written in C. See [vsh](https://github.com/123vivekr/vsh). I learnt about how a shell works, and how inputs and outputs are processed.

Another one is [timers](https://github.com/123vivekr/timers) which is written in Rust and has better program design. One of the main problems I've faced with this is the time drift due to task switch from the CPU. The initial implementation relied on manually keeping track of each second passed by incrementing a counter.

I've been learning about async rust and that itself has led me down a rabbit hole about how a runtime and the underlying operating system manages memory. I got exposed to hands on experience with Linux system calls and such. More on that in another post. Rust has certainly opened me up to a lot of low level concepts during my journey. Combined with my point above on community, the learning part is fun.

# Type System
Coming from a dynamic programming language like Python, facing the type system was a challenge. I had to keep track of what types my data had, and when I passed it around in my code. But now after working on a few projects, I've come to like it. It provides more control over how I use and pass memory. It also gives a clear structure to the data representations. The Rust compiler has been very helpful by pointing out errors and possible solutions.

# Compiler
The compiler is helpful and strict at the same time. I should admit that the compiler is a bit slow but that is bearable when compared to the advantages it provides. Apart from the safety promises and performance optimizations, the error messages are articulate and the solutions are straight forward. There is a lot to learn just from the compiler itself.

This is my experience exploring the language till now. It has been a fun journey and I plan to continue down this lane. I wouldn't have given this a shot if it wasn't for my hardcore fellow Rustacean [Devdutt](https://twitter.com/devShenoi). Hopefully, you'll get to hear more of this!
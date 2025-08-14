/* eslint react/no-unescaped-entities: 0 */
export default function Post() {
  return (
    <article className="prose prose-neutral mx-auto">
      <h1>Rust: First Impressions</h1>
      <p className="!mt-0 text-sm text-foreground/60">
        {new Date("2022-02-08T20:57:21+05:30").toLocaleString()} ·
        <span className="ml-2 inline-flex gap-2">
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">rust</span>
        </span>
      </p>
      <p>
        It was for a project during my undergrad that I grew interest for this strange programming
        language. It was suggested by none other than my team mate, and hardcore Rustacean{" "}
        <a href="https://twitter.com/devShenoi" target="_blank" rel="noreferrer">
          Devdutt
        </a>
        .
      </p>
      <p>
        Rust is different from the languages I've been used to, like Python and JavaScript. I have
        tried my hands at static typed low level languages like C and C++ and in my opinion, they
        are easy to get started with. But Rust is not. Rust has a steep learning curve and it takes
        time.
      </p>
      <p>
        I feel that the tradeoff here is that with C/C++, though it's easier to get started, it
        takes a whole lot of time and effort to write memory safe and efficient programs. But with
        Rust, safety and efficiency are built-in from day one. Along with Rust's ownership concept
        and the compiler that enforces it, you will get used to the underlying rules. Moreover, the
        compiler is patient enough to explain what went wrong, and where.
      </p>

      <h2>Community</h2>
      <p>
        Rust is a fairly new programming language. It doesn't have polished edges and sometimes you
        get stuck while learning stuff. For a beginner, a good community is a boon. Thankfully Rust
        has a great community.
      </p>
      <p>
        At the very beginning you have the most excellent Rust tutorial —{" "}
        <a href="https://doc.rust-lang.org/book/" target="_blank" rel="noreferrer">
          The Rust Book
        </a>
        . Well explained and goes in detail about the most useful parts of the language. The second
        best thing is the people who share what they've learnt along their journey — through blogs
        and youtube videos. (Yes, those 2hr long streaming sessions on youtube. Those too)
      </p>

      <h2>Low level concepts</h2>
      <p>
        Learn Rust — that's the advice I'd give my younger self when starting my undergrad in CS.
        Rust is a low level language but still retains a high level syntax. The concepts remain, and
        there is a lot you'll get to learn. As a CS student, it is extremely important to understand
        the low level working of a program and concepts like memory management, concurrency and the
        like.
      </p>
      <p>
        You can build systems software projects like CLIs, operating systems, game engines, embedded
        system software or even web servers. My first systems software prorject was a simple shell
        with a few builtins. It was written in C. See{" "}
        <a href="https://github.com/123vivekr/vsh" target="_blank" rel="noreferrer">
          vsh
        </a>
        . I learnt about how a shell works, and how inputs and outputs are processed.
      </p>
      <p>
        Another one is{" "}
        <a href="https://github.com/123vivekr/timers" target="_blank" rel="noreferrer">
          timers
        </a>{" "}
        which is written in Rust and has better program design. One of the main problems I've faced
        with this is the time drift due to task switch from the CPU. The initial implementation
        relied on manually keeping track of each second passed by incrementing a counter.
      </p>
      <p>
        I've been learning about async rust and that itself has led me down a rabbit hole about how
        a runtime and the underlying operating system manages memory. I got exposed to hands on
        experience with Linux system calls and such. More on that in another post. Rust has
        certainly opened me up to a lot of low level concepts during my journey. Combined with my
        point above on community, the learning part is fun.
      </p>

      <h2>Type System</h2>
      <p>
        Coming from a dynamic programming language like Python, facing the type system was a
        challenge. I had to keep track of what types my data had, and when I passed it around in my
        code. But now after working on a few projects, I've come to like it. It provides more
        control over how I use and pass memory. It also gives a clear structure to the data
        representations. The Rust compiler has been very helpful by pointing out errors and possible
        solutions.
      </p>

      <h2>Compiler</h2>
      <p>
        The compiler is helpful and strict at the same time. I should admit that the compiler is a
        bit slow but that is bearable when compared to the advantages it provides. Apart from the
        safety promises and performance optimizations, the error messages are articulate and the
        solutions are straight forward. There is a lot to learn just from the compiler itself.
      </p>
      <p>
        This is my experience exploring the language till now. It has been a fun journey and I plan
        to continue down this lane. I wouldn't have given this a shot if it wasn't for my hardcore
        fellow Rustacean{" "}
        <a href="https://twitter.com/devShenoi" target="_blank" rel="noreferrer">
          Devdutt
        </a>
        . Hopefully, you'll get to hear more of this!
      </p>
    </article>
  );
}

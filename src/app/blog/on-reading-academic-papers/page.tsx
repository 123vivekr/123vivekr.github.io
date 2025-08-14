/* eslint react/no-unescaped-entities: 0 */
export default function Post() {
  return (
    <article className="prose prose-neutral mx-auto">
      <h1>On reading academic papers</h1>
      <p className="!mt-0 text-sm text-foreground/60">
        {new Date("2022-09-18T12:55:00+05:30").toLocaleString()} ·
        <span className="ml-2 inline-flex gap-2">
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">academic</span>
        </span>
      </p>
      <p>
        Continuous learning is a critical skill. The internet houses a panoply of learning material
        for almost any topic under the sun. YouTube is my go-to for learning anything and everything
        — for it is easy to digest and entertaining. I'd regard YouTube to be on the lower side of
        information density. Contrastingly, reading academic papers is something I've begun
        recently. YouTube and academic papers are on the opposite extremes of information density —
        which is why I like reading papers.
      </p>
      <p>
        Through this post, I share my inclinations to read papers, some frameworks to understand
        them and how communities like Papers We Love are essential to catalyze essential discourse.
      </p>

      <h2>My Experience</h2>
      <p>
        I had my first stint with reading research papers for college. We had a final year project
        which involved preparing literature surveys and finally producing a paper of our own. This
        introduced me to looking up and understanding papers. Finally, writing one was a good
        experience on producing structured technical literature.
      </p>
      <p>
        One of my friends introduced me to 6.824, MIT Distributed Systems course by MIT. This course
        is taught through dissecting research papers — from the early Map Reduce to Raft and finally
        large scale distributed systems like Blockchains. One of my biggest takeaways from this
        course is the exposure to the fascinating world of understanding computer science from a
        perspecive of academic research — the key aspect being able to grasp the evolutionary nature
        of scientific development.
      </p>
      <p>
        Essentially, science isn't particularly definite. It is an evolutionary body of knowledge
        and experimentation lies at the heart of it. Each experiment produces a new block of
        knowledge, thus expanding our sphere of understanding. Similarly, future experiments will
        build on the knolwedge from past experiments. If we see each paper as an experiment or
        observation, we will be able to see the chronological development of this body of knowledge.
        In subtle sense, the paper is a part of a story being told of science's evolution — a paper
        explains why such an experiment was carried out, how it was carried out, what the
        observations were, etc.
      </p>

      <h2>Critical Thinking</h2>
      <p>
        Consequently, while we go over a paper, we may sometimes pause to ponder over the process of
        experimentation carried out in it, the style of implementation, etc. This opens up an arena
        for discussions regarding the multitude of factors considered while developing that paper.
        As a result of this, we subconsciously imbibe the fact that everything brings with it a
        tradeoff — some subtle and some apparent. This kind of mindset, I believe, is crucial for
        deepening your understanding of a subject and might possibly open door for innovation.
      </p>

      <h2>Information Dense in a Hyper-marketed World</h2>
      <p>
        Critical thinking demands comprehensive knowledge in the subject matter and unfortunately,
        the currrent world is bombarded with hyper marketed content — to milk out every last cent of
        profit and to exploit market segments. This is especially apparent in industries like
        blockchain and finance. In situations like this, a research paper, as it is verified by
        academically certified panelists, is a boon for gathering information on a topic. And it is
        upto you to zoom in or out on the details — and this provides you the flexibility to easily
        understand the topic, verify the information and decide whether to continue in this
        direction.
      </p>

      <h2>Summary and Implementation</h2>
      <p>
        After reading a paper, I try to summarize the learnings. Sometiems I take a step further and
        try to implement aspects of it or in its entirety. This is time demanding but makes the
        understanding concrete.
      </p>

      <h2>Community</h2>
      <p>
        Previously I had mentioned critical thinking which involves understanding the tradeoffs,
        rationalizing the choices taken by the author and thiking of ways to improve the paper.
        While all of this involves only the effort of the self, it is infinitely more pleasureable
        to discuss this paper with a like minded group of individuals. Pinging off ideas off of each
        other, trying to understand the subject matter through a different perspective from another
        perpective, etc is invaluable. This is where communities like PapersWeLove come into the
        picture. I urge your to explore these.
      </p>

      <h2>Frameworks for Reading Papers</h2>
      <p>
        Academic papers are structured and almost every paper has a similar pattern. Throughout my
        journey, I've discovered a few frameworks for reading papers. These frameworks guide you to
        easily understanding a paper — whether you are looking for surface level information to
        decide if you'd want to continue down this path or if you want to deep dive into the domain.
        The Three Step Pass is one of most popular ones I've found. Below is an outline. The full
        method is available as a paper{" "}
        <a
          href="https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        (kinda meta right?)
      </p>

      <h3>The Three-Pass Approach</h3>
      <p>Follow the three passes, where each pass will conclude with you gaining deeper knowledge.</p>

      <h4>First Pass</h4>
      <ul>
        <li>Read the section headings to get a bird's eye view of the paper.</li>
        <li>You can glance over the references, mentally ticking off the ones you've already read.</li>
      </ul>
      <p>At the end of the first pass, you should be able to answer the 5 C's:</p>
      <ul>
        <li>Category of paper (measurement, analysis, description, review, etc)</li>
        <li>Context</li>
        <li>Correctness</li>
        <li>Main contributions</li>
        <li>Clarity: Is the paper well written</li>
      </ul>

      <h4>Second Pass</h4>
      <p>This step is to understand the key points, so ignore details such as proofs.</p>
      <ul>
        <li>Look carefully at illustrations and correctness — this helps to separate shoddy work.</li>
        <li>
          Remember to mark unread references and unknown words — revisit them to learn about the
          background of the paper.
        </li>
      </ul>
      <p>
        After this pass, you should be able to summarize the main premise of the paper, with
        supporting evidence, to someone else.
      </p>

      <h4>Third Pass</h4>
      <p>
        This is an attempt to virtually re-implement the paper. This stage will help you identify
        not only the paper's innovations, but also its hidden findings and assumptions.
      </p>
      <ul>
        <li>Identify and challenge every assumption. And think about how you yourself would present a particular idea.</li>
        <li>Jot down ideas for future work.</li>
      </ul>
      <p>
        After this pass, you should be able to reconstruct the entire paper from memory — pinpoint
        implicit assumptions, missing citations to relevant work, potential issues with experimental
        or analytical techniques.
      </p>

      <h2>Conclusion</h2>
      <p>
        In conclusion, while reading papers is a pleasure, it is time consuming. A lot of
        information is available in more concise forms — some in enjoyable video formats. Reading
        papers isn't a necessary skill but an experience on its own.
      </p>
      <p>
        If you want to go down this path, here is a convincing article on reading academic papers by
        the founding members of the PapersWeLove team:{" "}
        <a
          href="https://stackoverflow.blog/2022/04/07/you-should-be-reading-academic-computer-science-papers/"
          target="_blank"
          rel="noreferrer"
        >
          You should be reading academic computer science papers
        </a>
      </p>
    </article>
  );
}

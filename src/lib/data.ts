export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "on-reading-academic-papers",
    title: "On reading academic papers",
    date: "2022-09-18T12:55:00+05:30",
    summary:
      "Why I read papers, frameworks like the three-pass approach, and the value of community.",
  },
  {
    slug: "rust-first-impressions",
    title: "Rust: First Impressions",
    date: "2022-02-08T20:57:21+05:30",
    summary:
      "Thoughts on Rust’s learning curve, type system, and the compiler after early projects.",
  },
  {
    slug: "gsoc-2020-summary",
    title: "GSoC 2020: A summary",
    date: "2020-08-29T10:36:21+05:30",
    summary:
      "Work on a GStreamer tracker element and Pitivi’s Tracker Perspective with demos.",
  },
  {
    slug: "tracking-adjustments-in-pitivi",
    title: "Tracking adjustments in Pitivi",
    date: "2020-08-16T13:27:21+05:30",
    summary:
      "Edit and correct tracking data directly in Pitivi’s Tracker Perspective with UI improvements.",
  },
  {
    slug: "gstreamer-cvtracker",
    title: "cvtracker: An object tracking plugin for GStreamer",
    date: "2020-08-15T21:57:21+05:30",
    summary:
      "Introducing cvtracker, an OpenCV-based GStreamer plugin for object tracking with usage and properties.",
  },
  {
    slug: "pitivi-object-tracking",
    title: "Pitivi can now track objects",
    date: "2020-07-28T21:57:21+05:30",
    summary:
      "Introducing object tracking in Pitivi: feature overview, internals, and how tracking data flows.",
  },
];

export type Photo = {
  src: string;
  alt: string;
};

export const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=60",
    alt: "Mountains at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",
    alt: "Forest valley",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-2f99da81f0c4?w=800&auto=format&fit=crop&q=60",
    alt: "Ridge trail",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&auto=format&fit=crop&q=60",
    alt: "Lake reflections",
  },
  {
    src: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?w=800&auto=format&fit=crop&q=60",
    alt: "Desert road",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=60",
    alt: "Night sky",
  },
];

export type Project = {
  name: string;
  url: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "cvtracker (GStreamer)",
    url: "https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/merge_requests/1321",
    description: "OpenCV tracker element for object tracking; integrates with Pitivi UI.",
  },
  {
    name: "vsh",
    url: "https://github.com/123vivekr/vsh",
    description: "A simple shell with a few builtins; first systems software project.",
  },
  {
    name: "timers",
    url: "https://github.com/123vivekr/timers",
    description: "Rust timers exploring async and system calls; notes on drift and design.",
  },
];

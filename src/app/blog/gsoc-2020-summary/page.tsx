/* eslint react/no-unescaped-entities: 0 */
export default function Post() {
  return (
    <article className="prose prose-neutral mx-auto">
      <h1>GSoC 2020: A summary</h1>
      <p className="!mt-0 text-sm text-foreground/60">
        {new Date("2020-08-29T10:36:21+05:30").toLocaleString()} ·
        <span className="ml-2 inline-flex gap-2">
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">gsoc</span>
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">pitivi</span>
        </span>
      </p>
      <p>
        This post is a summary of the work that has been completed during the GSoC 2020 period for
        my project, Object Tracking. The project consisted of implementing an Object Tracking UI in
        Pitivi and the associated tracking functionality in GStreamer.
      </p>

      <h2>cvtracker GStreamer element</h2>
      <p>
        <a
          href="https://gitlab.gnome.org/GNOME/pitivi/-/commit/ef2cf45b71b4474b6f2e6bace6bbf8250e2a4d15"
          target="_blank"
          rel="noreferrer"
        >
          flatpak: add opencv_contrib
        </a>
      </p>
      <p>
        I began by adding the <code>opencv_contrib</code> module to the <code>opencv</code>
        installation for the Pitivi development environment. <code>opencv_contrib</code> contains
        the <a
          href="https://docs.opencv.org/3.4/d0/d0a/classcv_1_1Tracker.html"
          target="_blank"
          rel="noreferrer"
        >
          library
        </a>{" "}
        with the tracking algorithms.
      </p>
      <p>
        <a
          href="https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/merge_requests/1321"
          target="_blank"
          rel="noreferrer"
        >
          OpenCV Tracker Element for Object Tracking
        </a>
      </p>
      <p>
        This merge request introduces the tracking functionality in the gst-plugins-bad package.
      </p>
      <p>
        Previously the <code>opencv</code> plugin was not being built due to the unavailability of
        the headers. This{" "}
        <a
          href="https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/commit/93f7b123f74ae9c276a97b3a21726de94414e5fb?merge_request_iid=1321"
          target="_blank"
          rel="noreferrer"
        >
          patch
        </a>{" "}
        fixes the problem, ensuring that the headers are detected for the correct version of opencv
        and the plugin is built.
      </p>
      <p>
        In the next commit:{" "}
        <a
          href="https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/commit/d6c7f882d45d5c089565c9b0c2de5d27a17da562?merge_request_iid=1321"
          target="_blank"
          rel="noreferrer"
        >
          opencv: add cvtracker plugin
        </a>
        , I implement the <code>cvtracker</code> element as part of the <code>opencv</code>{" "}
        GStreamer plugin and set up the associated tests to ensure correct working. The next
        commit:{" "}
        <a
          href="https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/commit/f8fa64083ecb74f22a1d794be54140c62832fdc2?merge_request_iid=1321"
          target="_blank"
          rel="noreferrer"
        >
          meson: add opencv/tracking header requirement
        </a>{" "}
        ensures that the tracking library is available before building the plugin.
      </p>
      <p>
        I implemented an additional feature to draw a rectangle over the tracked object. This will
        come in handy during the testing phase and for live tracking in Pitivi.{" "}
        <a
          href="https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/commit/e62a646c1a1b1cfe0069636138a15f106f512a3f?merge_request_iid=1321"
          target="_blank"
          rel="noreferrer"
        >
          opencv: cvtracker: add draw property
        </a>
      </p>
      <p>
        A brief explanation of the <code>cvtracker</code> element can be found on my blog post:{" "}
        <a
          href="https://123vivekr.github.io/2020/08/15/gstreamer-cvtracker.html"
          target="_blank"
          rel="noreferrer"
        >
          cvtracker: OpenCV object tracking plugin
        </a>
      </p>

      <h2>Tracker Perspective</h2>
      <p>
        With the GStreamer element for tracking completed, the next stage was to implement a
        user-friendly UI for object tracking. The new Tracker Perspective replaces Pitivi's main
        window, allowing to select an object on the viewer and track it. If the chosen tracking
        algorithm fails to track the object correctly, the tracking can be redone from a corrected
        position.
      </p>
      <p>
        The work done on the Pitivi side currently resides in the{" "}
        <a
          href="https://gitlab.gnome.org/GNOME/pitivi/-/merge_requests/315/"
          target="_blank"
          rel="noreferrer"
        >
          Merge Request
        </a>
      </p>
      <p>A brief explanation of tracking objects can be found on my blog post:</p>
      <p>
        <a
          href="https://123vivekr.github.io/2020/07/28/pitivi-object_tracking.html"
          target="_blank"
          rel="noreferrer"
        >
          Pitivi: Object Tracking
        </a>
      </p>
      <p>
        As the project progressed, we iterated and made a lot of UI improvements. A demo with the
        explanation can be found here:{" "}
        <a
          href="https://123vivekr.github.io/2020/08/16/pitivi-object_track_editing.html"
          target="_blank"
          rel="noreferrer"
        >
          Pitivi: Edit Object Tracking
        </a>
      </p>

      <p>
        <img
          src="/images/2020-08-29-pitivi-gsoc-work-product/wp-tracker_persp.png"
          alt="Screenshot of the TrackerPerspective UI"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-29-pitivi-gsoc-work-product/wp-selecting_object.gif"
          alt="Selecting an object from the viewer"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-29-pitivi-gsoc-work-product/wp-live_tracking.png"
          alt="Live tracking in TrackerPerspective"
        />
      </p>

      <h2>Processing the tracked objects</h2>
      <p>
        <img
          src="/images/2020-08-29-pitivi-gsoc-work-product/wp-cover_object.png"
          alt="Cover Object button to add effects and track objects"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-29-pitivi-gsoc-work-product/wp-cover_obj_pop.gif"
          alt="Cover Object Popover"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-29-pitivi-gsoc-work-product/wp-cover_effect.png"
          alt="Cover effect on clip"
        />
      </p>
      <p>
        A tracked object can be covered with a colored rectangle on a clip in the timeline. This can
        be done easily through the "Cover Object" button in the "Clip Properties" middle pane shown
        when a clip is selected.
      </p>
      <p>
        <img src="/images/2020-08-29-pitivi-gsoc-work-product/wp-diag1.png" alt="" />
      </p>
      <p>
        When an Asset from the Media Library is dragged and dropped on the timeline, it becomes a
        Clip. A user can create multiple Clips from a single Asset.
      </p>
      <p>
        The tracked objects belong to the Asset. That means if an object is tracked, it’s available
        to all the Clips backed by the particular Asset. The tracked data is then applied to the
        properties of an Effect applied to the Clip to obtain the ‘cover rectangle’. Clips can have
        object effects independent of each other.
      </p>
      <p>
        If a tracked object is deleted from the Assed in the TrackerPerspective, the effects
        associated with that object will be deleted from all the Clips of that Asset. The below
        figure shows the situation when ‘Object 2’ is deleted.
      </p>
      <p>
        <img src="/images/2020-08-29-pitivi-gsoc-work-product/wp-diag2.png" alt="" />
      </p>
      <p>
        <em>
          <span style={{ textDecoration: "underline" }}>Technical Note</span>: Taking advantage of
          {" "}
          <a
            href="https://lazka.github.io/pgi-docs/#GES-1.0/classes/UriClipAsset.html#GES.UriClipAsset"
            target="_blank"
            rel="noreferrer"
          >
            Assets
          </a>{" "}
          being{" "}
          <a
            href="https://lazka.github.io/pgi-docs/#GES-1.0/classes/MetaContainer.html#GES.MetaContainer"
            target="_blank"
            rel="noreferrer"
          >
            MetaContainers
          </a>
          , we store the Objects's tracking data as a <code>pitivi::tracker_data</code> metadata
          item. The tracking data is saved in the Project's <code>.xges</code> file by GES when the
          Project is saved.
        </em>
      </p>

      <h2>Project Status</h2>
      <p>
        The tracker element and Pitivi UI are complete, as demonstrated in my blog posts. However,
        there are 2 major bugs in the feature for adding effects to the tracked objects.
      </p>
      <p>
        The first bug is when the user adds the effect for two objects, one with more tracking data
        than the other, the video track of the clip gets disfigured. This might be due to no
        available tracking data before the start, which causes the tracking box (red box in this
        case) to be shown at the bottom-right corner until it receives its first tracking data
        point. Here’s a small demo of the bug:{" "}
        <a href="https://youtu.be/8Z3iw2nDcqo" target="_blank" rel="noreferrer">
          YouTube
        </a>
      </p>
      <p>
        The fix for this bug is to add a <code>zorder</code> property to the <code>gescompositor</code>
        element of the effect and to set the tracking data point to some random far away point
        before the beginning of the actual tracked data points.
      </p>
      <p>
        The second bug is when the user adds the effect for an object and then resizes the clip in
        the viewer, the effect doesn’t follow. Here’s a demo for the bug:{" "}
        <a href="https://youtu.be/nPMFoFACIMs" target="_blank" rel="noreferrer">
          YouTube
        </a>
      </p>
      <p>
        The currently discussed solution is to re-adjust the tracking data every time the user makes
        a change to the clip video track in the viewer, by resetting the <code>ControlSource</code>.
      </p>
    </article>
  );
}

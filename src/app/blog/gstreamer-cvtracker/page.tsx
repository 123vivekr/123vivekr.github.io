/* eslint react/no-unescaped-entities: 0 */
export default function Post() {
  return (
    <article className="prose prose-neutral mx-auto">
      <h1>cvtracker: An object tracking plugin for GStreamer</h1>
      <p className="!mt-0 text-sm text-foreground/60">
        {new Date("2020-08-15T21:57:21+05:30").toLocaleString()} ·
        <span className="ml-2 inline-flex gap-2">
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">gstreamer</span>
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">gsoc</span>
        </span>
      </p>
      <p>
        I’ve been selected as a student developer at Pitivi for Google Summer of Code 2020. My
        project is to create an object tracking and blurring feature.
      </p>
      <p>
        The tracking is done by passing the video clip through a pipeline which includes a tracker
        plugin. So, the first goal of the project was to implement the tracker plugin in GStreamer.
      </p>

      <h2>Introducing cvtracker</h2>
      <p>
        This is a GStreamer plugin which allows the user to select an object in the initial frame of
        a clip by specifying the object’s bounding box (x, y, width and height coordinates). The
        element then tracks the object during the subsequent frames of the clip.
      </p>
      <p>
        This plugin is in the{" "}
        <a
          href="https://gstreamer.freedesktop.org/modules/gst-plugins-bad.html"
          target="_blank"
          rel="noreferrer"
        >
          gst-plugins-bad
        </a>{" "}
        module. It is currently a{" "}
        <a
          href="https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/merge_requests/1321"
          target="_blank"
          rel="noreferrer"
        >
          merge request
        </a>
        .
      </p>
      <p>
        The plugin can be used by anyone by just installing the module. An example pipeline is given
        below.
      </p>

      <h2>Example</h2>
      <p>A sample pipeline with cvtracker looks like this:</p>
      <pre>
        <code>
{`gst-launch-1.0 filesrc location=t.mp4 ! decodebin ! videoconvert ! cvtracker object-initial-x=175 object-initial-y=40 object-initial-width=300 object-initial-height=150 algorithm=1 ! videoconvert ! xvimagesink`}
        </code>
      </pre>
      <p>
        Here’s a demo of the pipeline given above:{" "}
        <a href="https://youtu.be/K99qTfsvHnc" target="_blank" rel="noreferrer">
          YouTube
        </a>
      </p>

      <h2>Algorithm</h2>
      <p>
        The tracker incorporates{" "}
        <a
          href="https://docs.opencv.org/3.4/d0/d0a/classcv_1_1Tracker.html"
          target="_blank"
          rel="noreferrer"
        >
          OpenCV’s long term tracker cv::Tracker
        </a>
        .
      </p>
      <p>The available tracking algorithms are:</p>
      <pre>
        <code>
{`Boosting         - the Boosting tracker
CSRT             - the CSRT tracker
KCF              - the KCF (Kernelized Correlation Filter) tracker
MedianFlow       - the Median Flow tracker
MIL              - the MIL tracker
MOSSE            - the MOSSE (Minimum Output Sum of Squared Error) tracker
TLD              - the TLD (Tracking, learning and detection) tracker`}
        </code>
      </pre>
      <p>
        You might wonder why we missed the GOTURN algorithm. It was skipped due to the added
        complexity of setting up the models by the user.
      </p>

      <h2>Properties</h2>
      <pre>
        <code>
{`algorithm                   - the tracking algorithm to use
draw-rect                   - to draw a rectangle around the tracked object
object-initial-x            - object’s initial x coordinate
object-initial-x            - object’s initial y coordinate
object-initial-height       - object’s initial height
object-initial-width        - object’s initial width`}
        </code>
      </pre>
      <p>
        The element sends out the tracked object’s bounding box’s x, y, width and height coordinates
        through the pipeline bus and also through the buffer. If you want live tracking during the
        playback, you could use the <code>draw-rect</code> property.
      </p>
    </article>
  );
}

/* eslint react/no-unescaped-entities: 0 */
export default function Post() {
  return (
    <article className="prose prose-neutral mx-auto">
      <h1>Tracking adjustments in Pitivi</h1>
      <p className="!mt-0 text-sm text-foreground/60">
        {new Date("2020-08-16T13:27:21+05:30").toLocaleString()} ·
        <span className="ml-2 inline-flex gap-2">
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">pitivi</span>
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs">gsoc</span>
        </span>
      </p>
      <p>
        My last post was about adding a feature to track objects. But sometimes the algorithm doesn't
        track the object 100% correct, so in this post, I present to you a new update which lets the
        user edit the tracked data easily in the Pitivi Tracker Perspective itself.
      </p>

      <h2>Demo</h2>
      <p>
        See the feature in action.{" "}
        <a href="https://youtu.be/T09VJ1ntwI4" target="_blank" rel="noreferrer">
          YouTube
        </a>
      </p>
      <p>
        In the video, the user selects a clip and goes to the Tracker Perspective, by clicking on the
        "Track Object" button. Now, the user selects the object to track and chooses the algorithm
        before tracking. Pitivi tracks the object for the rest of the clip.
      </p>
      <p>
        But wait, the user has accidentally chosen only a portion of the object. They can correct this
        by seeking to a point in the tracking and selecting the object again, this time, they get it
        right :) After the tracking is completed, the tracking data is updated to accomodate the
        updated tracking co-ordinates.
      </p>
      <p>Similarly, we can correct faults in the tracking.</p>

      <h2>UI improvements</h2>
      <p>
        <img
          src="/images/2020-08-16-pitivi-object_track_editing/crosshair.png"
          alt="Cursor changes to crosshair when hovering on the viewer"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-16-pitivi-object_track_editing/pitivi_blur_object.png"
          alt="Track Object button is inside Blur Object popover"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-16-pitivi-object_track_editing/pitivi_edit_start_marker.png"
          alt="Start position of the tracked object shown as a marker on the seekbar"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-16-pitivi-object_track_editing/pitivi_object_track_edit.png"
          alt="Added an infobar to show instructions"
        />
      </p>
      <p>
        <img
          src="/images/2020-08-16-pitivi-object_track_editing/pitivi_object_track_edit2.png"
          alt="Info bar disappears on choosing an object"
        />
      </p>

      <h2>Further developments</h2>
      <p>
        A feature to add an effect to the tracked objects is in the development stage. The tracked
        objects will be shown in the "Blur Object" popover. The user can add an effect by clicking on
        the object. More on that in another post. :)
      </p>
    </article>
  );
}

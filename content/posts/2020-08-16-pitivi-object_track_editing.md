---
layout: post
title:  "Tracking adjustments in Pitivi"
date:   2020-08-16 13:27:21 +0530
tags: [pitivi,gsoc]
---
My last post was about adding a feature to track objects.
But sometimes the algorithm doesn't track the object 100% correct, so in this post, I present to you a new update which lets the user edit the tracked data easily in the Pitivi Tracker Perspective itself.

## Demo
See the feature in action. [YouTube](https://youtu.be/T09VJ1ntwI4)

In the video, the user selects a clip and goes to the Tracker Perspective, by clicking on the "Track Object" button. Now, the user selects the object to track and chooses the algorithm before tracking. Pitivi tracks the object for the rest of the clip. 

But wait, the user has accidentally chosen only a portion of the object. They can correct this by seeking to a point in the tracking and selecting the object again, this time, they get it right :)
After the tracking is completed, the tracking data is updated to accomodate the updated tracking co-ordinates.

Similarly, we can correct faults in the tracking.

## UI improvements

![Image](/images/2020-08-16-pitivi-object_track_editing/crosshair.png "Cursor changes to crosshair when hovering on the viewer")
![Image](/images/2020-08-16-pitivi-object_track_editing/pitivi_blur_object.png "Track Object button is inside Blur Object popover")
![Image](/images/2020-08-16-pitivi-object_track_editing/pitivi_edit_start_marker.png "Start position of the tracked object shown as a marker on the seekbar")
![Image](/images/2020-08-16-pitivi-object_track_editing/pitivi_object_track_edit.png "Added an infobar to show instructions")
![Image](/images/2020-08-16-pitivi-object_track_editing/pitivi_object_track_edit2.png "Info bar disappears on choosing an object")

## Further developments
A feature to add an effect to the tracked objects is in the development stage. The tracked objects will be shown in the "Blur Object" popover.
The user can add an effect by clicking on the object. More on that in another post. :)
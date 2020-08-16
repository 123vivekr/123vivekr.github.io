---
layout: post
title:  "Pitivi: Edit Object Tracking"
date:   2020-08-16 13:27:21 +0530
tags: pitivi gsoc
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

<p align="center">
    <img src="{{ site.baseurl }}/assets/crosshair.png">
    <p style="font-size: 15px;" align="center"> Cursor changes to crosshair when hovering on the viewer</p>
</p>

<p align="center">
    <img src="{{ site.baseurl }}/assets/pitivi_blur_object.png">
    <p style="font-size: 15px;" align="center"> Track Object button is inside Blur Object popover</p>
</p>

<p align="center">
    <img src="{{ site.baseurl }}/assets/pitivi_edit_start_marker.png">
    <p style="font-size: 15px;" align="center"> Start position of the tracked object shown as a marker on the seekbar</p>
</p>

<p align="center">
    <img src="{{ site.baseurl }}/assets/pitivi_object_track_edit.png">
    <p style="font-size: 15px;" align="center"> Added an infobar to show instructions</p>
</p>

<p align="center">
    <img src="{{ site.baseurl }}/assets/pitivi_object_track_edit2.png">
    <p style="font-size: 15px;" align="center"> Info bar disappears on choosing an object</p>
</p>

## Further developments
A feature to add an effect to the tracked objects is in the development stage. The tracked objects will be shown in the "Blur Object" popover.
The user can add an effect by clicking on the object. More on that in another post. :)
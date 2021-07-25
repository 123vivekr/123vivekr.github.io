---
layout: post
title:  "Pitivi can now track objects"
date:   2020-07-28 21:57:21 +0530
tags: [pitivi,gsoc]
---
I’ve been selected as a student developer at Pitivi for Google Summer of Code 2020.
My project is to create an object tracking and blurring feature.

In this post, I introduce a feature in development which allows the user to track an object inside a video clip.

## Object tracking in action
Before diving into the aspects, let’s see it in action. 
[YouTube](https://youtu.be/XdGxU19F_Hs)
	
In the video, the user selects the clip to be used and clicks on the “Track object” button. In the next screen (tracker perspective), the user chooses a frame and selects the object to be tracked using a drag-and-drop motion. The user then sets the tracking algorithm and initiates the tracking. Live tracking is displayed. The tracked object appears on the left pane. The user has the option to delete the tracked object.

## Internals		
The cvtracker is a plugin from gst-plugins-bad project (which is also a part of my GSoC project). It allows us to track the object by running the clip through a pipeline. The tracking data is available through the bus and buffer metadata.

The tracking in pitivi is implemented using a pipeline, which runs the clip and feeds it to the cvtracker. We extract the region-of-interest (ROI) data from the buffer.

An Object Manager class stores all the tracked objects in a clip. Technically, the object data is saved to the asset metadata. 
So every clip that gets generated using the asset has access to all the tracked objects.

## Tracking data
For receiving the tracking data from the cvtracker, we use `fakesink` with the properties: `fakesink name=sink signal-handoffs=TRUE`.

Then we connect the `handoff` signal to the callback function:

{{< highlight python >}}
def __tracker_handoff_cb(self, unused_element, buffer, unused_pad, roi_data):
    video_roi = GstVideo.buffer_get_video_region_of_interest_meta_id(buffer, 0)
    if video_roi:
        roi_data[buffer.pts] = (video_roi.x, video_roi.y, video_roi.w, video_roi.h)
    else:
        self.log("lost tracker at: %s" + str(buffer.pts / Gst.SECOND))
{{< / highlight >}}

## Further developments
There’s more coming!
Sometimes the tracking can be a little inaccurate, so we’re working on a feature to adjust the tracking of an object. Basically the user can manually adjust the tracking data using a simple and user friendly interface, integrated right into the tracker perspective. More on that in another post.

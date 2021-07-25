---
layout: post
title:  "cvtracker: An object tracking plugin for GStreamer"
date:   2020-08-15 21:57:21 +0530
tags: [gstreamer,gsoc]
---
I’ve been selected as a student developer at Pitivi for Google Summer of Code 2020. 
My project is to create an object tracking and blurring feature.

The tracking is done by passing the video clip through a pipeline which includes a tracker plugin.
So, the first goal of the project was to implement the tracker plugin in GStreamer.

## Introducing cvtracker
This is a GStreamer plugin which allows the user to select an object in the initial frame of a clip by specifying the object’s bounding box (x, y, width and height coordinates). The element then tracks the object during the subsequent frames of the clip.

This plugin is in the [gst-plugins-bad](https://gstreamer.freedesktop.org/modules/gst-plugins-bad.html) module. It is currently a [merge request](https://gitlab.freedesktop.org/gstreamer/gst-plugins-bad/-/merge_requests/1321).

The plugin can be used by anyone by just installing the module. An example pipeline is given below.

## Example
A sample pipeline with cvtracker looks like this:

{{< highlight bash >}}
gst-launch-1.0 filesrc location=t.mp4 ! decodebin ! videoconvert ! cvtracker object-initial-x=175 object-initial-y=40object-initial-width=300 object-initial-height=150 algorithm=1 ! videoconvert ! xvimagesink
{{< / highlight >}}

Here’s a demo of the pipeline given above: [YouTube](https://youtu.be/K99qTfsvHnc)

## Algorithm
The tracker incorporates [OpenCV’s long term tracker cv::Tracker](https://docs.opencv.org/3.4/d0/d0a/classcv_1_1Tracker.html).

The available tracking algorithms are:

{{< highlight text >}}
Boosting         - the Boosting tracker
CSRT             - the CSRT tracker
KCF              - the KCF (Kernelized Correlation Filter) tracker
MedianFlow       - the Median Flow tracker
MIL              - the MIL tracker
MOSSE            - the MOSSE (Minimum Output Sum of Squared Error) tracker
TLD              - the TLD (Tracking, learning and detection) tracker
{{< / highlight >}}

You might wonder why we missed the GOTURN algorithm. It was skipped due to the added complexity of setting up the models by the user.

## Properties
{{< highlight text >}}
algorithm                   - the tracking algorithm to use
draw-rect                   - to draw a rectangle around the tracked object
object-initial-x            - object’s initial x coordinate
object-initial-x            - object’s initial y coordinate
object-initial-height       - object’s initial height
object-initial-width        - object’s initial width
{{< / highlight >}}

The element sends out the tracked object’s bounding box’s x, y, width and height coordinates through the pipeline bus and also through the buffer. If you want live tracking during the playback, you could use the `draw-rect` property.

---
layout: post
title:  "Point Cloud Recorder - for the Toré Virtual"
author: tiago
categories: [ Funarte, Point Cloud, RGB-D, RealSense, Kinect, Fulni-Ô, OpenFrameworks ]
tags: [ funarte, pointcloud, rgbd, realsense, kinect, fulnio, openframeworks ]
image: assets/images/capas/depth-video-recorder.png
lang: en
#permalink: en/elemental
featured: true
hidden: true
hasAudio: false
hasVideo: false
hasPaper: false
hasScore: false
hasInteractivity: false
hasSourceCode: false
hasPDF: false
---

## The VR film Toré Virtual

Many cultural manifestations of originary peoples inside northeastern Brazil are named Toré. This project, the Toré Virtual, is developing a VR film of the Toré of the Fulni-Ô people (located in Águas Belas, Pernambuco State), in the form of a transfigured documentation of a Toré performed by a group of young people.

Toré Virtual is being produced by <a href="https://www.labpresenca.com.br">LabPresença</a> and <a href="https://www.instagram.com/coletivofulniodecinema">Coletivo de Cinema Indígena Fulni-Ô</a>, via the Funarte Retomada 2023 public prize, funded by Fundação Nacional das Artes, from the brazilian Ministry of Culture.

<img src="{{ site.baseurl }}/assets/images/tore-virtual-3d-capture.jpeg" class="center">

## Overview of the Point Cloud Recorder

This Point Cloud Recorder was developed by me and Anthony Bet as part of Toré Virtual. The main goal was being able to make recordings large in duration and without data loss nor stutter. With it we were able to record the whole Toré group presentation in point cloud format in a single take, using two RGB-D sensors: an Intel RealSense D455 and a Microsoft Kinect v2. We also recorded some shots of individuals and small groups. Everything now is heading to the post-production team for editing and FX.

Developed in C++, using <a href="https://openframeworks.cc/">OpenFrameworks</a>.

Soon more info.
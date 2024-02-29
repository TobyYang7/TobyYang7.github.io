---
layout: page
title: Vision
description: This is a LaTex report template for CUHKSZ students.
img: assets/img/project/vision.png
importance: 1
category: school
related_publications: false
---

## Introduction

This project is a simple application of the MiniCPM-V model for image recognition. It will precive the image and tell you what it sees in real time.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/project/vision.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

## How to use this repository

1. Download the MiniCPM-V from the [model1](https://huggingface.co/openbmb/MiniCPM-V/resolve/main/model-00001-of-00002.safetensors?download=true) and [model2](https://huggingface.co/openbmb/MiniCPM-V/resolve/main/model-00002-of-00002.safetensors?download=true) links. And put them in the `MiniCPM-V` folder.

2. Install the requirements by running `pip install -r requirements.txt`.

3. Run the `vision.py` file by running `python vision.py`.

4. Quit the application by pressing `q`.

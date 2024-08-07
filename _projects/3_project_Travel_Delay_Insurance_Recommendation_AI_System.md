---
layout: page
title: Travel Delay Insurance Recommendation AI System
description: In this project, we designed an AI system to identify potential travel insurance intentions of customers. Our designed large language model (LLM), named Insurance-GPT, is capable of analyzing in real-time during interactions with users and it utilizes deep learning model to accurately predict flight delay.
img: assets/img/publication_preview/ASTGCN.gif
importance: 1
category: school
related_publications: yang2024insurancegpt
---

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/project/bg.svg" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

## Overview

Our AI system, Insurance-GPT, leverages a Large Language Model (LLM) to analyze customer interactions in real-time and predict flight delays using a deep learning model. This system provides personalized insurance recommendations to improve user experience and offers valuable insights for insurance pricing strategies.

## Features

- **Real-time Interaction**: Insurance-GPT interacts with users to understand their needs and preferences.
- **Flight Delay Prediction**: Utilizes a deep learning model to predict flight delays accurately.
- **Personalized Insurance Recommendations**: Provides tailored insurance suggestions based on predicted delays and customer sentiment.

## Datasets

We used three main datasets to train and evaluate our models:

1. **[Travel Insurance Dataset](https://www.kaggle.com/datasets/marwandiab/travel-insurance-dataset)**: Contains customer profiles and their potential to purchase insurance.
2. **[Twitter US Airline Sentiment Dataset](https://www.kaggle.com/datasets/crowdflower/twitter-airline-sentiment?resource=download&select=Tweets.csv)**: Provides user reviews about US airlines, categorized as positive or negative.
3. **[InsuranceQA-v2 Dataset](https://huggingface.co/datasets/soulhq-ai/insuranceQA-v2)**: Contains insurance-related questions and answers for training our model.

## Model Implementation

### LLM Fine-Tuning

1. **Supervised Fine-Tuning (SFT)**: On the insuranceQA-v2 dataset to improve domain-specific understanding.
2. **Odds Ratio Preference Optimization (ORPO)**: To enhance the model's generalization and alignment with human preferences.
3. **LoRA Fine-Tuning**: On the Travel Insurance Dataset to improve precision in predicting user purchase intent.

### Deep Learning Model

Our deep learning model uses the ASTGCN framework to predict flight delays based on spatio-temporal data. This framework captures both temporal and spatial correlations in the data for accurate predictions.

## Citation

If you use this code or dataset in your research, please cite our report using the following BibTeX entry:

```bibtex
@techreport{yang2024insurancegpt,
  author       = {Yuzhe Yang and Haoqi Zhang and Zhidong Peng and Yilin Guo and Tianji Zhou},
  title        = {Travel Insurance Recommendation AI System Based on Flight Delay Predictions and Customer Sentiment},
  institution  = {The Chinese University of Hong Kong, Shenzhen},
  year         = {2024},
  url          = {https://github.com/TobyYang7/Travel-Insurance-Recommendation-AI-System},
  note         = {Available at: \url{https://github.com/TobyYang7/Travel-Insurance-Recommendation-AI-System}}
}
```
